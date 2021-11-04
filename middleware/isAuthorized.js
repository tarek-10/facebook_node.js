const {
  StatusCodes
} = require("http-status-codes");
const jwt = require('jsonwebtoken');
const userModel = require("../model/user.model");
const rbac = require("../rbac/rbac");
module.exports = (endPointName) => {
  return async (req, res, next) => {
    if (req.headers.authorization) {

      const token = req.headers.authorization.split(" ")[1];
      if (token) {
        try {
          const decoded = jwt.verify(token, "shhhhh");
          const isExist = await userModel.findOne({
            _id: decoded._id
          });
          if (isExist) {

            req.user = decoded;
            const isAllowed = await rbac.can(req.user.role, endPointName);
            if (isAllowed) {
              next();
            } else {
              res.status(StatusCodes.UNAUTHORIZED).json({
                message: "Unauthorized"
              });
            }
          } else {
            res.status(StatusCodes.UNAUTHORIZED).json({
              message: "Unauthorized"
            });
          }

        } catch (error) {
          res.json({
            error: "error",
            error
          });
        }
      } else {
        res.status(StatusCodes.UNAUTHORIZED).json({
          message: "Unauthorized"
        });
      }
    } else {

      res.status(StatusCodes.UNAUTHORIZED).json({
        message: "Unauthorized"
      });
    }
  }
};