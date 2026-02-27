import jwt from "jsonwebtoken";
import { AppError } from "../utils/appError.js";
import { User } from "../../db/models/user.model.js";
// export const protectedRoute = (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const userId = req.cookies.userId;
//         if (!userId) {
//             return next(new AppError("unauthenticated", 401));
//         }
//         const decoded = jwt.verify(userId, "ChatNowSecretKey") as any;
//         req.user = decoded;
//         next();
//     } catch (err) {
//         return next(new AppError("invalid token", 401));
//     }
// };
export const protectedRoute = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return next(new AppError("unauthenticated", 401));
        }
        const decoded = jwt.verify(token, "ChatNowSecretKey");
        // خطوة إضافية: التأكد أن المستخدم لم يتم حذفه بعد إصدار التوكن
        const userExists = await User.findById(decoded.userId);
        if (!userExists)
            return next(new AppError("User no longer exists", 401));
        req.user = decoded;
        next();
    }
    catch (err) {
        return next(new AppError("invalid token", 401));
    }
};
//# sourceMappingURL=protectedRoute.js.map