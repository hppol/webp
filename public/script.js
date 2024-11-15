// script.js

// 페이지가 로드되면 삼성전자 주식 데이터를 가져옵니다.
document.addEventListener("DOMContentLoaded", () => {
    fetchStockData("005930.KS");
});

// 주식 데이터 가져오는 함수
async function fetchStockData(symbol) {
    try {
        // 서버에서 주식 데이터 요청
        const response = await fetch(`/api/stock/${symbol}`);
        const data = await response.json();

        // 받은 데이터로 가격을 업데이트
        if (data && data.price) {
            const priceElement = document.getElementById("samsung-price");
            priceElement.textContent = `₩${data.price.toLocaleString()}`;  // 가격을 ₩단위로 표시
        } else {
            console.error("주식 가격 정보를 불러올 수 없습니다.");
        }
    } catch (error) {
        console.error("주식 데이터 조회 중 오류 발생:", error);
    }
}
