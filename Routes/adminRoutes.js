const express = require("express");
const router = express.Router();
const { adminlogin } = require("../Controllers/adminControllers");
// router.get("/", adminlogin);
router.get("/login", adminlogin);

module.exports = router;
