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
        type_id,
        status
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
        type_id,
        status
    });
    if (reservation.id) {
        res.status(200).send({ reservation });
    } else {
        res.status(400).send({ message: "Can not create" });
    }
}

const getReservation = async (req, res) => {
    const userId = req.user.id;
    const allReservation = await db.Reservations.findAll({
        where: {
            user_id: userId
        },
        include: [
            {
                model: db.User
            },
            {
                model: db.Docters
            },
            {
                model: db.Clinics
            },
            {
                model: db.Types
            }
        ]
    })
    res.status(200).send({ allReservation });
}

const getAllReservationByDate = async (req, res) => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const newDate = `${month}/${day}/${year}`

    const allReservation = await db.Reservations.findAll({
        where: {
            reservationDate: newDate
        },
        include: [
            {
                model: db.User
            },
            {
                model: db.Docters
            },
            {
                model: db.Clinics
            },
            {
                model: db.Types
            }
        ]
    })
    res.status(200).send({ allReservation });
}

const updateReservation = async (req, res) => {
    const { reservationId, status, detail } = req.body;
    const targetReservation = await db.Reservations.findOne({
        where: {
            id: reservationId
        }
    })
    if (targetReservation) {
        await targetReservation.update({ status: status, detail: detail })
        res.status(201).send({ message: "Update Success" });
    } else {
        res.status(404).send({ message: "Not found" });
    }

}

const getAllReservationByClinicId = async (req, res) => {
    const { clinicId } = req.body
    const allReservation = await db.Reservations.findAll({
        where: {
            clinic_id: 1
        },
        include: [
            {
                model: db.User
            },
            {
                model: db.Docters
            },
            {
                model: db.Clinics
            },
            {
                model: db.Types
            }
        ]
    })
    res.status(200).send({ allReservation });
}
module.exports = {
    createReservation,
    getReservation,
    getAllReservationByDate,
    updateReservation,
    getAllReservationByClinicId
};