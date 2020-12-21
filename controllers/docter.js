const db = require("../models/");

const getDocterByClinicId = async (req, res) => {
    const clinicId = req.params.clinicId
    const allDocter = await db.Docters.findAll({
        where: {
            clinic_id: clinicId
        }
    });
    res.status(200).send({ allDocter });
}

module.exports = { getDocterByClinicId };