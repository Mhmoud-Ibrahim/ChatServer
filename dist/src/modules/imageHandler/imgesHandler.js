import { AppError } from "../../utils/appError.js";
import { User } from "../../../db/models/user.model.js";
import { catchError } from "../../middleware/catchError.js";
// 1. تعديل رفع صور الرسائل
export const uploadMessageImage = (req, res, next) => {
    const file = req.file;
    if (!file) {
        return next(new AppError('No file uploaded', 400));
    }
    // الأفضل إرسال رابط كامل هنا لأننا نحتاج استخدامه فوراً في السوكيت قبل الحفظ
    const imageUrl = `${req.protocol}://${req.get('host')}/uploads/messages/${file.filename}`;
    return res.json({
        message: "Image uploaded successfully",
        imageUrl // هذا هو الرابط الذي سيستخدمه السوكيت للإرسال
    });
};
// 2. تعديل رفع صورة البروفايل
export const uploadProfileImage = catchError(async (req, res, next) => {
    if (!req.file) {
        return next(new AppError('No file received', 400));
    }
    const userId = req.user.userId;
    // تحديث حقل userImage باسم الملف فقط (لأن الـ Virtual يتكفل بالرابط الكامل)
    const updatedUser = await User.findByIdAndUpdate(userId, { userImage: req.file.filename }, { returnDocument: 'after' }).select("-password");
    if (!updatedUser)
        return next(new AppError("User not found", 404));
    return res.status(200).json({
        message: "Success",
        user: updatedUser // سيعود لليوزر بـ fulluserImage تلقائياً
    });
});
//# sourceMappingURL=imgesHandler.js.map