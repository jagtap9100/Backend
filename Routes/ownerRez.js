const express = require("express");
const router = express.Router();
const {
  adriagateController,
  hospitableController,
  guestyController,
  ownerrezController,
  hostawayController,
  lodgifyController,
} = require("../Controllers/channelsController");

router.get("/adriagate", adriagateController);
router.get("/guesty", guestyController);
router.get("/hospitable", hospitableController);
router.get("/hostaway", hostawayController);
router.get("/lodgify", lodgifyController);
router.get("/ownerrez", ownerrezController);
module.exports = router;
