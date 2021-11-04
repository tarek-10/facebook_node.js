const express = require("express");

const router = express.Router();
const isAuthorized = require("../../../middleware/isAuthorized");
const {
    userSignUp,
    userSignIn,
    updateUser,
    updatePassword,
    deActiveUser,
    superAdminsSignUp,
    adminsSignUp
} = require("../joi/user.validation");
const {
    UPDATE_USER,
    UPDATE_PASSWORD,
    DEACTIVE_USER,
    GET_ALL_USER,
    ADD_ADMIN,
    GET_ADMIN_LIST,
    DELETE_ADMIN
} = require("../endPoints");

const validationResult = require("../../../middleware/handleValidation");
const {
    upload
} = require("../../../middleware/multer");


//add super admin
const superAdminSignUp = require("../controller/addSuperAdmin");
router.post("/user/superAdmin", upload.single('image'), validationResult(superAdminsSignUp), superAdminSignUp);
//end

//add admin by super_admin
const adminSignUp = require("../controller/adminSignUp.controller");
router.post("/user/admin", upload.single('image'), validationResult(adminsSignUp), isAuthorized(ADD_ADMIN), adminSignUp)
//end

//add user 
const user_SignUp = require("../controller/user.signup.controller");
router.post("/user/signup", upload.single('image'), validationResult(userSignUp), user_SignUp);
//end

//verify user Email
const verifyEmail = require("../controller/verifyUserEmail");
router.get("/verify/:token", verifyEmail);
//end

//user sign_in
const user_signIN = require("../controller/user.signin.controller");
router.post("/user/sigin", validationResult(userSignIn), user_signIN);
//end

//google login
const googlelogin = require("../controller/googlelogin");
router.post("/googlelogin", googlelogin);
//end

//create pdf
const pdfFunction = require("../controller/createPDF");
router.get("/", pdfFunction);
//end

//update user
const updateUserProfile = require("../controller/userUpdate.controller");
router.put("/user/update/:id", upload.single("image"), validationResult(updateUser), isAuthorized(UPDATE_USER), updateUserProfile);
//end

//update password
const user_update_password = require("../controller/updatePassword");
router.patch("/user/update/password/:id", validationResult(updatePassword), isAuthorized(UPDATE_PASSWORD), user_update_password);
//end

//deactivate user
const deactive_user = require("../controller/user.deactive.controller");
router.patch("/user/deactive/:id", validationResult(deActiveUser), isAuthorized(DEACTIVE_USER), deactive_user);
//end

//get all user by super-admin
const getUSerAll = require("../controller/get.User.controller");
router.get("/user/display", isAuthorized(GET_ALL_USER), getUSerAll)
//end

//get admin list by super admin
const getAdminList = require("../controller/getAdminList.controller");
router.get("/user/display/admin",isAuthorized(GET_ADMIN_LIST),getAdminList);
//end

// delete admin by super_admin
const deleteAdminBySuperAdmin = require("../controller/deleteAdmin.controller");
router.delete("/user/delete/admin/:id",isAuthorized(DELETE_ADMIN), deleteAdminBySuperAdmin);
//end

module.exports = router;