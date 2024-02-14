const mongoose = require("mongoose");
const eventSponsorSchema = new mongoose.Schema({
    sponsorName: {
        type: String,
    },
    Logo: {
        type: String,
    },
    detail: {
        type: String,
    },
    contractPersonName: {
        type: String,
    },
    designation: {
        type: String,
    },
    contractNumber: {
        type: String,
    },
    coverPhoto: {
        type: String,
    },
    email: {
        type: String,
    },
    website: {
        type: String,
    },
    serialNumber: {
        type: String,
        unique: true,
    },
    enable: {
        type: Boolean,
        default: true,
    }
},
    {
        timestamps: true,
    });

eventSponsorSchema.pre('save', async function (next) {
    if (!this.serialNumber) {
        const maxSerialNumber = await this.constructor.findOne().sort({ serialNumber: -1 }).select('serialNumber');
        const nextSerialNumber = maxSerialNumber ? parseInt(maxSerialNumber.serialNumber) + 1 : 1;
        this.serialNumber = nextSerialNumber.toString();
    }
    next();
});

module.exports = mongoose.model("eventSponsor", eventSponsorSchema)