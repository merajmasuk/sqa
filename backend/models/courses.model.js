const mongoose=require("mongoose");
const testSchema=new mongoose.Schema({
    courseid:{
        type:String,
        required:true,
    },
    course_Name:{
        type:String,
        required:true,
    },
    Instructor_id:{
        type:String,
        required:true,
    },
    start_date:{
        type:Date,
        required:true,
    },
    end_date:{
        type:Date,
        required:true,
    },
    capacity:{
        type:String,
        required:true,
    },
},
{
    timestamps:true,
})

module.exports=mongoose.model("courses",testSchema);
