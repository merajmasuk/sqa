const mongoose=require("mongoose");
const testSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    target:{
        type:String,
        required:true,
    },
    learning:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    Timeline:{
        type:String,
        required:true,
    },
},
{
    timestamps:true,
})

module.exports=mongoose.model("assesment",testSchema);
