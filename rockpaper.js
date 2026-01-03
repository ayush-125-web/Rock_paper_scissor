let score = JSON.parse(localStorage.getItem('score'));

updateScore();


function result(yourMove, compMove) {
  document.querySelector('.result').innerHTML = `
        you picked <img src="${yourMove}-emoji.png"> and computer picked <img src="${compMove}-emoji.png">`;
}


function updateScore() {
  document.querySelector('.currScore').innerHTML =
    `Win : ${score.Win},lose : ${score.loss},Tie : ${score.Tie}`;
}



function resetScore() {
  score = { Win: 0, loss: 0, Tie: 0 };
  localStorage.setItem('score', JSON.stringify(score));
  updateScore();
  document.querySelector('.result').innerHTML = 'Your score has been reset. Let see who wins!!';
  document.querySelector('.complement').innerHTML = 'Ready to start again!!!'
}
function play(user) {
  let randomN = Math.random();
  let comp;

  if (randomN < 1 / 3) comp = "rock";
  else if (randomN < 2 / 3) comp = "paper";
  else comp = "scissors";

  if (user === comp) {
    score.Tie += 1;

    updateScore();
    result(user, comp);
    document.querySelector('.complement').innerHTML = 'Great Move Try another one';

  }
  else if (
    (user === "rock" && comp === "scissors") ||
    (user === "paper" && comp === "rock") ||
    (user === "scissors" && comp === "paper")
  ) {
    score.Win += 1;
    updateScore();
    result(user, comp);
    document.querySelector('.complement').innerHTML = 'You Win!! Congrates..';

  }
  else {
    score.loss += 1;
    updateScore();
    result(user, comp);
    document.querySelector('.complement').innerHTML = 'You Lost !! Better Luck Next Time';
  }

  localStorage.setItem('score', JSON.stringify(score))
}
