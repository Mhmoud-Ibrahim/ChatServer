import mongoose, { connect } from "mongoose";
export const dbConnections = () => {
    if (mongoose.connection.readyState >= 1)
        return;
    console.log("DBconnected successfully");
    return connect(process.env.MONGO_URL || "mongodb+srv://admin:jV5NckZGQJotDby0@cluster0.2kmdjfv.mongodb.net/chatnow");
};
//# sourceMappingURL=dbConnections.js.map