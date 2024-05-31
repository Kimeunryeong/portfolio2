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

// 기본 메일폼 제출 방지하기
// document.addEventListener('DOMContentLoaded', function() {
//   // 버튼 요소 가져오기
//   var sendButton = document.querySelector('#btn-send');

//   // 버튼에 클릭 이벤트 리스너 추가
//   sendButton.addEventListener('click', sendBtn);
// });

// function sendBtn() {
//   // 함수 내용
//   var name = document.querySelector('[name="name"]').value;
//   var email = document.querySelector('[name="email"]').value;
//   var message = document.querySelector('[name="message"]').value;
  
//   console.log(name, email, message);
//   if (name==='' || email==='' || message==='') {
//    document.querySelector(".modal-body").innerHTML = "내용을 전부 입력해주세요!";
  
//   }
// }
