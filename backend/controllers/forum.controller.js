const forumSchema=require("../models/Forum.model");

const setForum=async(req,res)=>{
    const data=req.body;
    try{
        const saveData = new forumSchema(data);
        await saveData.save();
        res.status(200).json({ statusCode: 1,message:"Data saved successfully.", status: "success ", data: saveData });
    }catch(error){
        res.status(200).json({ statusCode: 2,message:error.message, status: "unsuccess", data: null });
    }
}

const getForum=async(req,res)=>{
    try{
        const result=await forumSchema.find();
        res.status(200).json({ statusCode: 1,message:"Data retrieved successfully.", status: "success", data: result })
    }catch(error){
        res.status(200).json({ statusCode: 2,message:error.message, status: "unsuccess", data: null });
    }
}

const updateForum=async(req,res)=>{
    const data=req.body;
    try{
        const result=await forumSchema.findOneAndUpdate(
            {_id:data.id},
            data,
            {upsert:true}
            );
        res.status(200).json({ statusCode: 1,message:"Data updated successfully.", status: "success", data: result })
    }catch(error){
        res.status(200).json({ statusCode: 2,message:error.message, status: "unsuccess", data: null });
    }
}
const deleteForum=async(req,res)=>{
    const id=req.params.id;
    try{
        const result=await forumSchema.findOneAndDelete({_id:id});
        res.status(200).json({ statusCode: 1,message:"Data deleted successfully.", status: "success", data: result })
    }catch(error){
        res.status(200).json({ statusCode: 2,message:error.message, status: "unsuccess", data: null });
    }
}

module.exports={setForum,getForum,updateForum,deleteForum}
