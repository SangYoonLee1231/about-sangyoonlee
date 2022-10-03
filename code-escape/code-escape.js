const root = document.querySelector(".root");

function showMessage(div, message) {
  let index = 0;

  let typing = () => {
    console.log(message.length);
    if (message[index] === "\n") {
      div.innerHTML += "<br/>";
    } else {
      div.innerHTML += message[index];
    }
    index += 1;
  };
  if (index > message.length) {
    return;
  }

  let typingTimper = setInterval(typing, 50);
  setTimeout(() => {
    clearInterval(typingTimer);
  }, 50 * message.length);
}

function sleep(ms) {
  const loopTime = Date.now() + ms;
  while (Date.now() < loopTime) {}
}

// OPENING

const openingDiv = document.querySelector(".opening-div");

const openingMessage = `\n여느 때와 마찬가지로 나는 내 방에서 분명 잠이 들었을 텐데..
\n지금 나의 눈앞에 보이는 낯선 풍경은 어째서인가\n현실과는 다른 괴리감이 느껴진다.`;

console.log(openingDiv);

showMessage(openingDiv, openingMessage);

// CODE 1

const startDiv = document.querySelector(".start-div");

const startMessage = `
\n코드 이스케이프 미니 게임에 오신 여러분을 환영합니다.\n
주어진 수수께기를 풀고 올바른 코드(암호)를 입력해 이 곳을 탈출하세요.\n`;

//sleep(2000);

console.log(startDiv);

showMessage(startDiv, startMessage);

function showCode(message, codeNum) {
  const codeDiv = document.createElement("div");

  const code = `
    <div class="code${codeNum} fade-in">
      <p>${message}</p>
      <img src="code_img/code-${codeNum}.png" width="550"></img>
    </div>
  `;

  codeDiv.innerHTML = code;
  root.appendChild(codeDiv);
}

//showCode("", 1);
