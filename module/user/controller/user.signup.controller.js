
const userModel = require('../../../model/user.model');
const bcrypt = require('bcrypt');
const Cryptr = require('cryptr');
const jwt = require('jsonwebtoken');

const {
    StatusCodes
} = require("http-status-codes");
const sendEmails = require('../../../middleware/sendEmail');
const user_SignUp = async (req, res) => {
    let {
        userName,
        email,
        password,
        age,
        phone,
        userProfile,
    } = req.body;

    try {

        let imageUrl = process.env.IMAGEURL + req.file.filename;
        const user = await userModel.findOne({
            email
        });
        if (user) {
            res.json({
                message: "this email is already registered...!"
            });
        } else {
            const cryptr = new Cryptr('shhhhh');
            const encPhone = cryptr.encrypt(phone);
            const token = jwt.sign({
                email
            }, 'shhhhh',{expiresIn:'10m'});

            const masseage = `<a href='http://localhost:8000/verify/${token}'>verify Your Mail</a>`;
            bcrypt.hash(password, 8, async function (err, hash) {

                if (err) throw err;
                const newUser = await userModel.insertMany({
                    userName,
                    email,
                    password: hash,
                    age,
                    phone: encPhone,
                    userProfile: imageUrl,
                    
                });
               await sendEmails(email, masseage);
                res.status(StatusCodes.CREATED).json({
                    message: "user created successfully...!",
                    newUser
                });
            });
        }

    } catch (error) {
        res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                error: "error",
                error
            });
    }
};
module.exports = user_SignUp;