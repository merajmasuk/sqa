const committeeSchema = require("../models/committee.model");

const setCommittee = async (req, res) => {
    const {committeeName,committeeYear,committeeDetail,committeeDesignation} = req.body;
    try {
        if(!committeeName||!committeeYear||!committeeDetail||!committeeDesignation){
            return  res.status(400).json({ statusCode: 2, message: "bad request", status: "unsuccess", data: null });
        }
        const saveData = new committeeSchema(req.body);
        await saveData.save();
        res.status(200).json({ statusCode: 1, message: "Data saved successfully.", status: "success", data: saveData });
    } catch (error) {
        // console.log(error.message)
        res.status(500).json({ statusCode: 2, message: error.message, status: "unsuccess", data: null });
    }
}

const getCommittee = async(req, res) => {
    try {
        const result = await committeeSchema.find();
        res.status(200).json({ statusCode: 1, message: "Data retrieved successfully.", status: "success", data: result });
    } catch (error) {
        res.status(200).json({ statusCode: 2, message: error.message, status: "unsuccess", data: null });
    }
}

module.exports = { setCommittee, getCommittee }