// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

const Promise = require("bluebird"),
  { db } = require("./models"),
  chalk = require("chalk");

const data = {
  landmark: [
    {
      name: "Pomona College",
      college: "Pomona College",
      coordinates: [-117.712761, 34.097481],
    },
    {
      name: "Pitzer College",
      college: "Pitzer College",
      coordinates: [-117.705093, 34.104649],
    },
    {
      name: "Claremont McKenna College",
      college: "Claremont McKenna College",
      coordinates: [-117.70653995627396, 34.10067005167589],
    },
    {
      name: "Harvey Mudd College",
      college: "Harvey Mudd College",
      coordinates: [-117.70856800070845, 34.10601062920307],
    },
    {
      name: "Scripps College",
      college: "Scripps College",
      coordinates: [-117.710013570021, 34.10389104574483],
    },
    {
      name: "The SCC",
      college: "Pomona College",
      coordinates: [-117.71367906374799, 34.09951796352908],
    },
    {
      name: "The Hive",
      college: "Pomona College",
      coordinates: [-117.7141, 34.10061],
    },
    {
      name: "The Kravis Center",
      college: "Claremont McKenna College",
      coordinates: [-117.711342, 34.097618],
    },
  ],
};

async function seed() {
  try {
    await db.sync(/*{ force: true }*/);
    console.log(chalk.green("Dropped old data, now inserting seed data"));

    await Promise.map(Object.keys(data), async function (name) {
      await Promise.map(data[name], async function (item) {
        await db.model(name).create(item);
      });
    });

    console.log(chalk.green("Finished inserting data"));
    console.log(
      [
        chalk.red("Y"),
        chalk.yellow("A"),
        chalk.green("Y"),
        chalk.blue("!"),
        chalk.magenta("!"),
      ].join("")
    );
  } catch (err) {
    console.error("There was totally a problem", err, err.stack);
  } finally {
    // db.close(); // uses promises but does not return a promise.
    console.log("connection closed"); // the connection eventually closes, we just manually do so to end the process quickly
  }
}

seed();

module.exports = seed;
