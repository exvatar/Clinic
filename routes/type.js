const router = require('express').Router();
const typeControllers = require('../controllers/type');

router.get('/', typeControllers.getAllType)

module.exports = router;