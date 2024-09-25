const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./auth");
const todoRoutes = require("./todos");
const db = require("./db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
