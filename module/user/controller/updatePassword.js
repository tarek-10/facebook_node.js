const {
    StatusCodes
} = require("http-status-codes");
const userModel = require("../../../model/user.model");
const bcrypt = require('bcrypt');

const user_update_password = async (req, res) => {

    let {
        newPassword,
        password
    } = req.body;
    let {
        id
    } = req.params;

    try {

        const user = await userModel.findOne({
            _id: id
        });
        if (user) {

            const match = await bcrypt.compare(password, user.password);

            if (match) {
                bcrypt.hash(newPassword, 8, async function (err, hash) {
                    if (err) throw err;
                    const updatedUserPassword = await userModel.findOneAndUpdate({
                        _id: id
                    }, {
                        password: hash
                    }, {
                        new: true
                    });
                    res.status(StatusCodes.OK).json({
                        message: "Password Updated Successfully...!",
                        updatedUserPassword
                    })

                });
            } else {
                res.json({
                    message: "Old Password Isn't correct ...!"
                });
            }

        } else {
            res.json({
                message: "You Must Register First...!"
            });
        }

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = user_update_password;