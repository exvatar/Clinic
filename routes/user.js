const router = require('express').Router();
const userControllers = require('../controllers/user');
const auth = require("../util/auth");

router.post('/register', userControllers.register);
router.post('/login', userControllers.login)
router.get('/profile',auth, userControllers.getProfileUser)
module.exports = router;