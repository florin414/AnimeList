//#region imports
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const { graphqlHTTP } = require("express-graphql");
const colors = require('colors');
const schema = require("./graphql-mongoose-atlas-api/schema/schema");
const connectMongoDB = require("./graphql-mongoose-atlas-api/config/mongodb");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
//#endregion imports

require("dotenv").config();

//#region create reload server
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
//#endregion create reload server

var app = express();

//#region connect to database
connectMongoDB();
//#endregion

app.use(connectLiveReload());

//#region view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//#endregion view engine setup

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//#region endpoints
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
  })
);
//#endregion endpoints

//#region catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
//#endregion catch 404 and forward to error handler

//#region error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
//#endregion error handler
