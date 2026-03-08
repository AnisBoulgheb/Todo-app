const mongoose =require("mongoose")

// const connectionUrl = "mongodb://localhost:27017/todo";

const connectMongodb = async()=>{
    try{
await mongoose.connect(process.env.CONNECTION_URL);        //await mongoose.connect(connectionUrl);
        console.log("DataBase connection successful")
    }catch(error){
        console.log(error.message);
        process.exit(1);
    }
}

module.exports=connectMongodb;