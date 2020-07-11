'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('client', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name : {
        type : Sequelize.STRING(45),
        allowNull: false
      },
      last_name : {
        type : Sequelize.STRING(45),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      password : {
        type : Sequelize.STRING(200),
        allowNull: false
      },
      foto : {
        type : Sequelize.STRING,
        defaultValue: NULL,
        allowNull: true
      }
      });
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('client');
  }
};
