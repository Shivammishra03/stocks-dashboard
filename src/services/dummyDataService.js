// src/services/dummyDataService.js

export function generateDummyStockData(startDate, endDate, numStocks = 5) {
    const data = [];
    const currentDate = new Date(startDate);
    const endDateObj = new Date(endDate);
  
    while (currentDate <= endDateObj) {
      const prices = Array.from({ length: numStocks }, () => Math.floor(Math.random() * 1000) + 100); // Random stock prices
      data.push({
        date: currentDate.toISOString().split('T')[0],
        prices,
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return data;
  }
  
  export function getTopNStocks(data, n) {
    return data.map((day) => ({
      date: day.date,
      prices: day.prices
        .slice()
        .sort((a, b) => b - a)
        .slice(0, n),
    }));
  }
  