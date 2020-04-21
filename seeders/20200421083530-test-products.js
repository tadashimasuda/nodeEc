'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   
   return queryInterface.bulkInsert('products', [
    {
      name: 'ワイヤレスマウス',
      price: 945,
      stock: 20,
      public_flg: 1,
      image: 'https://images-na.ssl-images-amazon.com/images/I/41u%2B1O8fcrL._AA210_.jpg',
      created_at:new Date(),
      updated_at:new Date()
    },
    {
      name: 'HDMI切替器',
      price: 998,
      stock: 20,
      public_flg: 1,
      image: 'https://images-na.ssl-images-amazon.com/images/I/41CZib2SYRL._AA210_.jpg',
      created_at:new Date(),
      updated_at:new Date()
    },
    {
      name: '二つ折り財布',
      price: 1490,
      stock: 20,
      public_flg: 1,
      image: 'https://images-na.ssl-images-amazon.com/images/I/51115e380YL._AA210_.jpg',
      created_at:new Date(),
      updated_at:new Date()
    },
  

  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
