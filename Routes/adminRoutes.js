const express = require("express");
const router = express.Router();
const { adminlogin } = require("../controllers/adminControllers");
// router.get("/", adminlogin);
router.get("/login", adminlogin);

module.exports = router;
