module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "DocterTypes",
        {
            createDate: DataTypes.STRING
        },
        {
            tableName: "docterTypes",
            timestamps: false,
        }
    );
    model.associate = (models) => {
        model.belongsTo(models.Docters,{
            foreignKey: "docter_id"
        });
        model.belongsTo(models.Types,{
            foreignKey:"type_id"
        })
    }

    return model;
}