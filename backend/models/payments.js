const Joi = require("joi");
const db = require('../services/mysql').db;

function validatePayment(payment) {
    const schema = {
        patient_test_uuid: Joi.string()
            .min(4)
            .max(256)
            .required(),
        total_amount: Joi.string()
            .min(4)
            .max(256)
            .required(),
        total_discout: Joi.string()
            .min(4)
            .max(256)
            .required(),
        total_paid_amount: Joi.string()
            .min(4)
            .max(256)
            .required(),
        total_balance_amount: Joi.string()
            .min(4)
            .max(256)
            .required()
    };
    return Joi.validate(payment, schema);
}
