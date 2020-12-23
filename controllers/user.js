const db = require("../models/");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password,
        birthday,
        gender,
        idCardNumber,
        address,
        mobilePhone,
        homePhone
    } = req.body;
    if (!email) {
        return res.status(400).send({ error: "no email provided" });
    }
    const targetUser = await db.User.findOne({ where: { email } });
    if (targetUser) {
        console.log("err");
        res.status(400).send({ message: "User already taken" });
    } else {
        const salt = bcryptjs.genSaltSync(12);
        const hashedPassword = bcryptjs.hashSync(password, salt);

        await db.User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            birthday,
            gender,
            idCardNumber,
            address,
            mobilePhone,
            homePhone,
            role: ""
        });
        const newUser = await db.User.findOne({ where: { email } })
        if (newUser) {
            res.status(201).send({ message: "User created" });
        } else {
            res.status(400).send({ message: "User can not create" });
        }
    }
}
const login = async (req, res) => {
    const { email, password } = req.body;
    const targetUser = await db.User.findOne({ where: { email } })
    if (targetUser) {
        if (bcryptjs.compareSync(password, targetUser.password)) {
            const token = jwt.sign(
                {
                    id: targetUser.id
                },
                process.env.SECRET_KEY,
                {
                    expiresIn: 3600
                }
            );
            res.status(200).send({ token, role: targetUser.role });
        } else {
            res.status(400).send({ message: "Wrong password" });
        }
    } else {
        res.status(400).send({ message: "Not found account" })
    }
}
const getProfileUser = async (req, res) => {
    const userId = req.user.id;
    const targetUser = await db.User.findOne({
        where: {
            id: userId
        }
    })
    if (targetUser) return res.status(200).send(targetUser)
    else return res.status(404).send({ message: 'Not found user' })
}
module.exports = { register, login, getProfileUser };