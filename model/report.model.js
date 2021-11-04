const reportSchema = require("../schema/report.schema");
const mongoose = require("mongoose");

const reportModel = mongoose.model('report',reportSchema);

module.exports = reportModel;