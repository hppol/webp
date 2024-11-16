// 페이지가 로드되면 주식 데이터를 가져옵니다.
document.addEventListener("DOMContentLoaded", () => {
  // 종목 심볼과 대응되는 HTML ID를 매핑
  const stockSymbols = {
    "005930.KS": "samsung-price", // 삼성전자
    AAPL: "apple-price", // 애플
    NVDA: "nvidia-price", // 엔비디아
    TSLA: "tesla-price", // 테슬라
    AMZN: "amazon-price", // 아마존
  };

  // 모든 종목의 데이터를 가져옴
  Object.entries(stockSymbols).forEach(([symbol, elementId]) => {
    fetchStockData(symbol, elementId);
  });
});

// 주식 데이터 가져오는 함수
async function fetchStockData(symbol, elementId) {
  try {
    // 서버에서 주식 데이터 요청
    const response = await fetch(`/api/stock/${symbol}`);
    const data = await response.json();

    // 받은 데이터로 가격을 업데이트
    if (data && data.price) {
      const priceElement = document.getElementById(elementId);
      priceElement.textContent = `₩${data.price.toLocaleString()}`; // 가격을 ₩단위로 표시
    } else {
      console.error(`주식 가격 정보를 불러올 수 없습니다. (${symbol})`);
    }
  } catch (error) {
    console.error(`주식 데이터 조회 중 오류 발생 (${symbol}):`, error);
  }
}
