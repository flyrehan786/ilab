const Joi = require("joi");
const db = require('../services/mysql').db;

function validateTestResult(testResult) {
    const schema = {
        patient_test_uuid: Joi.string()
            .min(4)
            .max(256)
            .required(),
        test_id: Joi.string()
            .min(4)
            .max(256)
            .required(),
        result_value: Joi.string()
            .min(4)
            .max(256)
            .required(),
        remarks: Joi.string()
            .min(4)
            .max(256)
            .required(),
    };
    return Joi.validate(testResult, schema);
}
