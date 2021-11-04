const userModels = require("../../../model/user.model");
const jwt = require('jsonwebtoken');


const verifyEmail = async (req, res) => {

    let {
        token
    } = req.params;

    try {
        if (token) {
            jwt.verify(token, 'shhhhh', async function (err, decoded) {
                if (err) throw err;
                const user = await userModels.findOne({
                    email: decoded.email
                });
                if (user) {
                    if (user.confirmed == true) {
                        res.json({
                            message: "user already confirmed"
                        });
                    } else {
                        const confirmUser = await userModels.findOneAndUpdate({
                            email: user.email
                        }, {
                            confirmed: true
                        }, {
                            new: true
                        });
                        res.json({
                            message: "email confirmed successfully...!",
                            confirmUser
                        });
                    }
                } else {
                    res.json({
                        message: "invalid user"
                    })
                }
            });
        } else {
            res.json({
                message: "invalid_token"
            })
        }
    } catch (error) {
        res.json({
            error: "error",
            error
        });
    }
}
module.exports = verifyEmail;