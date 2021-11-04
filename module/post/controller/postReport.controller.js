const {
    StatusCodes
} = require("http-status-codes");
const postModel = require("../../../model/post.model");
const reportModel = require("../../../model/report.model");

const postReportsDetails = async (req, res) => {

    try {
        const resultArr = [];
        const cursor = postModel.find({}).populate('createdBy').cursor();
        for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {

            const reports = await reportModel.find({
                postID: doc._id
            }).populate('userID');

            const obj = {
                ...doc._doc,
                reports
            }
            resultArr.push(obj)
        }
        res.status(StatusCodes.OK).json({
            message: "success",
            data: resultArr
        })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = postReportsDetails;