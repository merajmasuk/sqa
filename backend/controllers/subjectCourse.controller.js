const subjectCourseSchema=require("../models/subjectCourse.model");

const setSubjectCourse=async(req,res)=>{
    const data=req.body;
    try{
        const saveData = new subjectCourseSchema(data);
        await saveData.save();
        res.status(200).json({ statusCode: 1,message:"Data saved successfully.", status: "success ", data: saveData });
    }catch(error){
        res.status(200).json({ statusCode: 2,message:error.message, status: "unsuccess", data: null });
    }
}

const getSubjectCourse=async(req,res)=>{
    try{
        const result=await subjectCourseSchema.find();
        res.status(200).json({ statusCode: 1,message:"Data retrieved successfully.", status: "success", data: result });
    }catch(error){
        res.status(200).json({ statusCode: 2,message:error.message, status: "unsuccess", data: null });
    }
}


module.exports={setSubjectCourse,getSubjectCourse};