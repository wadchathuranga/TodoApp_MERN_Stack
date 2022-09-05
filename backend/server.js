const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./src/v1/modules/todoapp/db");
const dotenv = require("dotenv");

// swagger config
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./src/v1/modules/todoapp/swaggerDocument.yaml");

// .env config
dotenv.config();

// db connection
connectDB();

// json body parser
app.use(express.json());

// to access backed server from frontend
app.use(cors());

// swagger declaration
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// initial api for check server running or not
app.get("/", (req, res) => {
  res.status(200).send("API is running...");
});

// import todo routes
const todoRoutes = require("./src/v1/modules/todoapp/routes/todoRoutes");
app.use("/api/todos", todoRoutes);

// server port define
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
