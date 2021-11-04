const {
    StatusCodes
} = require("http-status-codes");
const userModel = require("../../../model/user.model");


const getUSerAll = async (req, res) => {

    try {

        const user = await userModel.find({
            role: 'user'
        });
        res.status(StatusCodes.OK).json({
            message: "success users",
            user
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = getUSerAll;