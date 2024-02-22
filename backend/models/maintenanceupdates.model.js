const mongoose=require("mongoose");
const testSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    course_updates:{
        type:String,
        required:true,
    },
    platform_maintenance:{
        type:String,
        required:true,
    },
    knowledge_updates:{
        type:String,
        required:true,
    },
    
},
{
    timestamps:true,
})

module.exports=mongoose.model("maintenanceupdates",testSchema);
