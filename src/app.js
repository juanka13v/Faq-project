const express = require("express");
const app = express();
const path = require("path");
const expressLayout = require("express-ejs-layouts");
const methodOverride = require("method-override");
const { MONGO_URI, PORT } = require("./config");
const connectDB = require("./db/connect");

const adminRoute = require("./routes/question.admin.route");
const tagRoute = require("./routes/tag.admin.route");
const appRoute = require("./routes/app.route");
const errorHandler = require("./middlewares/error.middleware");

// parse json
app.use(express.urlencoded({ extended: true }));

// config ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayout);
app.set("layout", "layout");
app.use(methodOverride("_method"));

// routes
app.use("/", appRoute);
app.use("/admin", adminRoute);
app.use("/admin", tagRoute);

app.use(errorHandler);

const start = async () => {
  try {
    // connectDB
    await connectDB(MONGO_URI);
    console.log("connected");
    app.listen(PORT, console.log(`Server is listening port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
