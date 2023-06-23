const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const MovieRoute = require("./routes/movieRoutes")
mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  });

// middleware------------------>
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(MovieRoute);
 

app.listen(process.env.PORT || 3001);