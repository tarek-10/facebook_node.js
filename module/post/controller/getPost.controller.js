const {
    StatusCodes
} = require("http-status-codes");
const commentModel = require("../../../model/comment.model");
const postModel = require("../../../model/post.model");
const redis = require("redis");
const client = redis.createClient(6379);
const getPostsAndComments = async (req, res) => {

    
      try {
        const resultArr = [];
        const cursor = postModel.find({}).populate("createdBy").cursor();
        for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
            const comment = await commentModel.find({
                postID: doc._id
            }).populate("userID");
            const obj = {
                ...doc._doc,
                comment
            };
            resultArr.push(obj);
        }
        client.setex("posts" , "10" , JSON.stringify(resultArr));
        res.status(StatusCodes.OK).json({
            message: "success",
            data: resultArr
        });
      } catch (error) {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:"error",error});
      }
  
}
module.exports = getPostsAndComments;