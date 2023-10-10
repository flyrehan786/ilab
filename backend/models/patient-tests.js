const Joi = require("joi");
const db = require('../services/mysql').db;

function validatePatientTest(patientTest) {
    const schema = {
        uuid: Joi.string()
            .min(4)
            .max(256)
            .required(),
        test_id: Joi.string()
            .min(4)
            .max(256)
            .required(),
        status: Joi.string()
            .min(1)
            .max(1)
            .required(),
    };
    return Joi.validate(patientTest, schema);
}
