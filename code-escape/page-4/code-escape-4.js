const root = document.querySelector(".root");

// OPENING

const openingDiv = document.querySelector(".opening-div");

const openingMessage = `
[ CODE ESCAPE - 4장. 데자뷔 ]
\n\n
\n< 데자뷔 (Deja Vu) >
\n'최초의 경험임에도 불구하고
\n이미 본 적이 있거나 경험한 적이 있다는 이상한 느낌이나 환상'
\n\n문을 지나갈 때마다 반복되는 빛과 어둠.
\n그리고 자물쇠가 걸린 문과 새롭게 등장하는 문제들.
\n\n매우 낯설고 불편해야 할 이 상황이 왜 이렇게나 익숙하게 느껴질까.
\n\n마치 매일 밥 먹듯이 이 짓을 해온 것처럼..
\n\n\n`;

const timeInterval = 50;

let index = 0;

let typing = () => {
  if (openingMessage[index] === "\n") {
    openingDiv.innerHTML += "<br/>";
  } else {
    openingDiv.innerHTML += openingMessage[index];
  }

  index += 1;

  if (index > openingMessage.length) {
    return;
  }
};

let typingTimer = setInterval(typing, timeInterval);
setTimeout(() => {
  clearInterval(typingTimer);
}, timeInterval * openingMessage.length);

// CODE 4

const startDiv = document.querySelector(".start-div");

function showCode(message, codeNum) {
  const codeDiv = document.createElement("div");

  const code = `
    <div class="code${codeNum}">
      <p>${message}</p>
      <br/>
      <img src="../code_img/code-${codeNum}.png" width="550"></img>
      <form>
        <input type="text" placeholder="숫자 암호"></input>
        <button onclick="judgeAnswer(event)">확인</button>
      </form>
    </div>
  `;

  codeDiv.innerHTML = code;
  startDiv.className = "fade-in";
  startDiv.appendChild(codeDiv);
}

setTimeout(() => {
  showCode("", 4);
}, timeInterval * (openingMessage.length + 6));

// Right or Wrong

const judgeDiv = document.querySelector(".judge-div");

function judgeAnswer(event) {
  event.preventDefault();

  const targetValue = event.target.parentElement[0].value;

  if (targetValue === "8161028") {
    judgeDiv.innerHTML = `
    <br/><br/>
    <p>정답입니다!</p>
    <a href="../page-5/code-escape-5.html">문을 열고 들어간다. (클릭해주세요)</a>
    `;
  } else {
    judgeDiv.innerHTML = `
    <br/>
    <p>틀렸습니다. 다시 한 번 생각해보세요.</p>
    <p>힌트 : 사칙연산 만으로 해결할 수 있는 문제입니다. 수보다 숫자에 주목해보세요.</p>
    `;
  }
}
