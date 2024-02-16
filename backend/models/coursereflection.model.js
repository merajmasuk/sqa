const mongoose=require("mongoose");
const testSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    course_Details:{
        type:String,
        required:true,
    },
    lessons_leraned:{
        type:String,
        required:true,
    },
    feedback_archive:{
        type:String,
        required:true,
    },
    
},
{
    timestamps:true,
})

module.exports=mongoose.model("coursereflection",testSchema);
