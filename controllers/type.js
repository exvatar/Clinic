const db = require("../models/");

const getAllType = async (req, res) => {
    const allType = await db.Types.findAll();
    res.status(200).send({ allType });
}

module.exports = { getAllType };