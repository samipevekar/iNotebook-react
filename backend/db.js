const mongoose=require("mongoose");
// const mongoURI="mongodb://127.0.0.1/test"
const mongoURI="mongodb+srv://samipevekar:1234sami@cluster0.x7luk2u.mongodb.net/"


const connetToMongo=()=>{
    mongoose.connect(mongoURI)
}
console.log("connected to mongo successfully")

module.exports=connetToMongo