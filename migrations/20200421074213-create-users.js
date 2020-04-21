'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20)
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING(255),
    
      },
      admin_flg:{
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.TINYINT,
      },
      email:{
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      password:{
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};