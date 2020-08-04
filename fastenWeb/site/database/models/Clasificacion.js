module.exports = (sequelize, dataTypes) => {

    let alias = "Clasificacion";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "clasificacion",
        timestamps: false
    }

    const Clasificacion = sequelize.define(alias, cols, config);

    Clasificacion.associate = function(models) {
        Clasificacion.hasMany(models.Productos, {
            as: "prodcutos",
            foreignKey: "clasificacion_id"
        });
    }

    return Clasificacion;
}