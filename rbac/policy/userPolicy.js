const {
    CREATE_COMMMENT
} = require("../../module/comments/endPoints");
const {
    CREATE_POST,
    EDIT_POST,
    DELETE_POST,
    POST_REPORT
} = require("../../module/post/endPoints");
const {
    CREATE_REPORT
} = require("../../module/reports/endPoints");
const {
    SET_POST,
    UPDATE_USER,
    UPDATE_PASSWORD,
    DEACTIVE_USER
} = require("../../module/user/endPoints");

module.exports = [SET_POST, CREATE_POST, CREATE_COMMMENT, UPDATE_USER, UPDATE_PASSWORD, EDIT_POST, DELETE_POST, DEACTIVE_USER, CREATE_REPORT , POST_REPORT]