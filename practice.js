const yahooFinance = require("yahoo-finance2").default;

async function getSamsungStockInfo() {
  try {
    // 주식 데이터 가져오기
    const quote = await yahooFinance.quote("005930.KS");

    // 필요한 데이터만 추출
    const firmName = quote.longName; // 회사명
    const currentPrice = quote.regularMarketPrice; // 현재가
    const previousClose = quote.regularMarketPreviousClose; // 전일 종가
    const priceChange = currentPrice - previousClose; // 가격 변화
    const priceChangePercent = ((priceChange / previousClose) * 100).toFixed(2); // 변화율 (%)

    // 출력
    console.log(`회사명: ${firmName}`);
    console.log(`현재가: ${currentPrice}원`);
    console.log(`전일 종가: ${previousClose}원`);
    console.log(`변화: ${priceChange > 0 ? "+" : ""}${priceChange}원 (${priceChangePercent}%)`);
  } catch (error) {
    console.error("삼성전자 데이터 조회 중 오류 발생:", error);
  }
}

getSamsungStockInfo();
