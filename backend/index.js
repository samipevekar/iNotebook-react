const connectToMongo=require("./db")
const express = require('express')
const cors = require("cors")


connectToMongo()
const app = express()
const port = 5000

app.use(cors({
  methods:["GET","POST","OPTIONS","PUT","DELETE"],
  origin:["https://i-notebook-frontend-nu.vercel.app","http://localhost:3000"],
  credentials:true
}))
app.use(express.json())

app.get("/",(req,res)=>{
  res.send("hello world")
})

// available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))





app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})