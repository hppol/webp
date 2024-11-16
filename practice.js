// app.js
const yahooFinance = require("yahoo-finance2").default;

async function getSamsungData() {
  try {
    const quote = await yahooFinance.quote("005930.KS");
    console.log("삼성전자 주식 정보:", quote);
  } catch (error) {
    console.error("삼성전자 데이터 조회 중 오류 발생:", error);
  }
}

getSamsungData();
