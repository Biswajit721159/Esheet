const { createOrganization,getOrgs } = require("../controllers/organizations");
const { verifyToken } = require("../verifications/tokenVerifications");

const router = require("express").Router();

router.post("/createOrg",verifyToken, createOrganization);
router.get("/getOrgs",verifyToken, getOrgs);

module.exports = router;