const mongoose = require("mongoose");
const designationSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
    },
    name: {
        type: String,
    },
    node: {
        type: String,
    },
    status: {
        type: String,
        default: 1,
    }
},
    {
        timestamps: true,
    })

designationSchema.pre('save', async function (next) {
    const doc = this;
    if (!doc.isNew) {
        return next();
    }

    try {
        const lastDoc = await mongoose.model('designation').findOne({}, {}, { sort: { 'id': -1 } });
        const lastId = lastDoc ? lastDoc.id : 0;
        doc.id = lastId + 1;
        next();
    } catch (error) {
        return next(error);
    }
});

module.exports = mongoose.model("designation", designationSchema);