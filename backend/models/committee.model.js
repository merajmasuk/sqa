const mongoose = require("mongoose");
const committeeSchema = new mongoose.Schema({
    id: {
        type: String,
        // unique: true,
    },
    comm_group_slug: {
        type: String,
    },
    serial_no: {
        type: String,
    },
    PIMS_ID: {
        type: String,
    },
    BPSA_Designation_id: {
        type: String,
    },
    Name: {
        type: String,
    },
    medal: {
        type: String,
    },
    photo: {
        type: String,
    },
    Officail_Designation:{
        type: String,
    },
    Mobile_Number: {
        type: String,
    },
    Association_Year: {
        type: String,
    },
    AddedBy: {
        type: String,
        default:"admin"
    },
    status: {
        type: Boolean,
        default:true,
    },
    user: {
        type: String,
        default:"admin"
    },
}, {
    timestamps: true,
})

committeeSchema.pre('save', async function (next) {
    const doc = this;
    if (!doc.isNew) {
        return next();
    }

    try {
        const lastDoc = await mongoose.model('committee').findOne({}, {}, { sort: { 'id': -1 } });
        const lastId = lastDoc ? lastDoc.id : 0;
        doc.id = lastId + 1;
        next();
    } catch (error) {
        return next(error);
    }
});


module.exports = mongoose.model("committee", committeeSchema);
