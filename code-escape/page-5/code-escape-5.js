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

// CODE 5

const startDiv = document.querySelector(".start-div");

function showCode(message, codeNum) {
  const codeDiv = document.createElement("div");

  const code = `
    <div class="code${codeNum}">
      <p>${message}</p>
      <br/>
      <img src="../code_img/code-${codeNum}.png" width="550"></img>
      <form>
        <input type="text" placeholder="4자리 암호" maxlength="4"></input>
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
    <p>모두 클리어하셨습니다. 플레이 해주셔서 감사드립니다!</p>
    `;
  } else {
    judgeDiv.innerHTML = `
    <br/>
    <p>틀렸습니다. 다시 한 번 생각해보세요.</p>
    <p>힌트 : 네모 칸을 채우셔야 합니다. [가],[나],[다] 세 후보를 각각 세 글자로 바꿔보세요.</p>
    `;
  }
}
