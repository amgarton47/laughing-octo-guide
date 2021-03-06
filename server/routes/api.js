const express = require("express");
const { Landmark } = require("../models");

const api = express.Router();

api.get("/", async (req, res, next) => {
  try {
    const landmarks = await Landmark.findAll();
    res.json(landmarks);
  } catch (err) {
    console.log("There was an issue fetching the Landmarks");
    console.log(err);
  }
});

api.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);
    await Landmark.create(data);
  } catch (err) {
    console.log("There was an issue creating a Landmark");
    console.log(err);
  }
});

module.exports = api;
