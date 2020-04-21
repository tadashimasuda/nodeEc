'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('purchases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        //mul
        references: {
          model: 'products',
          key: 'id'
        },
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        //mul
        references: {
          model: 'users',
          key: 'id'
        },
      },
      price:{
        allowNull: false,
        type: Sequelize.STRING,
      },
      amount:{
        allowNull: false,
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('purchases');
  }
};