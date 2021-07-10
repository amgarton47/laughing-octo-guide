const path = require("path"),
  { db } = require("./models"),
  express = require("express"),
  morgan = require("morgan"),
  PORT = 4747,
  chalk = require("chalk"),
  app = express(),
  api = require("./routes/api");

// logging and body-parsing
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// serves our public assets
app.use("/public", express.static(path.join(__dirname, "..", "/public")));

app.get("/", (req, res, next) => {
  res.send("hi");
});

app.use("/api", api);

app.use((req, res, next) => {
  const err = new Error("page not found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status = err.status || 500;
  console.error(err);

  res.send(err.message);
});

const init = async () => {
  try {
    await db.sync();
  } catch (err) {
    console.error(err);
  }
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}/`);
  });
};

init();
