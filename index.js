require('dotenv').config();
const express = require("express");
const app = express();
const db = require('./models');
const cors = require('cors');

const userRoutes = require('./routes/user')
const clinicRoutes = require('./routes/clinic')
const docterRoutes = require('./routes/docter')
const typeRoutes = require('./routes/type')
const reservationRoutes = require('./routes/reservation')

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());
app.use('/users', userRoutes);
app.use('/clinic', clinicRoutes);
app.use('/docter', docterRoutes);
app.use('/type', typeRoutes);
app.use('/reservation', reservationRoutes)

db.sequelize.sync({ alter: false, force: false }).then(() => {
    console.log("Database is running");
});

app.listen(process.env.PORT || 5555, () => {
    console.log(`Server is running at port: ${process.env.PORT}`)
})