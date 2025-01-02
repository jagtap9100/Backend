const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ meg: "Hello from login routes" });
});

module.exports = router;
