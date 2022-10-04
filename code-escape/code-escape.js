const root = document.querySelector(".root");

// OPENING

const openingDiv = document.querySelector(".opening-div");

const openingMessage = `
[ CODE ESCAPE - 1장. 모든 것의 시작 ]
\n\n.
\n..
\n.. ...?
\n\n여느 때와 마찬가지로 나는 내 방에서 분명 잠이 들었을 텐데..
\n지금 나의 눈앞에 보이는 낯선 풍경은 어째서인지
\n현실과는 다른 괴리감이 느껴진다.\n\n
이 곳은 어디인가.\n
상황을 파악하기 위해 주위를 둘러보니 저 너머에 문 하나가 보인다.\n
하지만 문은 자물쇠로 단단히 잠겨있어 열리지 않았다.\n\n
혹시 이건 방탈출 게임인가..? 그럼 뭔가 문을 열 단서를 찾아야 하는 건가?\n
의문과 두려움을 가득 안은 채 나는 내 주위를 둘러보기 시작했다.\n\n
다행이도 문을 열 만한 단서를 찾는 데에는 그리 오랜 시간이 걸리지 않았다.\n\n\n`;

const timeInterval = 90;

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

// CODE 1

const startDiv = document.querySelector(".start-div");

function showCode(message, codeNum) {
  const codeDiv = document.createElement("div");

  const code = `
    <div class="code${codeNum}">
      <p>${message}</p>
      <img src="code_img/code-${codeNum}.png" width="550"></img>
      <form>
        <input type="text" placeholder="숫자 3자리 암호" maxlength="3"></input>
        <button onclick="judgeAnswer(event)">확인</button>
      </form>
    </div>
  `;

  codeDiv.innerHTML = code;
  startDiv.className = "fade-in";
  startDiv.appendChild(codeDiv);
}

setTimeout(() => {
  showCode("", 1);
}, timeInterval * (openingMessage.length + 6));

// Right or Wrong

const judgeDiv = document.querySelector(".judge-div");

function judgeAnswer(event) {
  event.preventDefault();

  const targetValue = event.target.parentElement[0].value;

  if (targetValue === "257") {
    judgeDiv.innerHTML = `
    <br/>
    <p>정답입니다!</p>
    <a href="code-escape-2.html">문을 열고 들어간다.</a>
    `;
  } else {
    judgeDiv.innerHTML = `
    <br/>
    <p>틀렸습니다. 다시 한 번 생각해보세요.</p>
    <p>힌트 : 그림의 거울은 빛을 직각으로 반사합니다.</p>
    `;
  }
}
