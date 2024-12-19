const express = require("express");
const { getStock } = require("../controllers/stockController");
const router = express.Router();

router.get("/all", getStock);

module.exports = router;
