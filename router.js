const express=require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")

const adminmodel = require("./model")

hashPasswordGenerator=async(pass)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/addsecurity",async (req,res)=>
{
let {data} = {"data": req.body}
let password=data.password
const hashedPassword = await hashPasswordGenerator(password)
data.password=hashedPassword
let admin = new adminmodel(data)
let result = admin.save()
res.json(
    {
        status:"success"
    }
)
    })

router.post("/login",async(req,res)=>{
    let email = req.body.email
    let data = await adminmodel.findOne({"email":email})
    if(!data)
    {
        return res.json(
            {
                status:"Invalid user"
            }
        )
    }
    let dpPassword = data.password
    let inputPassword = req.body.password
    const match = await bcrypt.compare(inputPassword,dpPassword)
    if(!match)
    {
       return res.json(
            {
                status:"Invalid Password"
            }
        )
    }
    res.json(
        {
            status:"success","userdata":data
        }
    )
})

router.get("/viewall",async(req,res)=>
{
    let result = await adminmodel.find()
    res.json(result)
})
module.exports=router