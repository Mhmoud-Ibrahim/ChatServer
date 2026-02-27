
import { Server, Socket } from "socket.io";
import { MessagesModel } from "../../../db/models/messages.model.js";
import { User } from "../../../db/models/user.model.js";
interface JwtPayload {
    userId: string;
    email: string;
    name: string;
    iat: number;
    exp: number;  
}
interface PrivateMessagePayload {
  msg?: string; // جعلته اختيارياً لأن الرسالة قد تكون صورة فقط
  imageUrl?: string
  receiverId: string;
}

const onlineUsers = new Map<string, { socketId: string; name: string }>();

export const registerChatHandlers = async (io: Server, socket: Socket) => {
  const userId: string = socket.data.userId;

  if (userId) {
    try {
      const user = await User.findById(userId).select("name");
      if (user) {
        onlineUsers.set(userId, {
          socketId: socket.id,
          name: user.name
        });
      }
    } catch (error) {
      console.error("Error fetching user name:", error);
    }
  }

  const broadcastOnlineUsers = () => {
    const usersList = Array.from(onlineUsers.entries()).map(([id, data]) => ({
      userId: id,
      name: data.name
    }));
    io.emit("online_users", usersList);
  };
  // --- حدث قراءة الرسائل (يجب أن يكون هنا خارج أي دالة أخرى) ---
  socket.on("messages_read", async ({ senderId }: { senderId: string }) => {
    const receiverId = socket.data.userId; 
    try {
      // 1. تحديث قاعدة البيانات
      await MessagesModel.updateMany(
        { sender: senderId, receiver: receiverId, seen: false },
        { $set: { seen: true } }
      );

      // 2. إبلاغ الطرف الآخر فوراً ليتحول اللون للأزرق عنده
      const senderData = onlineUsers.get(senderId);
      if (senderData) {
        io.to(senderData.socketId).emit("messages_read_update", {
          readBy: receiverId
        });
      }
    } catch (error) {
      console.error("Error in messages_read:", error);
    }
  });
  broadcastOnlineUsers();

  // حدث جلب المحادثة عند النقر على اسم الشخص
socket.on("get_chat_history", async ({ receiverId }) => {
  const senderId = socket.data.userId;
  try {
    const history = await MessagesModel.find({
      $or: [
        { sender: senderId, receiver: receiverId },
        { sender: receiverId, receiver: senderId }
      ]
    }).sort({ createdAt: 1 });

    socket.emit('get_history', history);
  } catch (error) {
    console.error("Error fetching history:", error);
  }
});


  const handlePrivateMessage = async ({ msg, receiverId, imageUrl }: PrivateMessagePayload) => {
    const senderId = socket.data.userId;
    try {
      const savedMsg = await MessagesModel.create({
        text: msg || "", 
        imageUrl: imageUrl || '',
        sender: senderId,
        receiver: receiverId,
        seen: false,
        $set: { seen: true }
      });

    const responseData = {
  _id: savedMsg._id,
        text: savedMsg.text,
        imageUrl: savedMsg.imageUrl,
        senderId: senderId,
        receiverId: receiverId,
        seen: savedMsg.seen,
         createdAt: (savedMsg as any).createdAt
};
      const receiverData = onlineUsers.get(receiverId);
      if (receiverData) {
        io.to(receiverData.socketId).emit("private_reply", responseData);
      }

      // إرسال الرد للمرسل نفسه لتحديث واجهته
      socket.emit("private_reply", responseData);

      // جلب التاريخ وتحديثه للطرفين فقط
      const history = await MessagesModel.find({
        $or: [
          { sender: senderId, receiver: receiverId },
          { sender: receiverId, receiver: senderId }
        ]
      }).sort({ createdAt: 1 });

      socket.emit('get_history', history);
      if (receiverData) {
        io.to(receiverData.socketId).emit('get_history', history);
      }

    } catch (error) {
      console.error("Error in private message:", error);
    }
  };

  //delete
  // دالة التعامل مع حذف الرسالة
const handleDeleteMessage = async ({ messageId, receiverId }: { messageId: string, receiverId: string }) => {
  const senderId = socket.data.userId;

  try {
    // التأكد من أن الذي يحذف هو صاحب الرسالة (أمان إضافي)
    const message = await MessagesModel.findOneAndDelete({ _id: messageId, sender: senderId });

    if (message) {
      // إرسال حدث الحذف للمرسل
      socket.emit("message_deleted", { messageId });

      // إرسال حدث الحذف للمستقبل إذا كان متصلاً
      const receiverData = onlineUsers.get(receiverId);
      if (receiverData) {
        io.to(receiverData.socketId).emit("message_deleted", { messageId });
      }

      console.log(`Message ${messageId} deleted by ${senderId}`);
    }
  } catch (error) {
    console.error("Error deleting message:", error);
  }
};

const handleDeleteSenderMessages = async ({ receiverId }: { receiverId: string }) => {
  const senderId = socket.data.userId;
  try {
    // حذف كل الرسائل التي أرسلها المستخدم الحالي لهذا المستلم تحديداً
    await MessagesModel.deleteMany({ sender: socket.data.userId, receiver: receiverId });
    

    const history = await MessagesModel.find({
        $or: [
            { sender: socket.data.userId, receiver: receiverId },
            { sender: receiverId, receiver: socket.data.userId }
        ]
    }).sort({ createdAt: 1 });
    
    socket.emit('get_history', history); 

    // اختيارياً: لو عايز الطرف التاني يحس بالتغيير فوراً
    const receiverData = onlineUsers.get(receiverId);
    if (receiverData) {
      io.to(receiverData.socketId).emit('get_history', history);
    }

    console.log("Messages deleted successfully for sender");
  } catch (error) {
    console.error("Error deleting sender messages:", error);
  }
};
socket.on("get_profile", async () => {
    const userId = socket.data.userId; 
    const user = await User.findById(userId);
    if (!user) {
        return socket.emit("error", { message: "User not found" });
    }
    socket.emit("profile_data", { user }); 
});

socket.on("update_profile", async (updatedData) => {
    try {
        const userId = socket.data.userId;
        // تحديث المستخدم في قاعدة البيانات
        const updatedUser = await User.findByIdAndUpdate(
            userId, 
            { $set: updatedData }, 
            { new: true } // ليرجع المستخدم بعد التعديل
        );

        if (!updatedUser) return socket.emit("error", "User not found");

        // نبعت البيانات الجديدة للفرونت عشان يتحدث فوراً
        socket.emit("profile_updated", { user: updatedUser });
    } catch (err) {
        socket.emit("error", "Failed to update profile");
    }
});






// ربط الحدث بالدالة
socket.on("delete_msg", handleDeleteMessage);
socket.on("delete_sender_messages", (data) => handleDeleteSenderMessages(data));


  //delete

  socket.on("private_msg", handlePrivateMessage);
 

  socket.on("disconnect", () => {
    if (userId) {
      onlineUsers.delete(userId);
      broadcastOnlineUsers();
    }
    console.log(`User ${userId} disconnected`);
  });
};
