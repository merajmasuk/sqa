const paymentSchema = require("../models/payment.model")

/**
 * Create payment record in the database
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 */
const setPayment = async(req, res) => {
    /**
     * Handle the request to set payment data
     * @function
     * @async
     * @param {Object} req.body - request body containing payment data
     * @param {string} req.body.gateway - name of the pg
     * @param {string} req.body.amount - the amount paid
     * @param {string} req.body.currency - the currency in which the payment was done
     * @param {Object} res - Expess response object
     * @returns {void}
     * @throws {Error} If there is an issue with saving the payment data
     */
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


/**
 * Retrieve a payment data from the database
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getPayment = async(req, res) => {
    /**
     * Handle the request to set payment data
     * @function
     * @async
     * @param {Object} req.body - request body containing payment data
     * @param {string} req.body.gateway - name of the pg
     * @param {string} req.body.amount - the amount paid
     * @param {string} req.body.currency - the currency in which the payment was done
     * @param {Object} res - Expess response object
     * @returns {void}
     * @throws {Error} If there is an issue with retrieving the payment data
     */

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


/**
 * Update an existing payment data on the database
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const updatePayment = async(req, res) => {
    /**
     * Handle the request to set payment data
     * @function
     * @async
     * @param {Object} req.body - request body containing payment data
     * @param {string} req.body.gateway - name of the pg
     * @param {string} req.body.amount - the amount paid
     * @param {string} req.body.currency - the currency in which the payment was done
     * @param {Object} res - Expess response object
     * @returns {void}
     * @throws {Error} If there is an issue with updating the payment data
     */
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

module.exports={setPayment, getPayment, updatePayment}
