const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./db");
const logger = require("morgan");
var cors = require("cors");

const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const membersRoute = require("./routes/members");

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  err => {
    console.log("Can not connect to the database " + err);
  }
);

const app = express();

app.set("secretKey", "nodeRestApi");
app.use(logger("dev"));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: false,
    parameterLimit: 1000000
  })
);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors({ origin: "*" }));

/////////////////////////////////////////////////////////

app.use("/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/members", membersRoute);

/////////////////////////////////////////////////////////

app.get("/", function(req, res) {
  res.send("hello");
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
