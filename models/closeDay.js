module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "CloseDays",
        {
            closeDate: DataTypes.STRING,
            detail: DataTypes.STRING,
            createDate: DataTypes.STRING,
        },
        {
            tableName: "closedays",
            timestamps: false,
        }
    );
    model.associate = (models) => {
        model.belongsTo(models.Types, {
          foreignKey: "type_id"
        });
        model.belongsTo(models.Clinics, {
          foreignKey: "clinic_id"
        });
      }
    return model;
}