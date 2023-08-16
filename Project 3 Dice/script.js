'use strict';

//Elements selections
const score0Element = document.getElementById('score--0'); // Можно только по id
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

let currentScore;
let currentActive;
let scoreActive;

// Game initial conditions
function newGame() {
    score0Element.textContent = 0;
    score1Element.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;
    diceElement.classList.add('hidden');
    btnHold.classList.remove('hidden');
    btnRoll.classList.remove('hidden');
    currentScore = 0;
    currentActive = current0Element;
    scoreActive = score0Element;
    if (player1Element.classList.contains('player--active')) {
        player1Element.classList.remove('player--active');
        player0Element.classList.add('player--active');
        player1Element.classList.remove('player--winner');
    } else {
        player0Element.classList.remove('player--winner');
    }
}

// Function for change player
function playerChange() {
    if (currentActive === current0Element) {
        player0Element.classList.remove('player--active');
        player1Element.classList.add('player--active');
        currentActive = current1Element;
        scoreActive = score1Element;
    } else {
        player1Element.classList.remove('player--active');
        player0Element.classList.add('player--active');
        currentActive = current0Element;
        scoreActive = score0Element;
    }
}

// Function for winning
function playerWin() {
    if (player0Element.classList.contains('player--active')) {
        player0Element.classList.add('player--winner');
    } else {
        player1Element.classList.add('player--winner');
    }
    btnHold.classList.add('hidden');
    btnRoll.classList.add('hidden');
}

newGame();

// Roll dice
btnRoll.addEventListener('click', function () {
    // Generate random number
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber);

    // Display number on the dice
    diceElement.src = `dice${diceNumber}.png`;
    diceElement.classList.remove('hidden');

    // If the number is 1, switch to the next player. if not - add number to the current score
    if (diceNumber !== 1) {
        currentScore += diceNumber;
        console.log(currentScore);
        currentActive.textContent = currentScore;
    } else {
        currentScore = 0;
        currentActive.textContent = currentScore;
        playerChange();
        console.log(currentActive);
    }
});

// Hold score and change player
btnHold.addEventListener('click', function () {
    scoreActive.textContent = Number(scoreActive.textContent) + currentScore;
    currentScore = 0;
    currentActive.textContent = currentScore;
    // if score >= 100 player win, else change player
    if (scoreActive.textContent >= 100) {
        playerWin();
    } else {
        playerChange();
    }
});

// New Game
btnNew.addEventListener('click', function () {
    newGame();
});

// player0Element.classList.toggle('') если такой класс есть, то класс удаляется, если его нет, то он удаляется
