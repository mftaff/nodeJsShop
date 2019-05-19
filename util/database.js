const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '4jf7hdDnch035hbvacc', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
