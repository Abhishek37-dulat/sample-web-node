import mongoose from "mongoose";

export const Connection = async(MONGODB_URL) => {
    try{
        await mongoose.connect(MONGODB_URL);
    }catch(error){
        console.log("ERROR MongoDB URL: ",error)
    }
    
}
