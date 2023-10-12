// const auth = require("../middleware/auth");
// const _ = require("lodash");
const testModel = require('../models/test');
const express = require("express");
const router = express.Router();

router.get("", async (req, res) => {
  const tests = await testModel.findAll();
  tests.forEach(x => {
    x.created_at = new Date(x.created_at).toLocaleString();
    x.updated_at = new Date(x.updated_at).toLocaleString();
  })
  res.send(tests);
});

router.get("/:id", async (req, res) => {
  const test = await testModel.findTest(req.params.id);
  if (!test)
    return res
      .status(404)
      .send("The test with the given ID was not found.");

  test.created_at = new Date(test.created_at).toLocaleString();
  test.updated_at = new Date(test.updated_at).toLocaleString();
  res.send(test);
});

router.put("/:id", async (req, res) => {
  const { error } = testModel.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const updatedTest = await testModel.updateTest(
    req.params.id,
    req.body
  );

  if (!updatedTest)
    return res
      .status(404)
      .send("The test with the given ID was not found.");
  res.send(updatedTest);
});

router.post("", async (req, res) => {
  const { error } = testModel.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

const newTest = {
    id: null,
    name: req.body.name,
    unit: req.body.unit,
    male_reference_range: req.body.male_reference_range,
    female_reference_range: req.body.female_reference_range,
    price: req.body.price,
    description: req.body.description,
  };

  const insertedId = await testModel.saveTest(newTest);
  newTest.id = insertedId;
  res
    .send({
      id: newTest.id,
      name: newTest.name,
      unit: newTest.unit,
      male_reference_range: newTest.male_reference_range,
      female_reference_range: newTest.female_reference_range,
      price: newTest.price,
      description: newTest.description,
    });
});

router.delete("/:id", async (req, res) => {
  const rowsAffected = await testModel.deleteTest(req.params.id);
  if (rowsAffected == false) {
    return res
      .status(404)
      .send("The test with the given ID cannot be deleted.");
  }
  res.send({ deleted: true });
});


module.exports = router;
