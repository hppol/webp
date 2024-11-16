// app.js
const express = require("express");
const yahooFinance = require("yahoo-finance2").default;
const app = express();
const port = 3000;

// 정적 파일 제공 (HTML, CSS, JavaScript)
app.use(express.static("public"));

// 특정 주식의 데이터를 가져오는 API 엔드포인트
app.get("/api/stock/:symbol", async (req, res) => {
  const symbol = req.params.symbol;

  try {
    const quote = await yahooFinance.quote(symbol);
    // 주식 정보에서 현재 주가만 추출하여 반환
    const stockData = {
      price: quote.regularMarketPrice,
      symbol: quote.symbol,
    };
    res.json(stockData);
  } catch (error) {
    console.error("주식 데이터 조회 중 오류 발생:", error);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
