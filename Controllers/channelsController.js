const express = require("express");
const adriagateController = (req, res) => {
  res.send({ message: "Hello adriagateController !" });
};

const guestyController = (req, res) => {
  res.send({ message: "Hello guestyController !" });
};

const hospitableController = (req, res) => {
  res.send({ message: "Hello hospitableController !" });
};

const hostawayController = (req, res) => {
  res.send({ message: "Hello hostawayController !" });
};

const lodgifyController = (req, res) => {
  res.send({ message: "Hello lodgifyController !" });
};

const ownerrezController = (req, res) => {
  res.send({ message: "Hello ownerrezController !" });
};
module.exports = {
  adriagateController,
  hospitableController,
  guestyController,
  ownerrezController,
  hostawayController,
  lodgifyController,
};
