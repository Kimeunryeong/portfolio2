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



// 배경
const pTag1 = document.querySelector(".first-parallel");
const pTag2 = document.querySelector(".second-parallel");

const textArr1 = "LEARN TO HTML/CSS/JavaScript".split(" ");
const textArr2 = "Eunryeong's Web Portfolio".split(" ");

function initTexts(element, textArray) {
  const quadrupledTextArray = textArray.concat(textArray, textArray, textArray); // textArray를 네 번 반복하여 확장
  for (let i = 0; i < quadrupledTextArray.length; i++) {
    element.innerText += `${quadrupledTextArray[i]}\u00a0\u00a0\u00a0\u00a0`;
  }
}
initTexts(pTag1, textArr1);
initTexts(pTag2, textArr2);

let count1 = 0;
let count2 = 0;

function marqueeText(count, element, direction) {
  const maxWidth = element.scrollWidth / 2;
  count = (count + 1) % (maxWidth + 1); // count 값을 증가시키고 maxWidth를 초과하면 0으로 초기화
  element.style.transform = `translateX(${count * direction}px)`;
  return count;
}

function animate() {
  count1 = marqueeText(count1, pTag1, -1);
  count2 = marqueeText(count2, pTag2, 1);

  window.requestAnimationFrame(animate);
}
animate();
