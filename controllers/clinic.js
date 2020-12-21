const db = require("../models/");

const getAllClinic = async (req, res) => {
    const allClinic = await db.Clinics.findAll();
    res.status(200).send({ allClinic });
}

module.exports = { getAllClinic };