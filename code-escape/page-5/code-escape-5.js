const root = document.querySelector(".root");

// OPENING

const openingDiv = document.querySelector(".opening-div");

const openingMessage = `
[ CODE ESCAPE - 5장. 가까워진 진실 ]
\n\n
\n
\n
\n\n
\n
\n\n
\n
\n
\n\n
\n\n\n`;

const timeInterval = 80;

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

// CODE 3

const startDiv = document.querySelector(".start-div");

function showCode(message, codeNum) {
  const codeDiv = document.createElement("div");

  const code = `
    <div class="code${codeNum}">
      <p>${message}</p>
      <br/>
      <img src="../code_img/code-${codeNum}.png" width="550"></img>
      <form>
        <input type="text" placeholder="3자리 암호" maxlength="6"></input>
        <button onclick="judgeAnswer(event)">확인</button>
      </form>
    </div>
  `;

  codeDiv.innerHTML = code;
  startDiv.className = "fade-in";
  startDiv.appendChild(codeDiv);
}

setTimeout(() => {
  showCode("", 5);
}, timeInterval * (openingMessage.length + 6));

// Right or Wrong

const judgeDiv = document.querySelector(".judge-div");

function judgeAnswer(event) {
  event.preventDefault();

  const targetValue = event.target.parentElement[0].value;

  if (targetValue.toUpperCase() === "FINE") {
    judgeDiv.innerHTML = `
    <br/><br/>
    <p>정답입니다!</p>
    <a href="../page-6/code-escape-6.html">문을 열고 들어간다. (클릭해주세요)</a>
    `;
  } else {
    judgeDiv.innerHTML = `
    <br/>
    <p>틀렸습니다. 다시 한 번 생각해보세요.</p>
    <p>힌트 : 핵심 키워드를 다른 나라의 언어로 바꿔보시길 바랍니다.</p>
    `;
  }
}
