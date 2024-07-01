// const { Sequelize } = require('sequelize');

// const database = process.env.DATABASE_NAME || 'helpdesk';
// const username = process.env.DATABASE_USER || 'helpdesk_user';
// const password = process.env.DATABASE_PASSWORD || 'password';
// const host = process.env.DATABASE_HOST || 'localhost';
// const port = process.env.DATABASE_PORT || 5432;
// const dialect = 'postgres';
// const dialectOptions = {
//   ssl: {
//     require: true,
//     rejectUnauthorized: false
//   }
// };

// const sequelize = new Sequelize(database, username, password, {
//   host,
//   port,
//   dialect,
//   dialectOptions
// });

// module.exports = sequelize;

// const { Sequelize } = require('sequelize');

// const connectionString = process.env.DATABASE_URL;

// if (!connectionString) {
//   throw new Error("DATABASE_URL environment variable is not set.");
// }

// const sequelize = new Sequelize(connectionString, {
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false
//     }
//   }
// });

// module.exports = sequelize;

const { Sequelize } = require('sequelize');

const connectionString = process.env.POSTGRES_URL;

if (!connectionString) {
  throw new Error("POSTGRES_URL environment variable is not set.");
}

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

