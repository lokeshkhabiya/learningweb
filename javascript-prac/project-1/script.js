'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '👏🏼 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.number').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    // when there is no input 
    if(!guess) {
        displayMessage('❌ No Number!');

    // when player wins
    } else if (guess === secretNumber) {
        displayMessage('👏🏼 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    // when guess is different
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage( guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score; 
    } else {
        displayMessage('🤦🏻‍♂️ You Lose Boomber!');
        document.querySelector('.score').textContent = 0;
    }
    }
    
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too High!'
    //     score--;
    //     document.querySelector('.score').textContent = score; 
    // } else {
    //     document.querySelector('.message').textContent = '🤦🏻‍♂️ You Lose Boomber!'
    //     document.querySelector('.score').textContent = 0;
    // }
    
    // // when guess is too low 
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too Low!'
    //     score--;
    //     document.querySelector('.score').textContent = score; 
    // } else {
    //     document.querySelector('.message').textContent = '🤦🏻‍♂️ You Lose Boomber!'
    //     document.querySelector('.score').textContent = 0;
    // }
    });
 
// reset logic 
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing... ');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
})
