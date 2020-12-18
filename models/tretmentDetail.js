module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "TretmentDetails",
        {
            detail: DataTypes.STRING,
            date: DataTypes.STRING
        },
        {
            tableName: "treatmentDetails",
            timestamps: false,
        }
    );
    model.associate = (models) => {
        model.belongsTo(models.User, {
            foreignKey: "user_id"
        });
        model.belongsTo(models.Docters, {
            foreignKey: "docter_id"
        });
    };
    return model;
}