const mongoose=require("mongoose");
/**
 * MongoDB Collections model schema
 */
const forumSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
},
{
    timestamps:true,
})

module.exports=mongoose.model('forum',forumSchema);