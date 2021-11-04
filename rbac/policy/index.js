const roles = require("../../enum/role");
const adminPolicy = require("./adminPolicy");
const superAdminPolicy = require("./superAdminPolicy");
const userPolicy = require("./userPolicy");

const opts = {
    [roles.SUPER_ADMIN]:{
        can:superAdminPolicy
    },
    [roles.ADMIN]:{
        can:adminPolicy
    },
    [roles.USER]:{
        can:userPolicy
    }
};

module.exports=opts;