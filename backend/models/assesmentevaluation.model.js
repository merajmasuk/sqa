const mongoose=require("mongoose");
const testSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    methods:{
        type:String,
        required:true,
    },
    participantfeedback:{
        type:String,
        required:true,
    },
    analysisresult:{
        type:String,
        required:true,
    },
   
},
{
    timestamps:true,
})

module.exports=mongoose.model("assesmentEvaluation",testSchema);
