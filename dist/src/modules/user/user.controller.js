import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { catchError } from '../../middleware/catchError.js';
import { AppError } from '../../utils/appError.js';
import { User } from '../../../db/models/user.model.js';
//signup
const signup = catchError(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user)
        return res.status(400).json({ message: "user already exists" });
    const hashpassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashpassword;
    let newuser = new User(req.body);
    await newuser.save();
    res.json({ message: "success" });
});
//signin
// const signin = catchError(async (req:Request, res:Response, next:NextFunction) => {
//     const { email, password } = req.body
//     const user = await User.findOne({ email })
//     if (!user) return next(new AppError('user not found', 401))
//     const isPasswordCorrect =await bcrypt.compare(password,user.password);
//     if (isPasswordCorrect) {
//         let token = jwt.sign({userId: user._id, email: user.email, name: user.name },"ChatNowSecretKey", { expiresIn: '1d' })
//         res.cookie('token', token, {
//             httpOnly: true,   
//             secure:false, // في التطوير خليها false، في الإنتاج خليها true
//             sameSite: 'lax', 
//             path: '/',
//             maxAge: 24 * 60 * 60 * 1000  ,   
//         })
//         return res.status(200).json({ message: "success" });
//     }
//     return next(new AppError('incorrect email or password ', 401))
// })
const signin = catchError(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return next(new AppError('Invalid email or password', 401));
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || "ChatNowSecretKey", { expiresIn: '1d' });
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 24 * 60 * 60 * 1000
    });
    res.cookie('userId', user._id.toString(), {
        httpOnly: false, // هامة جداً لكي يراها الفرونت إند
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 24 * 60 * 60 * 1000
    });
    res.status(200).json({
        message: "success",
        user: { name: user.name, id: user._id }
    });
});
const logout = catchError((req, res) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/',
    });
    return res.json({ message: 'Logged out successfully' });
});
const getMyProfile = catchError(async (req, res, next) => {
    const _id = req.cookies || req.cookies.token;
    const user = await User.findById(_id);
    if (!user) {
        return next(new AppError('User not found', 404));
    }
    return res.json({ user });
});
export { signup, signin, logout, getMyProfile };
//# sourceMappingURL=user.controller.js.map