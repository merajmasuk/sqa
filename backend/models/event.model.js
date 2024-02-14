const mongoose=require("mongoose");

const eventSchema=new mongoose.Schema({
    eventName:{
        type:String,
        // require:true,
    },
    eventCode:{
        type:String,
        require:true,
        unique:true,
    },
    eventVenue:{
        type:String,
        // require:true,
    },
    eventDetails:{
        type:String,
        // require:true,
    },
    startDate:{
        type:Date,
        // require:true,
    },
    endDate:{
        type:Date,
        // require:true,
    },
    startTime:{
        type:String,
        // require:true,
    },
    endTime:{
        type:String,
        // require:true,
    },
    eventCoverImage:{
        type:String,
    },
    eventLogo:{
        type:String,
        // require:true,  
    },
    eventCover:{
        type:String,
        // require:true,  
    },
    eventSlogan:{
        type:String,
        // require:true, 
    }    
},{
    timestamps:true,
})

// eventSchema.pre("save", function (next) {
//     if (!this.eventCode) {
//       this.eventCode = uuid.v4();
//       this.eventCode=generatedEventId();
//     }
//     next();
//   });

module.exports=mongoose.model("events",eventSchema);


