const express = require("express");

const router = express.Router();
const validationResult = require("../../../middleware/handleValidation");
const isAuthorized = require("../../../middleware/isAuthorized");
const { CREATE_REPORT } = require("../endPoints");
const { createReport } = require("../joi/report.validation");

//create report
const createReports = require("../controller/create.report.controller");
router.post("/report/create",validationResult(createReport),isAuthorized(CREATE_REPORT),createReports);
//end
module.exports = router;