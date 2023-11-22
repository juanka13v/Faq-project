const express = require("express");
const app = express();
const { MONGO_URI, PORT } = require("./config");
const connectDB = require("./db/connect")

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
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
