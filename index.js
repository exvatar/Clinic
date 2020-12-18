require('dotenv').config();
const express = require("express");
const app = express();
const db = require('./models');
const cors = require('cors');

const userRoutes = require('./routes/user')

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());
app.use('/users', userRoutes)


db.sequelize.sync({ alter: false, force: false }).then(() => {
    console.log("Database is running");
});

app.listen(process.env.PORT || 5555, () => {
    console.log(`Server is running at port: ${process.env.PORT}`)
})