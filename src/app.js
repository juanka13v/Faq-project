const express = require("express");
const app = express();
const path = require("path")
const expressLayout = require("express-ejs-layouts")
const { MONGO_URI, PORT } = require("./config");
const connectDB = require("./db/connect");

// parse json
app.use(express.json());

// config ejs
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayout)
app.set('layout', 'layout');



app.get("/", (req, res) => {
  res.render("pages/index")
});

app.get("/docs", (req, res) => {
  res.render("pages/docs")
});

app.get("/about", (req, res) => {
  res.render("pages/about")
});

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
