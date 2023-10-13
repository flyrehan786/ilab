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
    // generate UUID.
    const uuid = new Date().getTime();
    const testStatus = '0';
    const requestObj = {
        patient_id: '1',
        doctor_id: '1',
        selected_tests: [1,2,3,4],
        total_amount: 10000,
        paid_amount: 10000,
        discount_amount: 2000,
        balance_amount: 8000,
        remarks: '...'
    };
    // validate data.
    // Insert into Patient Tests.
    let patientTestsSaveResults = [];
    requestObj.selected_tests.forEach(async t => {
        const patientTestSaveResult = await patientTestsModel.savePatientTests({ 
            uuid: uuid, 
            test_id: t, 
            status: testStatus
        });
        if (patientTestSaveResult) patientTestsSaveResults.push(patientTestSaveResult);
    });


    // Insert into Patient Tests Remarks.
    const patientTestsRemarksSaveResult = await patientTestsRemarksModel.savePatientTestsRemarks({ 
            patient_test_uuid: uuid, 
            patient_id: requestObj.patient_id, 
            refered_by_doctor_id: requestObj.doctor_id,
            remarks: requestObj.remarks
    });

    
    // Insert into payments.
    const paymentsSaveResult = await paymentsModel.savePayment({
        patient_test_uuid: uuid,
        total_amount: requestObj.total_amount,
        total_discount: requestObj.discount_amount,
        total_paid_amount: requestObj.paid_amount,
        total_balance_amount: requestObj.balance_amount
    });

    console.log('Patient Tests Save Results:');
    console.log(patientTestsSaveResults);

    console.log('Patient Tests Remarks Save Result:');
    console.log(patientTestsRemarksSaveResult);

    console.log('Payment Save Result');
    console.log(paymentsSaveResult);

    // Checking all Tests are saved Successfully ?
    // Checking remarks details are saved successfully ? 
    // Checking payments details are saved successfully ?

    // send back response to frontend. 
    // If all details are successfully saved ? return { created: true }
    // else return all results. 
})


module.exports = router;
