const express = require("express");
const router = express.Router();
const { adriagateController } = require("../Controllers/channelsController");

router.get("/adriagate", adriagateController);
router.get("/", (req, res) => {
  res.json({ message: "Hello ..." });
});
router.get("/vaction/:id", (req, res) => {
  res.json({ message: "Hello from vaction routes" });
});
module.exports = router;
