const router = require("express").Router();
const ctrls = require("../controllers/user");

router.post("/register", ctrls.register);
router.get("/", ctrls.getAllUsers);

module.exports = router;
