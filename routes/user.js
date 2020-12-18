const router = require('express').Router();
const userControllers = require('../controllers/user');
const auth = require("../util/auth");

router.post('/register', userControllers.register);
router.post('/login', userControllers.login)
module.exports = router;