'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name : {
        type : Sequelize.STRING(45),
        allowNull: false
      },
      modelo : {
        type : Sequelize.STRING(45),
        allowNull: true,
        defaultValue: NULL
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      description : {
        type : Sequelize.STRING(300),
        allowNull: false
      },
      descriptionSeg : {
        type: Sequelize.STRING(300),
        allowNull: true,
        defaultValue: NULL
      },
      foto : {
        type : Sequelize.STRING(500),
        allowNull: false
      },
      clasificacion_id: {
        type: Sequelize.INTEGER
      }
      });
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('product');
  }
};
