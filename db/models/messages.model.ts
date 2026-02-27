import mongoose, { Schema, Document, Types } from 'mongoose';

export interface ITask extends Document {
  text: string;
  sender: Types.ObjectId;
  receiver: Types.ObjectId;
  imageUrl: string;
  fullImageUrl?: string;
  seen: boolean;
}

const TAskSchema = new mongoose.Schema<ITask>({
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
    type: Boolean, default: false }
}, {
  timestamps: true,
  versionKey: false,
  // تفعيل الـ Virtuals لتظهر عند إرسال البيانات كـ JSON
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// بدلاً من 'post init'، نستخدم Virtual لتركيب الرابط ديناميكياً
TAskSchema.virtual('fullImageUrl').get(function (this: ITask) {
  if (this.imageUrl && !this.imageUrl.startsWith('http')) {
    return `http://localhost:3000/uploads/messages/${this.imageUrl}`;
  }
  return this.imageUrl;
});

export const MessagesModel = mongoose.model<ITask>('Messages', TAskSchema);
