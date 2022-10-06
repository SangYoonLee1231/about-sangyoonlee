const root = document.querySelector(".root");

// OPENING

const openingDiv = document.querySelector(".opening-div");

const openingMessage = `
[ CODE ESCAPE - 5장. 가까워진 진실 ]
\n\n < 블랙어웃 (Blackout) >
\n'눈 앞이 캄캄해지는 것을 뜻하는 영어단어.
\n정신 잃음, 등화관제, 정전, 암전, 기절, 필름 끊김 등 여러가지 상황에 쓰인다.'
\n\n..기억이 나지 않는다.
\n내 방에서 잠이 들었던 것 외에는 아무 것도 기억이 나지 않는다.
\n\n혼란스럽다.
\n내 이름조차 기억이 나지 않는다.
\n나는 누구이며 왜 이 곳에 있는 거지..?
\n\n우선 내 눈 앞에 있는 또 하나의 문부터 열고 나서 더 생각헤보는 것이 좋겠다.\n\n\n`;

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
