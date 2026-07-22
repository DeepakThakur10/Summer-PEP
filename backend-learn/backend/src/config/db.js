import mogoose from 'mongoose';

export const ConnectDB = async()=>{
    try{
        await mogoose.connect(process.env.MONGO_URI);
        console.log("database connected");
    }
    catch(error){
       console.log("Connection false");
    }
}