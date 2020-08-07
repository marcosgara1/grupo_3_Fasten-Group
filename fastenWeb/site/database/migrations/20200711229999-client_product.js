'use strict';

const { DataTypes } = require("sequelize/types");

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
        type: dataTypes.INTEGER
      },
      client_id: {
        type: dataTypes.INTEGER
      }
      });
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('client_product');
  }
    
};
