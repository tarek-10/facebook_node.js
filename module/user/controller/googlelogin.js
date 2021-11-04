const {
    StatusCodes
} = require("http-status-codes");
const userModel = require("../../../model/user.model");
const {
    OAuth2Client
} = require('google-auth-library');
const jwt = require('jsonwebtoken');
const {
    nanoid
} = require("nanoid");
const client = new OAuth2Client('327441097585-5sipodj6jgv20h73vc4msfjtj0qvismr.apps.googleusercontent.com');
const googlelogin = async (req, res) => {

    const {
        tokenId,
        googleId
    } = req.body;
    client.verifyIdToken({
        idToken: tokenId,
        audience: '327441097585-5sipodj6jgv20h73vc4msfjtj0qvismr.apps.googleusercontent.com'
    }).then(async (result) => {
        console.log(result);
        const {
            payload
        } = result;
        if (payload.email_verified) {
            const user = await userModel.findOne({
                googleId
            });
            if (user) {
                const token = jwt.sign({
                    _id: user._id,
                    email: user.email,
                    role: user.userModel
                }, 'shhhhh', {
                    expiresIn: "1h"
                });
                res.status(StatusCodes.OK).json({
                    message: "success",
                    token,
                    data: {
                        _id: user._id,
                        email: user.email,
                        role: user.role
                    }
                })

            } else {
                const newUser = await userModel.insertMany({
                    userName: payload.name,
                    email: payload.email,
                    password: nanoid(),
                    role: "user",
                    googleId,
                    userProfile: payload.picture,
                });
                const token = jwt.sign({
                    _id: newUser._id,
                    email: newUser.email,
                    role: newUser.role
                }, 'shhhhh');
                res.status(StatusCodes.OK).json({
                    message: "success",
                    token,
                    data: {
                        _id: newUser._id,
                        email: newUser.email,
                        role: newUser.role,
                    }
                });
            }
        } else {
            res.json({
                message: "Email Must Be Verified...!"
            });
        }
        console.log("-----------------------------------------");
    }).catch((err) => {
        console.log(err);
    })

}
module.exports = googlelogin;