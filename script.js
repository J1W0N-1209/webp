const transform = document.querySelector(".side--me--transform");
const nickname = document.querySelector(".side--me--nickname");

transform.addEventListener("click",() => {
    let nicknameInput = prompt("Input Instagram ID")
    if (!nickname) {
        alert("값이 입력되지 않았습니다")
    } else {
        nickname.textContent = nicknameInput
    }
});