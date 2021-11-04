const {
    StatusCodes
} = require("http-status-codes");
const advertiseModel = require("../../../model/advertise.model");

const createAdvertise = async (req, res) => {

    let {
        title,
        desc,
        userID
    } = req.body;
    try {

        const advertise = await advertiseModel.insertMany({
            title,
            desc,
            userID
        });
        res.status(StatusCodes.CREATED).json({
            message: "success",
            advertise
        });
    } catch (error) {

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }

}

module.exports = createAdvertise;