const mongoose=require("mongoose");
const mongoURI="mongodb://127.0.0.1/test"

const connetToMongo=()=>{
    mongoose.connect(mongoURI)
}
console.log("connected to mongo successfully")

module.exports=connetToMongo