const root = document.querySelector(".root");

// OPENING

const openingDiv = document.querySelector(".opening-div");

const openingMessage = `
[ CODE ESCAPE - 2장. 커지는 의문 ]
\n\n.
\n..
\n.. ...끼..익
\n\n자물쇠를 풀고 잠긴 문을 조심히 여니
\n감당치 못할 만큼의 강렬한 빛이 동공을 통해 내 눈으로 들어왔다.  
\n문 밖은 방금 내가 있던 곳과는 전혀 다른 공간이었다.\n\n
여기는 정말 어떤 곳일까.\n
다시 한 번 주위를 둘러보니 저 너머에 또 하나의 문이 보였다.\n
역시나 문은 자물쇠로 단단히 잠겨있어 열리지 않았다.\n\n
그리고..\n
또 하나의 새로운 문제가 나를 기다리고 있었다.\n\n\n`;

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

// CODE 2

const startDiv = document.querySelector(".start-div");

function showCode(message, codeNum) {
  const codeDiv = document.createElement("div");

  const code = `
    <div class="code${codeNum}">
      <p>${message}</p>
      <br/>
      <img src="../code_img/code-${codeNum}.png" width="550"></img>
      <form>
        <input type="text" placeholder="영어 6자리 암호" maxlength="6"></input>
        <button onclick="judgeAnswer(event)">확인</button>
      </form>
    </div>
  `;

  codeDiv.innerHTML = code;
  startDiv.className = "fade-in";
  startDiv.appendChild(codeDiv);
}

setTimeout(() => {
  showCode("", 2);
}, timeInterval * (openingMessage.length + 6));

// Right or Wrong

const judgeDiv = document.querySelector(".judge-div");

function judgeAnswer(event) {
  event.preventDefault();

  const targetValue = event.target.parentElement[0].value;

  if (targetValue.toUpperCase() === "ANSWER") {
    judgeDiv.innerHTML = `
    <br/><br/>
    <p>정답입니다!</p>
    <a href="../page-3/code-escape-3.html">문을 열고 들어간다. (클릭해주세요)</a>
    `;
  } else {
    judgeDiv.innerHTML = `
    <br/>
    <p>틀렸습니다. 다시 한 번 생각해보세요.</p>
    <p>힌트 : → = E 입니다.</p>
    `;
  }
}
