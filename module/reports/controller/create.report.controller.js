const {
    StatusCodes
} = require("http-status-codes");
const reportModel = require("../../../model/report.model");

const createReports = async (req, res) => {

    let {
        content,
        userID,
        postID
    } = req.body;
    try {
        const existReport = await reportModel.findOne({
            postID
        });
        if (existReport) {
            res.json({
                message: "You Can Report post One Time Only"
            });
        } else {
            const report = await reportModel.insertMany({
                content,
                userID,
                postID
            });
            res.status(StatusCodes.OK).json({
                message: "success report created...!",
                report
            });
        }
    } catch (error) {

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = createReports;