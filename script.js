'use strict';

// let a = document.querySelector('.message').textContent;
// console.log(a);

// document.querySelector('.number').textContent = 18;
// document.querySelector('.guess').value = 15;

let secret_Number = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', e => {
  let guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'no number';

    // When player wins
  } else if (guess === secret_Number) {
    document.querySelector('.number').textContent = secret_Number;
    document.querySelector('.message').textContent = 'Correct Number 👍';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // document.body.style.backgroundColor = 'rgb(96, 179, 71)';
    document.querySelector('body').style.backgroundColor = 'rgb(96, 179, 71)';
    document.querySelector('.number').style.width = '30rem';

    // When guess is too high
  } else if (guess > secret_Number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Height 😁';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Your lost 😢';
      document.querySelector('.score').textContent = 0;
    }
    // When guess is too low
  } else if (guess < secret_Number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low 😢';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Your lost 😢';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// document.querySelector('.again').addEventListener('click', e => {
//   window.location.reload();
// });
document.querySelector('.again').addEventListener('click', e => {
  secret_Number = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  let guess = Number((document.querySelector('.guess').value = ''));
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
