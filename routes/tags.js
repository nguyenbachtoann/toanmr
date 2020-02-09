const express = require("express");
const joi = require("joi");
const Tags = require("../models/Tags");

const router = express.Router();
router.use(express.json());

// get all tags
router.get("/", async (req, res) => {
  try {
    const tags = await Tags.find();
    res.json(tags);
  } catch (err) {
    res.json({
      message: err.message
    });
  }
});

module.exports = router;