import mongoose, { Schema, Document, Types } from 'mongoose';
const TAskSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    imageUrl: {
        type: String,
        default: null
    },
    seen: {
        type: Boolean, default: false
    }
}, {
    timestamps: true,
    versionKey: false,
    // تفعيل الـ Virtuals لتظهر عند إرسال البيانات كـ JSON
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
// بدلاً من 'post init'، نستخدم Virtual لتركيب الرابط ديناميكياً
TAskSchema.virtual('fullImageUrl').get(function () {
    if (this.imageUrl && !this.imageUrl.startsWith('http')) {
        return `http://localhost:3000/uploads/messages/${this.imageUrl}`;
    }
    return this.imageUrl;
});
export const MessagesModel = mongoose.model('Messages', TAskSchema);
//# sourceMappingURL=messages.model.js.map