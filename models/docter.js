module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "Docters",
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            birthday: DataTypes.STRING,
            email: DataTypes.STRING,
            mobilePhone: DataTypes.STRING,
            address: DataTypes.STRING
        },
        {
            tableName: "docters",
            timestamps: false,
        }
    );
    model.associate = (models) => {
        model.hasMany(models.TretmentDetails, {
            foreignKey: "docter_id"
        })
        model.belongsTo(models.Clinics, {
            foreignKey: "clinic_id"
        })
        model.hasMany(models.DocterTypes, {
            foreignKey: "docter_id"
        })
        model.hasMany(models.Reservations, {
            foreignKey: "docter_id"
        })
    }
    return model;
}