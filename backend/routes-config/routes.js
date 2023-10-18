const express = require('express');
const router = express.Router();

const usersRoutes = require('../routes/users');
const authRoute = require('../routes/auth');
const patientsRoutes = require('../routes/patients');
const doctorsRoutes = require('../routes/doctors');
const testsRoutes = require('../routes/tests');
const patientTestsRoutes = require('../routes/patient-tests');
const patientTestsResultsRoutes = require('../routes/patient-tests-results');

router.use('/api/auth', authRoute);
router.use('/api/users', usersRoutes);
router.use('/api/patients', patientsRoutes);
router.use('/api/doctors', doctorsRoutes);
router.use('/api/tests', testsRoutes);
router.use('/api/tests', testsRoutes);
router.use('/api/patient-tests', patientTestsRoutes);
router.use('/api/patient-tests-results', patientTestsResultsRoutes);

module.exports = router;
