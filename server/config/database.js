// Cofigure Sequelize ORM to Postgres Database
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('helpdesk', 'helpdesk_user', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
