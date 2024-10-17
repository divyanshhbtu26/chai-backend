import mongoose from 'mongoose';
import {DB_NAME} from "../constants.js";

// DB is in other continent , so we are using TRY and CATCH along with ASYNC and AWAIT
const connectDB= async ()=>{
    try {
        const connectionInstance=await mongoose.catch('${process.env.MONGODB_URI}/${DB_NAME}');
        console.log('\n MongoDB connected !! DB Host : ${connectionInstance.connection.host}');

    } catch (error) {
        console.log("MONGODB CONNECTION ERROR : ",error) 
        process.exit(1)
    }
}

export default connectDB