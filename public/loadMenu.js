document.addEventListener("DOMContentLoaded", () => {
  // menu.html 파일을 로드하여 메뉴를 삽입
  fetch("menu.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("네트워크 응답에 문제가 발생했습니다.");
      }
      return response.text();
    })
    .then((data) => {
      // menu-container에 메뉴 HTML 삽입
      document.getElementById("menu-container").innerHTML = data;

      // URL을 기준으로 활성화 상태를 적용
      const currentPath = window.location.pathname;
      const navLinks = document.querySelectorAll(".nav-link");

      navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPath) {
          link.classList.add("active"); // 현재 페이지 링크 활성화
        } else {
          link.classList.remove("active"); // 다른 링크는 비활성화
        }
      });
    })
    .catch((error) => {
      console.error("메뉴 로드 중 오류 발생:", error);
    });
});
