const Sequelize = require("sequelize"),
  db = require("./db");

const Landmark = db.define("landmark", {
  name: Sequelize.STRING,
  coordinates: Sequelize.ARRAY(Sequelize.FLOAT),
});

module.exports = Landmark;
