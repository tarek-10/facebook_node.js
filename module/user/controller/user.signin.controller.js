const {
    StatusCodes
} = require("http-status-codes");
const userModel = require("../../../model/user.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const user_signIN = async (req, res) => {

    const {
        email,
        password
    } = req.body;
    try {
        const user = await userModel.findOne({
            email
        });
        if (!user) {
            res.json({
                message: "You Must Sign Up Firstly...!"
            });
        } else {

            if (user.confirmed == false) {
                res.json({
                    message: "You Must Confirm Your Mail Firstly...!"
                });
            }
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                const token = jwt.sign({
                    _id: user._id,
                    role: user.role
                }, 'shhhhh');
                res.status(StatusCodes.OK).json({
                    token,
                    user: {
                        _id: user._id,
                        userName: user.userName,
                        email: user.email
                    }
                });
            } else {
                res.json({
                    message: "in_valid password...!"
                });
            }

        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = user_signIN