const mongoose = require('mongoose');

const AssessMentSchema = new mongoose.Schema({
  Needs_Assessment_ID: {
    type: String,
    required: true,
    unique: true,
  },
  Target_Audience: {
    type: String,
    required: true,
  },
  Learning_Objectives: {
    type: String,
    required: true,
  },
  Course_Content: {
    type: String,
    required: true,
  },
  Timeline: {
    type: String,
    required: true,
  },
},{
  timestamps:true,
});

module.exports =mongoose.model('assessment', AssessMentSchema);


