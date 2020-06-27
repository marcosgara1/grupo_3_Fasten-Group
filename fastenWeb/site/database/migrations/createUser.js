/*
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: { 
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      id : { type : Sequelize.DECIMAL(3,1) },
      name : { type : Sequelize.INTEGER },
      modelo : { type : Sequelize.INTEGER },
      price : { type : Sequelize.DATE },
      description : { type : Sequelize.STRING },
      descriptionSeg : { type : Sequelize.INTEGER },
      foto : { type : Sequelize.INTEGER }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};*/