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

const connectionString = process.env.DATABASE_URL || 'postgres://default:pZ1uQUIW5AEK@ep-shiny-snowflake-a4flgchp-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require';

const sequelize = new Sequelize(connectionString, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

module.exports = sequelize;
