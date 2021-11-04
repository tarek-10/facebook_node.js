const {
    StatusCodes
} = require("http-status-codes");
const advertiseModel = require("../../../model/advertise.model");
const userModel = require("../../../model/user.model");

const getAllAdvertise = async (req, res) => {

    try {
        const resultArr = [];
        const cursor = userModel.find({}).populate('userName').cursor();
        for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {

            const advertise = await advertiseModel.find({
                userID: doc._id
            }).populate('userID');
            const obj = {
                ...doc._doc,
                advertise
            };
            resultArr.push(obj);
        }
        res.status(StatusCodes.OK).json({
            message: "success",
            resultArr
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = getAllAdvertise;