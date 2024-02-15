const express=require("express")
const router = express.Router()
const visitormodel = require("./vismodel")

router.post("/addvisitor",async (req,res)=>
{
let data = req.body
let visitor = new visitormodel(data)
let result = await visitor.save()
res.json(
    {
        status:"success"
    }
)
    })

router.get("/viewall",async(req,res)=>{
    let result = await visitormodel.find().populate("userId","name empid -_id").exec()
    res.json(result)
    })

    
module.exports=router