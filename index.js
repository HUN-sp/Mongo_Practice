const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();
app.use(express.json());



mongoose
.connect(process.env.MONGO_URL)
.then(() => {
  console.log("Db Connected");
})
.catch((err) => {
  console.log("Db connection Failed", err);
});

const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')

app.use("/products", productRoutes);
app.use("/users", userRoutes);



app.listen(8086, () => {
  console.log("Server sarted at port 8086");
});