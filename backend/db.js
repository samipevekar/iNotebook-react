const mongoose=require("mongoose");
// const mongoURI="mongodb://127.0.0.1/test"
const mongoURI="mongodb+srv://samipevekar:1234sami@cluster0.x7luk2u.mongodb.net/Inotebook"


const connetToMongo=()=>{
    mongoose.connect(mongoURI)
    .then(()=>console.log("connected"))    
    .catch((err)=>console.log(err))
}

module.exports=connetToMongo