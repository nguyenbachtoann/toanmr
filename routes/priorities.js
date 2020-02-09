const express = require("express");
const joi = require("joi");
const router = express.Router();
const Priority = require("../models/Priorities");

router.use(express.json());

// get all priorities
router.get("/", async (req, res) => {
  try {
    const priorities = await Priority.find();
    res.json(priorities);
  } catch (err) {
    res.json({
      message: err
    });
  }
});

// post a priority
router.post("/", async (req, res) => {
  try {
    const priority = new Priority({
      name: req.body.name,
      color: req.body.color
    });

    const { error } = validatePriority(req.body);
    if (error) {
      res.status(400).send(error.details);
      return;
    }
    try {
      const savedPriority = await priority.save();
      res.json(savedPriority);
    } catch (err) {
      res.json({
        message: err.message
      });
    }
  } catch (err) {
    res.json({
      message: err.message
    });
  }
});

// validate function
function validatePriority(priority) {
  const schema = joi
    .object()
    .keys({
      name: joi.string().required(),
      color: joi.string().required()
    })
    .unknown(true);
  return joi.validate(priority, schema);
}
module.exports = router;
