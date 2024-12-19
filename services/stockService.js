const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

async function getStockData(symbol) {
  try {
    const response = await axios.get(`https://www.alphavantage.co/query`, {
      params: {
        function: "TIME_SERIES_DAILY",
        symbol: symbol,
        apikey: API_KEY,
      },
    });

    const timeSeries = response.data["Time Series (Daily)"];
    if (!timeSeries) {
      console.error("Error fetching data:", response.data);
      return;
    }

    // Get the latest stock data
    const latestDate = Object.keys(timeSeries)[0];
    const latestData = timeSeries[latestDate];

    return {
      date: latestDate,
      data: latestData,
    };
  } catch (error) {
    console.error("Error fetching stock data:", error.message);
  }
}

module.exports = { getStockData };
