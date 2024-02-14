const userSchema = require("../models/user.model");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const setUser = async (req, res) => {
    const data = req.body;
    try {
        const findUser = await userSchema.findOne({ email: data.email, mobile: data.mobile });
        if (findUser) {
            return res.status(200).json({ statusCode: 2, message: "Email or mobile is already in use.", status: "unsuccess", data: null });
        }
        bcrypt.hash(data.password, saltRounds, async function (err, hash) {
            if (err) {
                return res.status(200).json({ statusCode: 2, message: err.message, status: "unsuccess", data: null });
            }
            data.password = hash;
            const saveData = new userSchema(data);
            await saveData.save();
            res.status(200).json({ statusCode: 1, message: "Data saved successfully.", status: "success ", data: saveData });
        });
    } catch (error) {

        if (error.code === 11000 && error.keyPattern && error.keyValue) {
            return res.status(200).json({ statusCode: 2, message: "Email or mobile is already in use.", status: "unsuccess", data: null });
        }
        res.status(200).json({ statusCode: 2, message: error.message, status: "unsuccess", data: null });
    }
}


const getUser = async (req, res) => {
    const data = req.body;
    try {
        const result1 = await userSchema.findOne({ email: data.email });
        if (!result1) {
            return res.status(200).json({ statusCode: 2, message: "Invalid user", status: "unsuccess", data: null });
        }

        bcrypt.compare(data.password, result1.password, async function (err, result) {
            if (result) {
                // const response= await userSchema.findOne({email:data.email}).select({pass});
                return res.status(200).json({ statusCode: 1, message: "Data retrieved successfully.", status: "success", data: result1 });
            }
            return res.status(200).json({ statusCode: 2, message: "password is wrong", status: "unsuccess", data: null });
        });
    } catch (error) {
        res.status(200).json({ statusCode: 2, message: error.message, status: "unsuccess", data: null });
    }
}

const forgetPassword = async (req, res) => {
    const data = req.body;
    try {
        bcrypt.hash(data.password, saltRounds, async function (err, hash) {
            if (err) {
                return res.status(200).json({ statusCode: 2, message: err.message, status: "unsuccess", data: null });
            }
            data.password = hash;
            const result = await userSchema.findOneAndUpdate(
                { email: data.email },
                {
                    $set: {
                        password: data.password
                    }
                },
                { upsert: true }
            );

            if (!result) {
                return res.status(200).json({ statusCode: 2, message: "Invalid user", status: "unsuccess", data: null });
            }

            res.status(200).json({ statusCode: 1, message: "Data saved successfully.", status: "success ", data: result });
        });

    } catch (err) {
        res.status(200).json({ statusCode: 2, message: error.message, status: "unsuccess", data: null });
    }
}


module.exports = { setUser, getUser, forgetPassword };