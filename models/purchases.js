'use strict';
module.exports = (sequelize, DataTypes) => {
  const purchases = sequelize.define('purchases', {
    price: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  purchases.associate = function(models) {
    // associations can be defined here
  };
  return purchases;
};