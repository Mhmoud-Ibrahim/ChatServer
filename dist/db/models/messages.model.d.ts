import mongoose, { Document, Types } from 'mongoose';
export interface ITask extends Document {
    text: string;
    sender: Types.ObjectId;
    receiver: Types.ObjectId;
    imageUrl: string;
    fullImageUrl?: string;
    seen: boolean;
}
export declare const MessagesModel: mongoose.Model<ITask, {}, {}, {}, mongoose.Document<unknown, {}, ITask, {}, mongoose.DefaultSchemaOptions> & ITask & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ITask>;
//# sourceMappingURL=messages.model.d.ts.map