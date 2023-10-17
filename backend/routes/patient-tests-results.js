// const auth = require("../middleware/auth");
// const _ = require("lodash");
const patientTestsModel = require('../models/patient-tests');
const patientTestsResultsModel = require('../models/patient-tests-results');
const express = require("express");
const router = express.Router();

router.get("", async (req, res) => {
});

router.post("", async (req, res) => {
    // Request Data.
    const requestData = {
        patient_test_uuid: '1697201760058',
        test_results: [
            {
                test_id: 1,
                result_value: 'adadasd',
                remarks: '...'
            },
            {
                test_id: 2,
                result_value: 'hjgj',
                remarks: '...'
            },
            {
                test_id: 3,
                result_value: 'hgjjdasd',
                remarks: '...'
            },
            {
                test_id: 4,
                result_value: 'kjtvcd',
                remarks: '...'
            },
        ]
    }
    // Loop through Test Results from request data.
    const uuid = requestData.patient_test_uuid;
    const testResults = requestData.test_results;
    let queryResults = { patient_test_uuid: uuid, updateQueryResult: [] };
    testResults.forEach(async tr => {
        const recordExist = await patientTestsResultsModel.findPatientTestsResultByTestIdAndUUID(uuid, tr.test_id);
        if (recordExist) {
            console.log('updating.....');
            const queryResult = await patientTestsResultsModel.updatePatientTestsResultByTestIdAndUUID({
                patient_tests_uuid: uuid,
                test_id: tr.test_id,
                result_value: tr.result_value,
                remarks: tr.remarks
            });
            queryResults.updateQueryResult.push({
                payload: {
                    test_id: tr.test_id,
                    remarks: tr.remarks
                },
                queryResponse: queryResult
            });
        } else {
            const queryResult = await patientTestsResultsModel.savePatientTestResult({
                patient_tests_uuid: uuid,
                test_id: tr.test_id,
                result_value: tr.result_value,
                remarks: tr.remarks
            });
            queryResults.updateQueryResult.push({
                payload: {
                    test_id: tr.test_id,
                    remarks: tr.remarks
                },
                queryResponse: queryResult
            });
        }
    });
    const patientStatusQueryResponse = await patientTestsModel.patientTestCompletedByUUID(uuid);
    res.send({
        queryResults,
        patientStatusQueryResponse
    })
});

module.exports = router;
