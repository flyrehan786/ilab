// const auth = require("../middleware/auth");
// const _ = require("lodash");

const patientTestsModel = require('../models/patient-tests');
const patientTestsRemarksModel = require('../models/patient-tests-remarks');
const paymentsModel = require('../models/payments');
const express = require("express");
const router = express.Router();

router.get("", async (req, res) => {
  const patientTests = await patientTestsModel.findAll();
  patientTests.forEach(x => {
    x.created_at = new Date(x.created_at).toLocaleString();
    x.updated_at = new Date(x.updated_at).toLocaleString();
  })
  res.send(patientTests);
});

router.post("", async (req, res) => {
    // Request JSON.
    const requestObj = {
        patient_id: '1',
        doctor_id: '1',
        selected_tests: [1,2,3,4],
        total_amount: 10000,
        discount_amount: 2000,
        balance_amount: 8000
    };

    // Insert into Patient Tests.
    // Insert into Patient Tests Remarks.
    // Insert into payments.
    // send back response to frontend. 
})


module.exports = router;
