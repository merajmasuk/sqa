const mongoose=require("mongoose");
const testSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    setup:{
        type:String,
        required:true,
    },
    testing:{
        type:String,
        required:true,
    },
   
},
{
    timestamps:true,
})

module.exports=mongoose.model("platform",testSchema);
