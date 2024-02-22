const mongoose=require("mongoose");
const testSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    training:{
        type:String,
        required:true,
    },
    assessment:{
        type:String,
        required:true,
    },
    
},
{
    timestamps:true,
})

module.exports=mongoose.model("instructor",testSchema);
