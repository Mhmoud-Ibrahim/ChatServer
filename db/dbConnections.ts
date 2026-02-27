import mongoose, { connect } from "mongoose";



export const  dbConnections = ()=>{
if (mongoose.connection.readyState >= 1) return;
console.log("DBconnected successfully")
return connect("mongodb+srv://admin:admin@cluster0.2kmdjfv.mongodb.net/chatnow") 

}

