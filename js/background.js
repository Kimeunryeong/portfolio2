const pTag1 = document.querySelector(".first-parallel");
const pTag2 = document.querySelector(".second-parallel");

const textArr1 = "LEARN TO HTML/CSS/JavaScript".split(" ");
const textArr2 = "EUNRYEONG".split(" ");

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
