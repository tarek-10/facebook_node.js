const {
    StatusCodes
} = require("http-status-codes");
const advertiseModel = require("../../../model/advertise.model");

const updatingAdvertise = async (req, res) => {
    let {
        id
    } = req.params;
    let {
        title,
        desc,
    } = req.body;

    try {

        const advertise = await advertiseModel.findOne({
            _id: id,
        });
        if (advertise) {
            const updatedAdvertise = await advertiseModel.findOneAndUpdate({
                _id: id
            }, {
                title,
                desc,
            });
            res.status(StatusCodes.OK).json({
                message: "success",
                updatedAdvertise
            });
        } else {
            res.json({
                message: "in-valid advertisement"
            });
        }

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = updatingAdvertise;