module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "Reservations",
        {
            reservationDate: DataTypes.STRING,
            creatDate: DataTypes.STRING,
        },
        {
            tableName: "reservations",
            timestamp: false,
        }
    );
    model.associate = (models) => {
        model.belongsTo(models.User, {
            foreignKey: "user_id"
        });
        model.belongsTo(models.Clinics, {
            foreignKey: "clinic_id"
        });
        model.belongsTo(models.Types, {
            foreignKey: "type_id"
        });
    }
    return model;
}