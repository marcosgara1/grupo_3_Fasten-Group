'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('client_product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'client'
          },
          key: 'id'
        },
        allowNull: false
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'product'
          },
          key: 'id'
        },
        allowNull: false
      },
      });
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('client_product');
  }
    
};
