const root = document.querySelector(".root");

let template = `
  <div class="title">
    <h1>RANDOM DICE</h1>
    <p>당신의 운을 시험해보세요!</p>
    <br/>
    <p>주사위를 10번 던져 50을 넘기면 오늘은 운수 좋은 날</p>
  </div>
  <div class="content">
    ${
      diceCount <= 6 ? (
        <button onClick="rollDice()">굴려굴려 주사위</button>
      ) : (
        <button></button>
      )
    }
  </div>
`;

root.innerHTML = template;

let diceEye = 0;
let diceEyeSum = 0;
let diceCount = 0;

function rollDice() {
  console.log("Roll The Dice");
  diceEye = Math.floor(Math.random() * 6 + 1);
  diceEyeSum += diceEye;
  diceCount += 1;
}
