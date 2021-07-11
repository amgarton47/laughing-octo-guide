const Sequelize = require("sequelize"),
  db = require("./db");

const Landmark = db.define("landmark", {
  name: { type: Sequelize.STRING, allowNull: false, unique: true },
  college: {
    type: Sequelize.ENUM(
      "Pomona College",
      "Scripps College",
      "Claremont McKenna College",
      "Pitzer College",
      "Harvey Mudd College"
    ),
    allowNull: false,
  },
  coordinates: Sequelize.ARRAY(Sequelize.FLOAT),
});

module.exports = Landmark;
