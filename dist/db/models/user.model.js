import mongoose from "mongoose";
// const Schema = new mongoose.Schema<ITask>({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     imageUrl: {
//         type: String,
//         default: null
//     },
// }, {
//     timestamps: true,
//     versionKey: false,
//     toJSON: { virtuals: true },
//     toObject: { virtuals: true }
// });
// Schema.virtual('fullImageUrl').get(function (this: ITask) {
//     if (this.imageUrl && !this.imageUrl.startsWith('http')) {
//         return `http://localhost:3000/uploads/messages/${this.imageUrl}`;
//     }
//     return this.imageUrl;
// });
// 
const Schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    userImage: { type: String, default: null } // 👈 التأكد أن هذا موجود
}, {
    timestamps: true,
    toJSON: { virtuals: true }, // 👈 ضروري جداً لظهور الرابط في الفرونت
    toObject: { virtuals: true }
});
Schema.virtual('fulluserImage').get(function () {
    if (this.userImage) {
        // تأكد أن المسار يطابق مجلد Multer (uploads/messages)
        return `http://localhost:3000/uploads/profiles/${this.userImage}`;
    }
    return null;
});
export const User = mongoose.model('User', Schema);
//# sourceMappingURL=user.model.js.map