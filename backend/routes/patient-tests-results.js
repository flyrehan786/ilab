// const auth = require("../middleware/auth");
// const _ = require("lodash");
const patientTestsModel = require('../models/patient-tests');
const patientTestsResultsModel = require('../models/patient-tests-results');
const express = require("express");
const router = express.Router();

router.get("/:uuid", async (req, res) => {
    const testResults = await patientTestsResultsModel.findPatientTestsResultByUUID(req.params.uuid);
    res.send(testResults);
});

router.post("", async (req, res) => {
    req.body = {
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
    const uuid = req.body.patient_test_uuid;
    const testResults = req.body.test_results;
    let queryResults = { patient_test_uuid: uuid, updateQueryResult: [] };
    for (let t = 0; t < testResults.length; t++) {
        const tr = testResults[t];
        const recordExist = await patientTestsResultsModel.findPatientTestsResultByTestIdAndUUID(uuid, tr.test_id);
        if (recordExist) {
            const queryResult = await patientTestsResultsModel.updatePatientTestsResultByTestIdAndUUID({
                patient_tests_uuid: uuid,
                test_id: tr.test_id,
                result_value: tr.result_value,
                remarks: tr.remarks
            });
            if (queryResult) {
                queryResults.updateQueryResult.push({
                    payload: {
                        test_id: tr.test_id,
                        remarks: tr.remarks,
                        queryResponse: true
                    },
                });
            } else {
                queryResults.updateQueryResult.push({
                    payload: {
                        test_id: tr.test_id,
                        remarks: tr.remarks,
                        queryResponse: false
                    },
                });
            }
        } else {
            const queryResult = await patientTestsResultsModel.savePatientTestResult({
                patient_tests_uuid: uuid,
                test_id: tr.test_id,
                result_value: tr.result_value,
                remarks: tr.remarks
            });
            if (queryResult) {
                queryResults.updateQueryResult.push({
                    payload: {
                        test_id: tr.test_id,
                        remarks: tr.remarks,
                        queryResponse: true
                    },
                });
            } else {
                queryResults.updateQueryResult.push({
                    payload: {
                        test_id: tr.test_id,
                        remarks: tr.remarks,
                        queryResponse: false
                    },
                });
            }
        }
    }
    const patientStatusQueryResponse = await patientTestsModel.patientTestCompletedByUUID(uuid);
    res.send({
        success: true,
        queryResults,
        statusUpdated: patientStatusQueryResponse.length === req.body.test_results.length
    })
});

module.exports = router;
