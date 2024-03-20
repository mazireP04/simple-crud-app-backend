
const dotenv = require("dotenv");

const express = require("express");
const mongoose = require("mongoose");

// import model
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
dotenv.config();

const dbUrl = process.env.DB_URL;

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Connected!"); 

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => console.log("Connection failed!"));

  