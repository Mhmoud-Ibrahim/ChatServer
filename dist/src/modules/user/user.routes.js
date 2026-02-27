import { Router } from "express";
import { getMyProfile, logout, signin, signup } from "./user.controller.js";
const userRouter = Router();
userRouter
    .post('/signup', signup)
    .post('/signin', signin)
    .post('/logout', logout);
export default userRouter;
//# sourceMappingURL=user.routes.js.map