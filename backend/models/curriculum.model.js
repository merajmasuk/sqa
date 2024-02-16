const mongoose=require("mongoose");
const curriculumSchema=new mongoose.Schema({ //change curriculumSchema, 
    id:{
        type:String,
    },
    meterial:{
        type:String,
        required:true,
    },
    organization:{
        type:String,
        required:true,
    },
    alignment:{
        type:String,
        required:true,
    },
    suplimentary_Resourse:{
        type:String,
        required:true,
    },
},
{
    timestamps:true,
})


module.exports=mongoose.model("curriculum",curriculumSchema); //change table name: curriculum, 




