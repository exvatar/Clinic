const router = require('express').Router();
const docterControllers = require('../controllers/docter');

router.get('/:clinicId', docterControllers.getDocterByClinicId)

module.exports = router;