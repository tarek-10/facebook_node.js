const {
    StatusCodes
} = require("http-status-codes");
const advertiseModel = require("../../../model/advertise.model");

const deletingAdvertise = async (req, res) => {

    let {
        id
    } = req.params;
    try {

        const advertise = await advertiseModel.findOne({
            _id: id
        });

        if (advertise) {
            const deletedAdvertise = await advertiseModel.deleteOne({
                _id: id
            });
            res.status(StatusCodes.OK).json({
                message: "success",
                deletedAdvertise
            });
        } else {
            res.json({
                message: "IN-VALID ADVERTISMENT"
            });
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = deletingAdvertise;