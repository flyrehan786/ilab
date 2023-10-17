// const auth = require("../middleware/auth");
// const _ = require("lodash");

const patientTestsModel = require('../models/patient-tests');
const patientTestsRemarksModel = require('../models/patient-tests-remarks');
const paymentsModel = require('../models/payments');
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

router.get("", async (req, res) => {
    try {
        const patientTests = await patientTestsModel.findAll();
        const formattedPatientTests = patientTests.map(test => {
          return {
            ...test,
            created_at: new Date(test.created_at).toLocaleString(),
            updated_at: new Date(test.updated_at).toLocaleString(),
          };
        });
        res.send(formattedPatientTests);
      } catch (error) {
        console.error('Error fetching patient tests:', error);
        res.status(500).send('Internal Server Error');
      }
});

router.get("/:uuid", async (req, res) => {
    const patientTests = await patientTestsModel.findPatientTestsByUUID(req.params.uuid);
    res.send(patientTests);
});

router.post("", async (req, res) => {
    const uuid = uuidv4();
    const testStatus = '0'; // pending
    // Request Body: 
    // {
    //     "patient_id": 1,
    //     "doctor_id": 1,
    //     "selected_tests": [1, 2, 3, 4],
    //     "total_amount": 10000,
    //     "paid_amount": 10000,
    //     "discount_amount": 2000,
    //     "balance_amount": 8000,
    //     "remarks": "..."
    // }

    // validate data.
    // Insert into Patient Tests.
    let patientTestsSaveResults = [];
    for (let p = 0; p < req.body.selected_tests.length; p++) {
        const t = req.body.selected_tests[p];
        const patientTestSaveResult = await patientTestsModel.savePatientTests({
            uuid: uuid,
            test_id: t,
            status: testStatus
        });
        if (patientTestSaveResult) patientTestsSaveResults.push(patientTestSaveResult);
    }

    // Insert into Patient Tests Remarks.
    const patientTestsRemarksSaveResult = await patientTestsRemarksModel.savePatientTestsRemarks({
        patient_tests_uuid: uuid,
        patient_id: req.body.patient_id,
        refered_by_doctor_id: req.body.doctor_id,
        remarks: req.body.remarks
    });

    // Insert into payments.
    const paymentsSaveResult = await paymentsModel.savePayment({
        patient_tests_uuid: uuid,
        total_amount: req.body.total_amount,
        total_discount: req.body.discount_amount,
        total_paid_amount: req.body.paid_amount,
        total_balance_amount: req.body.balance_amount
    });
    if (
        patientTestsSaveResults !== null &&
        patientTestsRemarksSaveResult !== null &&
        paymentsSaveResult !== null
    ) {
        const queriesResponse = await Promise.all([
            patientTestsModel.findPatientTestsByUUID(uuid),
            await patientTestsRemarksModel.findPatientTestsRemarksByUUID(uuid),
            await paymentsModel.findPaymentByUUID(uuid)
        ]);
        res.send({ created: true, queriesResponse });
    } else res.send({ created: false, queriesResponse: [] });
})

router.put("", async (req, res) => {})

module.exports = router;
