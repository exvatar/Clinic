const router = require('express').Router();
const reservationControllers = require('../controllers/reservation');
const auth = require("../util/auth");

router.post('/',auth, reservationControllers.createReservation)

module.exports = router;