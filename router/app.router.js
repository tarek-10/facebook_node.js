const userRouter = require("../module/user/router/user.router");
const postRouter = require("../module/post/router/post.router");
const commentRouter = require("../module/comments/router/comment.router");
const reportRouter = require("../module/reports/router/report.router");
const advertiseRouter =  require("../module/advertisment/router/advertise.router");
module.exports = {
    userRouter,
    postRouter,
    commentRouter,
    reportRouter,
    advertiseRouter,
}