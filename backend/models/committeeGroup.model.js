const mongoose = require("mongoose");

const committeeGroupSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        // required: true,
    },
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    }
},
{
    timestamps: true,
});

// Pre-save middleware to auto-increment the 'id' field
committeeGroupSchema.pre('save', async function(next) {
    const doc = this;
    if (!doc.isNew) {
        return next();
    }

    try {
        const lastDoc = await mongoose.model('committeeGroup').findOne({}, {}, { sort: { 'id': -1 } });
        const lastId = lastDoc ? lastDoc.id : 0;
        doc.id = lastId + 1;
        next();
    } catch (error) {
        return next(error);
    }
});

module.exports = mongoose.model("committeeGroup", committeeGroupSchema);
