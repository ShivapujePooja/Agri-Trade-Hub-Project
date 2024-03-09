const express = require("express");
const mongoose = require("mongoose");
const port = 9000;
const url = "mongodb://127.0.0.1:27017/farmer_data";

mongoose.connect(url);

const con = mongoose.connection;

con.on("open", async () => {
  console.log("Connected to MongoDB.");
});
console.log(con);

con.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err);
});

const app = express();

app.use(express.json());
app.use("/products", require("./router/route_data"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
