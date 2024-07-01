const { Sequelize } = require('sequelize');
const pg = require('pg');

const connectionString = process.env.POSTGRES_URL;

if (!connectionString) {
  throw new Error("POSTGRES_URL environment variable is not set.");
}

const sequelize = new Sequelize(connectionString, {
  dialect: 'postgres',
  dialectModule: pg,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,  // Note: ensure this is okay for your security policy
    },
  },
  define: {
    schema: 'public' // Ensure the correct schema is set
  },
});

module.exports = sequelize;
