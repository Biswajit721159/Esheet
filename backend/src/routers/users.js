const { createUsers,loginUsers ,registerUsers} = require("../controllers/users");

const router = require("express").Router();

router.post("/createUsers", createUsers);
router.post("/loginUsers", loginUsers);
router.post("/registerUsers", registerUsers);

module.exports = router;