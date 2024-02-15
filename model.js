const mongoose = require("mongoose")
const adminschema = new mongoose.Schema(
    {
        email:String,
        password:String,
        name:String,
        empid:String,
        address:String,
        mobileno:String
        
    }
)

module.exports = mongoose.model("admins",adminschema)