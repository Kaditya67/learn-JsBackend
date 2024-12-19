const { getStockData } = require("../services/stockService");

exports.getStock = async (req, res) => {
  const symbols = ["AAPL", "GOOGL"];

  try {
    const stockDataArray = await Promise.all(symbols.map(symbol => getStockData(symbol)));

    const stockData = stockDataArray.reduce((acc, data, index) => {
      acc[symbols[index]] = data;
      return acc;
    }, {});

    res.status(200).json(stockData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
