// backend/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('helpdesk', 'helpdesk_user', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
