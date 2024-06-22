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

document.addEventListener("DOMContentLoaded", function() {
    // 스토리 프로필 데이터 배열
    const storyProfiles = [
        { image: "./assets/profile/profile1.png", username: "Instagramer1" },
        { image: "./assets/profile/profile2.png", username: "Instagramer2" },
        { image: "./assets/profile/profile3.png", username: "Instagramer3" },
        { image: "./assets/profile/profile4.png", username: "Instagramer4" },
        { image: "./assets/profile/profile5.png", username: "Instagramer5" },
        { image: "./assets/profile/profile6.png", username: "Instagramer6" },
        { image: "./assets/profile/profile7.png", username: "Instagramer7" },
        { image: "./assets/profile/profile8.png", username: "Instagramer8" },
        { image: "./assets/profile/profile9.png", username: "Instagramer9" },
        { image: "./assets/profile/profile10.png", username: "Instagramer10" },
        { image: "./assets/profile/profile11.png", username: "Instagramer11" },
        { image: "./assets/profile/default.png", username: "Instagramer" }
    ];

    const storyContainer = document.querySelector(".main--story");

    // 스토리 프로필 요소를 생성하고 추가하는 함수
    function renderStoryProfiles() {
        storyProfiles.forEach(profile => {
            const profileElement = document.createElement("div");
            profileElement.classList.add("main--story--profile");

            const imgElement = document.createElement("img");
            imgElement.src = profile.image;
            imgElement.alt = `${profile.username}'s profile picture`;

            const spanElement = document.createElement("span");
            spanElement.textContent = profile.username;

            profileElement.appendChild(imgElement);
            profileElement.appendChild(spanElement);
            storyContainer.appendChild(profileElement);
        });
    }

    // 초기 스토리 프로필 렌더링
    renderStoryProfiles();
});
