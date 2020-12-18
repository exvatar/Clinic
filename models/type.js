module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "Types",
    {
      name: DataTypes.STRING,
    },
    {
      tableName: "types",
      timestamps: false,
    }
  );
  model.associate = (models) => {
    model.hasMany(models.DocterTypes, {
      foreignKey: "type_id"
    });
    model.hasMany(models.Reservations, {
      foreignKey: "type_id"
    })
    model.hasMany(models.CloseDays, {
      foreignKey: "type_id"
    })
  }
  return model;
}