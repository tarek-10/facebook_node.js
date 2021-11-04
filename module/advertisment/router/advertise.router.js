const express = require("express");

const router = express.Router();
const validationResult = require("../../../middleware/handleValidation");
const {
    createAvertise,
    updateAdvertise,
    deleteAdvertise
} = require("../joi/advertise.validation");
const isAuthorized = require("../../../middleware/isAuthorized");
const {
    CREATE_ADVERTISE,
    GET_ALL_ADVERTISE,
    UPDATE_ADVERTISE,
    DELETE_ADVERTISE
} = require("../endPoints");

//create advertise
const createAdvertise = require("../controller/create.advertise.controller");
router.post("/advertise/create", validationResult(createAvertise), isAuthorized(CREATE_ADVERTISE), createAdvertise)
//end

//get all advertise by admin and super_admin
const getAllAdvertise = require("../controller/getAllAdvertise.controller");
router.get("/advertise/display", isAuthorized(GET_ALL_ADVERTISE), getAllAdvertise)
//end

//update advertise by super_admin and admin
const updatingAdvertise = require("../controller/updateAdvertisment");
router.put("/advertise/update/:id", validationResult(updateAdvertise), isAuthorized(UPDATE_ADVERTISE), updatingAdvertise)
//end

//delete advertise by super_admin and admin
const deletingAdvertise = require("../controller/deleteAdvertise");
router.delete("/advertise/delete/:id",validationResult(deleteAdvertise),isAuthorized(DELETE_ADVERTISE),deletingAdvertise)
//end
module.exports = router;