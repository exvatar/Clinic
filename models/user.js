module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "User",
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            birthday: DataTypes.STRING,
            gender: DataTypes.STRING,
            idCardNumber: DataTypes.STRING,
            address: DataTypes.STRING,
            mobilePhone: DataTypes.STRING,
            homePhone: DataTypes.STRING
        },
        {
            tableName: "users",
            timestamps: false,
        }
    );
    model.associate = (models) => {
        model.hasMany(models.TretmentDetails, {
            foreignKey: "user_id"
        })
        model.hasMany(models.Reservations, {
            foreignKey: "user_id"
        })
    }
    return model;
}