const {
    StatusCodes
} = require("http-status-codes");
const userModel = require("../../../model/user.model");

const updateUserProfile = async (req, res) => {

    const {
        userName,
        age,
        phone,
        userProfile
    } = req.body;

    const {
        id
    } = req.params;
    try {

        const imageUrl = process.env.IMAGEURL + req.file.filename;

        const user = await userModel.findOne({
            _id: id
        });
        if (user) {
            const updateUser = await userModel.findOneAndUpdate({
                _id: id
            }, {
                userName,
                age,
                phone,
                userProfile: imageUrl
            });
            res.status(StatusCodes.OK).json({message:"user updated successfully...!"});
        } else {
            res.json({
                message: "User Not Found"
            });
        }

    } catch (error) {

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}

module.exports = updateUserProfile;