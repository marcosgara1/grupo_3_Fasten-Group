    module.exports = (sequelize, dataTypes) => {
        
        let alias = "ClientProduct";

        let cols = {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true 
            },
            client_id: {
                type: dataTypes.INTEGER
            },
            product_id: {
                type: dataTypes.INTEGER
            }
        }
        
        let config = {
            tableName: "client_product",
            timestamps: false
        }

        const ClientProduct = sequelize.define(alias, cols, config);

        return ClientProduct;
    }