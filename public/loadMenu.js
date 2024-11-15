// loadMenu.js
document.addEventListener("DOMContentLoaded", () => {
    fetch("menu.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("네트워크 응답에 문제가 발생했습니다.");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;
        })
        .catch(error => {
            console.error("메뉴 로드 중 오류 발생:", error);
        });
});
