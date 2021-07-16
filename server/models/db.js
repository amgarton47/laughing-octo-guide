const Sequelize = require("sequelize");
let db;

if (process.env.DATABASE_URL) {
  db = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    port: 5432,
    // host: "<heroku host>",
    logging: false, //false
    dialectOptions: {
      ssl: { rejectUnauthorized: false },
    },
  });
} else {
  db = new Sequelize("postgres://localhost:5432/mapguy", {
    logging: false,
  });
}

module.exports = db;
