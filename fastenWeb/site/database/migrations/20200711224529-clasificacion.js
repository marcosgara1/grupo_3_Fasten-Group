'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('clasificacion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre : {
        type : Sequelize.STRING(45),
        allowNull: false
      }
      });
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clasificacion');
  }
};
