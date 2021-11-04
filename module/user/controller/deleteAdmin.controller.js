const {
    StatusCodes
} = require("http-status-codes");
const userModel = require("../../../model/user.model");

const deleteAdminBySuperAdmin = async (req, res) => {

    let {
        id
    } = req.params;

    try {
        const user = await userModel.findOne({
            _id: id
        });
        if (user) {
            const deletedUser = await userModel.deleteOne({
                _id: id
            });
            res.status(StatusCodes.OK).json({
                message: "success delete",
                deletedUser
            });
        } else {
            res.json({
                message: "user not found"
            });
        }

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }

}
module.exports = deleteAdminBySuperAdmin;