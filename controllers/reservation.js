const db = require("../models/");

const createReservation = async (req, res) => {
    const {
        reservationDate,
        createDate,
        detail,
        createAt,
        updateAt,
        clinic_id,
        docter_id,
        type_id
    } = req.body
    const user_id = req.user.id;
    const reservation = await db.Reservations.create({
        reservationDate,
        createDate,
        detail,
        createAt,
        updateAt,
        clinic_id,
        docter_id,
        user_id,
        type_id
    });
    if (reservation.id) {
        res.status(200).send({ reservation });
    } else {
        res.status(400).send({ message: "Can not create" });
    }
}

module.exports = { createReservation };