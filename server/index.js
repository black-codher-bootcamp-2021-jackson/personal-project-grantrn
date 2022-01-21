const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet"); // improve securtity of http headers
const morgan = require("morgan"); //see what requests have been performed in the terminal
const userRoute = require("./routes/users");
// const authRoute = require("./routes/auth");

dotenv.config();
//CONNECTING TO DATABASE
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
  },
  () => {
    console.log("connected to mongodb");
  }
);

//middleware
app.use(express.json()); //parse requests
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute); //address of restapi
// app.use("/api/auth", authRoute);

app.listen(8080, () => {
  console.log("backend sever is running");
});
