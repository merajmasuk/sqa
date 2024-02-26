const userSchema = require("../models/user.model");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
/**
 * Set user data in the database.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const setUser = async (req, res) => {
    /**
     * Handle the request to set user data.
     *
     * @function
     * @async
     * @param {Object} req.body - Request body containing user data.
     * @param {string} req.body.email - User's email.
     * @param {string} req.body.mobile - User's mobile number.
     * @param {string} req.body.password - User's password.
     * @param {Object} res - Express response object.
     * @returns {void}
     * @throws {Error} If there is an issue with saving the user data.
     */
    const data = req.body;
    try {
        // Check if the user with the provided email or mobile already exists
        const findUser = await userSchema.findOne({ email: data.email, mobile: data.mobile });
        if (findUser) {
            return res.status(200).json({ statusCode: 2, message: "Email or mobile is already in use.", status: "unsuccess", data: null });
        }

        // Hash the password before saving it
        bcrypt.hash(data.password, saltRounds, async function (err, hash) {
            if (err) {
                return res.status(200).json({ statusCode: 2, message: err.message, status: "unsuccess", data: null });
            }

            // Update the password with the hashed value
            data.password = hash;

            // Save the user data to the database
            const saveData = new userSchema(data);
            await saveData.save();

            // Return success response with the saved data
            res.status(200).json({ statusCode: 1, message: "Data saved successfully.", status: "success", data: saveData });
        });
    } catch (error) {
        // Handle database or other errors
        if (error.code === 11000 && error.keyPattern && error.keyValue) {
            return res.status(200).json({ statusCode: 2, message: "Email or mobile is already in use.", status: "unsuccess", data: null });
        }
        res.status(200).json({ statusCode: 2, message: error.message, status: "unsuccess", data: null });
    }
}

/**
 * Get user data from the database based on login information.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const getUser = async (req, res) => {
    /**
     * Handle the request to get user data based on login information.
     *
     * @function
     * @async
     * @param {Object} req.body - Request body containing login information.
     * @param {string} req.body.email - User's email.
     * @param {string} req.body.password - User's password.
     * @param {Object} res - Express response object.
     * @returns {void}
     * @throws {Error} If there is an issue with retrieving the user data.
     */
    const data = req.body;
    try {
        // Find the user with the provided email
        const result1 = await userSchema.findOne({ email: data.email });
        if (!result1) {
            // Return 404 if the user is not found
            return res.status(404).json({ statusCode: 2, message: "Invalid user", status: "unsuccess", data: null });
        }

        const userInfo = {
            email: result1.email,
            mobile: result1.mobile,
            name: result1.name,
            role: result1.role,
            _id: result1._id
        }

        // Compare the provided password with the hashed password in the database
        bcrypt.compare(data.password, result1.password, async function (err, result) {
            if (result) {

                const token = jwt.sign(userInfo, process.env.ACCESS_TOKEN, { expiresIn: '1h' });
                // Return success response with the retrieved user data
                return res.status(200).json({ statusCode: 1, message: "Data retrieved successfully.", status: "success", data: userInfo, token:token });
            }

            // Return 400 if the password is incorrect
            return res.status(400).json({ statusCode: 2, message: "Password is wrong", status: "unsuccess", data: null });
        });
    } catch (error) {
        // Handle database or other errors
        res.status(500).json({ statusCode: 2, message: error.message, status: "unsuccess", data: null });
    }
}

/**
 * Update user password using the forget password mechanism.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const forgetPassword = async (req, res) => {
    /**
     * Handle the request to update user password using the forget password mechanism.
     *
     * @function
     * @async
     * @param {Object} req.body - Request body containing user data.
     * @param {string} req.body.email - User's email.
     * @param {string} req.body.password - User's new password.
     * @param {Object} res - Express response object.
     * @returns {void}
     * @throws {Error} If there is an issue with updating the user password.
     */
    const data = req.body;
    try {
        // Hash the new password before updating it
        bcrypt.hash(data.password, saltRounds, async function (err, hash) {
            if (err) {
                return res.status(200).json({ statusCode: 2, message: err.message, status: "unsuccess", data: null });
            }

            // Update the user's password in the database
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

            // Return 404 if the user is not found
            if (!result) {
                return res.status(200).json({ statusCode: 2, message: "Invalid user", status: "unsuccess", data: null });
            }

            // Return success response with the updated user data
            res.status(200).json({ statusCode: 1, message: "Data saved successfully.", status: "success", data: result });
        });

    } catch (error) {
        // Handle database or other errors
        res.status(200).json({ statusCode: 2, message: error.message, status: "unsuccess", data: null });
    }
}

/**
 * Reset user password based on provided information.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const resetPassword = async (req, res) => {
    /**
     * Handle the request to reset user password based on provided information.
     *
     * @function
     * @async
     * @param {Object} req.body - Request body containing reset password information.
     * @param {string} req.body.email - User's email.
     * @param {string} req.body.password - User's current password.
     * @param {string} req.body.newPassword - User's new password.
     * @param {Object} res - Express response object.
     * @returns {void}
     * @throws {Error} If there is an issue with updating the user password.
     */
    const { email, password, newPassword } = req.body;
    console.log(email, password, newPassword)
    try {
        // Check if required fields are provided
        if (!email || !password || !newPassword) {
            return res.status(200).json({ status: "success", statusCode: 2, message: "Please provide valid username, password, and newPassword" });
        }

        // Find the user with the provided email
        const user = await userSchema.findOne({ email: email });

        // Check if the user exists
        if (!user) {
            return res.status(200).json({ status: "success", statusCode: 2, message: "User not found" });
        }

        // Compare passwords and update if the password is correct
        const result = await bcrypt.compare(password, user.password);
        if (!result) {
            return res.status(200).json({ status: "unsuccess", statusCode: 2, message: "Your password is wrong" });
        }

        // Hash the new password
        const hash = await bcrypt.hash(newPassword, saltRounds);

        // Update the user's password using findOneAndUpdate
        const updatedUser = await userSchema.findOneAndUpdate(
            {
                email: email
            },
            { $set: { password: hash } },
            { new: true } // Returns the updated document
        );

        // Return 404 if the user is not found
        if (!updatedUser) {
            return res.status(200).json({ status: "unsuccess", statusCode: 2, message: "User not found" });
        }

        // Return success response
        return res.status(200).json({ status: "success", statusCode: 1, message: 'Password updated successfully' });
    } catch (error) {
        // Handle errors
        console.error("Error updating password:", error);
        return res.status(500).json({ status: "unsuccess", statusCode: 2, message: "Error updating password" });
    }
};

const getAllUsers = async(req,res) =>{
    try{
        const users = await userSchema.find()
        if(!users){
            return res.status(400).json("Not found")
        }
        return res.status(200).json(users)

    }
    catch(error){
        return res.status(500).json(error.message)
    }
}

/**
 * Updates user information in the database.
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} - A promise that resolves once the update operation is completed.
 */

const updateUser =async(req,res)=>{
    // Extract user ID from request parameters
    const id = req.params.id
    // Extract user data from request body
    const data = req.body;

    try {
        // Attempt to update user information in the database
        const result = await userSchema.findOneAndUpdate(
            {_id:id},
            data,
            {upsert:true}
        );
        res.status(200).json(result)
    } catch (error) {
        // If an error occurs, respond with status code 500 and error message
        res.status(500).json({
            statusCode: 2,
            message: error.message,
            status: "unsuccess",
            data: null
        });
    }
}

module.exports = { setUser, getUser, forgetPassword, resetPassword,getAllUsers,updateUser };
