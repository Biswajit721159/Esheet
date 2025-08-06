const { createOrganization,getOrgs } = require("../controllers/organizations");
const { verifyToken } = require("../verifications/tokenVerifications");

const router = require("express").Router();

router.post("/createOrg", createOrganization);
router.get("/getOrgs", getOrgs);

module.exports = router;