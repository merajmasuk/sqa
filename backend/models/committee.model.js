const mongoose = require("mongoose");

const committeeSchema = new mongoose.Schema({
    id: {
        type: String,
         unique: true, // Depending on your requirements
    },
    committeeName: {
        type: String,
    },
    committeeYear: {
        type: String,
    },
    committeeDetail: {
        type: String,
    },
    committeeDesignation: {
        type: [
            {
                name: {
                    type: String,
                },
                designation: {
                    type: String // Typo fixed here
                }
            }
        ]
    },
    AddedBy: {
        type: String,
        default: "admin"
    },
    status: {
        type: Boolean,
        default: true,
    },
    user: {
        type: String,
        default: "admin"
    },
}, {
    timestamps: true,
});

committeeSchema.pre('save', async function (next) {
    const doc = this;
    if (!doc.isNew) {
        return next();
    }

    try {
        const lastDoc = await mongoose.model('committee').findOne({}, {}, { sort: { 'id': -1 } });
        const lastId = lastDoc ? parseInt(lastDoc.id) : 0; // Parse the ID as integer
        doc.id = (lastId + 1).toString(); // Ensure ID is a string
        next();
    } catch (error) {
        return next(error);
    }
});

module.exports = mongoose.model("committee", committeeSchema);
