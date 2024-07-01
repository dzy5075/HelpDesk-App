const { Sequelize } = require('sequelize');

const database = process.env.DATABASE_NAME || 'helpdesk';
const username = process.env.DATABASE_USER || 'helpdesk_user';
const password = process.env.DATABASE_PASSWORD || 'password';
const host = process.env.DATABASE_HOST || 'localhost';
const port = process.env.DATABASE_PORT || 5432;
const dialect = 'postgres';
const ssl = process.env.NODE_ENV === 'production' ? {
  ssl: {
    require: true,
    rejectUnauthorized: false
  }
} : {};

const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect,
  dialectOptions: ssl,
});

module.exports = sequelize;
