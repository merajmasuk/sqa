const committeeGroupSchema=require("../models/committeeGroup.model");

const setCommitteeGroup=async(req,res)=>{
    const data=req.body;
    try{
        const saveData = new committeeGroupSchema(data);
        await saveData.save();
        res.status(200).json({ statusCode: 1,message:"Data saved successfully.", status: "success", data: saveData });
    }catch(error){
        res.status(200).json({ statusCode: 2,message:error.message, status: "unsuccess", data: null });
    }
}

const getCommitteeGroup=async(req,res)=>{
    try{
        const result=await committeeGroupSchema.find();
        res.status(200).json({ statusCode: 1,message:"Data retrieved successfully.", status: "success", data: result });
    }catch(error){
        res.status(200).json({ statusCode: 2,message:error.message, status: "unsuccess", data: null });
    }
}

module.exports={setCommitteeGroup,getCommitteeGroup};