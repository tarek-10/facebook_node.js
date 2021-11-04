const mongoose = require("mongoose");
const advertiseSchema = require("../schema/advertisment.schema");

const advertiseModel = mongoose.model('advertise',advertiseSchema);

module.exports = advertiseModel;