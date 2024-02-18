const paymentSchema = require("../models/payment.model")


const setPayment = async(req, res) => {
    const data = req.body;

    try {
        const saveData = new paymentSchema(data);
        await saveData.save();
        res.status(200).json({
            statusCode: 1,
            message: "Data saved successfully",
            status: "susccess",
            data: saveData
        });
    } catch (error) {
        res.status(500).json({
            statusCode: 2,
            message: error.message,
            status: "unsuccess",
            data: null
        });
    }
}


const getPayment = async(req, res) => {
    try {
        const result = await froumSchema.find();
        res.status(200).json({
            statusCode: 1,
            message: "Data retrieved successfully",
            status: "success",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            statusCode: 2,
            message: error.message,
            status: "unsuccess",
            data: null
        });
    }
}


const updatePayment = async(req, res) => {
    const data = req.body;

    try {
        const result = await paymentSchema.findOneAndUpdate(
            {_id:data.id},
            data,
            {upsert:true}
        );
        res.status(200).json({
            statusCode: 1,
            message: "Data updated successfully",
            status: "success",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            statusCode: 2,
            message: error.message,
            status: "unsuccess",
            data: null
        });
    }
}


const deletePayment = async(req, res) => {
    const id = req.params.id;
    
    try {
        const result = await paymentSchema.findOneAndDelete({_id:id});
        res.status(200).json({
            statusCode: 1,
            message: "Data deleted successfully",
            status: "success",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            statusCode: 2,
            message: error.message,
            status: "unsuccess",
            data: null
        });
    }
}


module.exports={setPayment, getPayment, updatePayment, deletePayment}
