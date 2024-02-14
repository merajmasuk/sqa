const mongoose=require('mongoose')
const eventCommitteeSchema=new mongoose.Schema({
    committeeId:{
        type:String,
        // required:true,
        unique: true,
    },
    eventCode:{
        type:String,
        default:1024,
        // required:true,
        // ref: 'events',
    },
    memberName:{
        type:String,
        required:true,
    },
    eventName:{
        type:String,
    },
    committeePost:{
        type:String,
    },
    details:{
        type:String,
    }
},
{
    timestamps: true,
})

eventCommitteeSchema.pre('save', async function (next) {
    if (!this.committeeId) {
        const maxCommitteeId = await this.constructor.findOne().sort({ committeeId: -1 }).select('committeeId');        
        const nextCommitteeId = maxCommitteeId ? parseInt(maxCommitteeId.committeeId) + 1 : 1;
        this.committeeId = nextCommitteeId.toString();
    }
    next();
});

module.exports=mongoose.model("eventCommittees",eventCommitteeSchema);