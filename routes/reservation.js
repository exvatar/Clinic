const router = require('express').Router();
const reservationControllers = require('../controllers/reservation');
const auth = require("../util/auth");

router.post('/', auth, reservationControllers.createReservation)
router.get('/getReservation', auth, reservationControllers.getReservation)
router.get('/getAllReservationByDate', reservationControllers.getAllReservationByDate)
router.put('/updateReservation', reservationControllers.updateReservation)
router.get('/getAllReservationByClinicId',reservationControllers.getAllReservationByClinicId)

module.exports = router;