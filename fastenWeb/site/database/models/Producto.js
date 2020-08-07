module.exports = (sequelize, dataTypes) => {

    let alias = "Productos";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        modelo: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING        
        },
        descriptionSeg: {
            type: dataTypes.STRING
        },
        foto: {
            type: dataTypes.STRING
        },
        clasificacion_id: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "products",
        timestamps: false
    }

    const Products = sequelize.define(alias, cols, config);

    Products.associate = function(models) {
        Products.belongsTo(models.Clasificacion, {
            as: "clasificacion",
            foreignKey: "clasificacion_id"
        });
        
        Products.belongsToMany(models.Cliente, {
            as: "client",
            through: "client_product",
            foreignKey: "product_id",
            otherKey: "client_id",
            timestamps: false
        });
        
    } 

    return Products;
}