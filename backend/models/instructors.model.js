const mongoose=require("mongoose");
const testSchema=new mongoose.Schema({
    instructor_id:{
        type:String,
        required:true,
    },
    First_Name:{
        type:String,
        required:true,
    },
    Last_Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    Phone:{
        type:String,
        required:true,
    },
},
{
    timestamps:true,
})

module.exports=mongoose.model("instruct",testSchema);
