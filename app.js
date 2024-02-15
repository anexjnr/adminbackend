const adminrouter=require("./router")
const visitorrouter = require("./visrouter")

const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const app = express()

//middleware

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://anex:anex123@cluster0.bgkikbl.mongodb.net/adminDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})

//routing
app.use("/api/visitor",visitorrouter)
app.use("/api",adminrouter)

app.listen(3001,()=>{
    console.log("server running")
})