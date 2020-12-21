const router = require('express').Router();
const clinicControllers = require('../controllers/clinic');

router.get('/', clinicControllers.getAllClinic)

module.exports = router;