// Cofigure Sequelize ORM to Postgres Database
const { Sequelize } = require('sequelize');
const { Pool } = require('pg');

const database = process.env.DATABASE_NAME || 'helpdesk';
const username = process.env.DATABASE_USER || 'helpdesk_user';
const password = process.env.DATABASE_PASSWORD || 'password';
const host = process.env.DATABASE_HOST || 'localhost';
const dialect = 'postgres';
const ssl = process.env.NODE_ENV === 'production' ? {
  ssl: {
    require: true,
    rejectUnauthorized: false
  }
} : {};

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  dialectOptions: ssl,
});



const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

// pool.connect((err) => {
//   if (err) throw err
//   console.log("Connect to PostgreSQL successful!")
// })



module.exports = pool
module.exports = sequelize;
