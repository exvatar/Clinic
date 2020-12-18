module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "Clinics",
        {
            name: DataTypes.STRING,
            address: DataTypes.STRING,
            phone: DataTypes.STRING,
            email: DataTypes.STRING,
            openTime: DataTypes.STRING,
            closeTime: DataTypes.STRING,
            status: DataTypes.STRING
        },
        {
            tableName: "clinics",
            timestamp: false,
        }
    );
    model.associate = (models) => {
        model.hasMany(models.Docters, {
            foreignKey: "clinic_id"
        });
        model.hasMany(models.Reservations, {
            foreignKey: "clinic_id"
        });
        model.hasMany(models.CloseDays, {
            foreignKey: "clinic_id"
        });
    }
    return model;
}