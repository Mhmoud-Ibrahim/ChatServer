import { Socket } from "socket.io";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { AppError } from "../utils/appError.js";
const socketAuth = (socket, next) => {
    try {
        //  console.log("Headers received:", socket.handshake.headers.cookie);
        const reqCookie = socket.handshake.headers.cookie;
        if (!reqCookie) {
            return next(new AppError("Authentication error: No cookies found", 401));
        }
        // 2. تحليل الكوكي واستخراج التوكن
        const parsedCookies = cookie.parse(reqCookie);
        const token = parsedCookies.token; // نفس الاسم اللي استخدمته في الـ Signin
        if (!token) {
            return next(new AppError("Authentication error: Token missing", 401));
        }
        // 3. التحقق من التوكن (JWT)
        // console.log("Secret Key Status:", !!process.env.SECRET_KEY);
        const decoded = jwt.verify(token, "ChatNowSecretKey");
        // 4. تخزين بيانات اليوزر داخل الـ socket عشان نستخدمها في الـ Controller
        socket.data.userId = decoded.userId;
        socket.data.userName = decoded.name;
        next(); // لو كله تمام، كمل الاتصال
    }
    catch (err) {
        next(new AppError("Authentication error: Invalid token", 401));
    }
};
export default socketAuth;
//# sourceMappingURL=socket.js.map