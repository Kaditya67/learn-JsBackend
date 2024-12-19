const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); 

const userRoutes = require("./routes/userRoutes");
const stockRoutes = require("./routes/stockRoutes");
app.use("/api", userRoutes);
app.use("/api/stocks", stockRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
