const designationSchema=require("../models/designation.model");

const setDesignation=async(req,res)=>{
    const data=req.body;
    try{
        const saveData = new designationSchema(data);
        await saveData.save();
        res.status(200).json({ statusCode: 1,message:"Data saved successfully.", status: "success", data: saveData });
    }catch(error){
        res.status(200).json({ statusCode: 2,message:error.message, status: "unsuccess", data: null });
    }
}

const getDesignation=async(req,res)=>{
    try{
        const result=await designationSchema.find();
        res.status(200).json({ statusCode: 1,message:"Data retrieved successfully.", status: "success", data: result });
    }catch(error){
        res.status(200).json({ statusCode: 2,message:error.message, status: "unsuccess", data: null });
    }
}

module.exports={setDesignation,getDesignation};