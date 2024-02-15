const mongoose = require("mongoose")
const visitorschema = new mongoose.Schema(
    {
       userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"admins"
       },
       name:{
        type:String,
        required:true
       },
       purpose:{
        type:String,
        required:true
       },
       address:{
        type:String,
        required:true
       },
       mobileno:{
        type:String,
        required:true
       },

    }
)

module.exports = mongoose.model("visitors",visitorschema)