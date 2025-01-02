const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ me: "Hello from login routes" });
});

module.exports = router;
