const mongoose = require("mongoose");

const subjectCourseScheam = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    mobile:{
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    courses: [
        {
            courseCode: {
                type: Number,
                required: true,
            },
            courseName: {
                type: String,
                required: true,
            },
            totalMark: {
                type: Number,
                required: true,
            },
        }
    ]
},{
    timestamps:true,
});

module.exports = mongoose.model("subjectCourse", subjectCourseScheam);
