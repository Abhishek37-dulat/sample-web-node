import mongoose from "mongoose";

export const Connection = async(MONGODB_URL) => {
    try{
        await mongoose.connect(MONGODB_URL);
        console.log('connected to Mongoose...')
    }catch(error){
        console.log("ERROR MongoDB URL: ",error)
    }
    
}
