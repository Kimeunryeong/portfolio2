const btn = document.querySelector(".btn-menu");
const nav = document.querySelector(".main-nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("open-menu");
  if (btn.innerHTML === "Menu") {
    btn.innerHTML = "Close";
  } else {
    btn.innerHTML = "Menu";
  }
});

// 타이핑 효과
let target = document.querySelector("#main-effect");

function randomString() {
  let stringArr = [
    "Learn to HTML",
    "Learn to CSS",
    "Learn to Javascript",
    "Learn to jQuery",
    "Learn to PHP",
    "Learn to React",
  ];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");

  return selectStringArr;
}

// 타이핑 리셋
function resetTyping() {
  target.textContent = "";
  dynamic(randomString());
}
// 한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}
dynamic(randomString());

// 깜빡임 효과
function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);