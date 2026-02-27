import jwt from "jsonwebtoken";
import type { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/appError.js";
interface JwtPayload {
    userId: string;
    email: string;
    name: string;
    iat: number;
    exp: number;  
}
export const authenticate = (req: any, res: Response, next: NextFunction) => {
    // 1. قراءة التوكن من الكوكيز (تأكد أن الاسم هو 'token' أو الاسم الذي استخدمته عند تسجيل الدخول)
    const token = req.cookies.token || req.cookies.userId; 

    if (!token) {
        return next(new AppError("Token not found, unauthorized", 401));
    }

    try {
        // 2. التحقق من التوكن
        const decoded = jwt.verify(token,process.env.JWT_SECRET || "ChatNowSecretKey") as JwtPayload;
        
        // 3. تخزين البيانات في req.user (عشان الـ Controller يشوف req.user.userId)
        req.user = decoded; 
        
        return next();
    } catch (error) {
        return next(new AppError("Invalid or expired token", 401));
    }
};

