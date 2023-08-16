'use strict';

function changeGuessMessage(message) {
    document.querySelector('.guess-message').textContent = message;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.question').textContent = secretNumber;
let score = 20;
let bestScore = 0;

// Кнопка 'Проверить'
document.querySelector('.check').addEventListener('click', function () {
    const inputNumber = Number(document.querySelector('.number-input').value); // string
    console.log(inputNumber, typeof inputNumber);
    // Не введено число либо оно не в нужном диапазоне
    if (!inputNumber || inputNumber < 0 || inputNumber > 20) {
        changeGuessMessage('Введите число от 1 до 20');
        // Игрок победил
    } else if (inputNumber === secretNumber) {
        changeGuessMessage('Угадано!');
        if (score > bestScore) {
            bestScore = score;
            document.querySelector('.highscore').textContent = bestScore;
        }
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.question').textContent = inputNumber;
    } else if (score > 1) {
        changeGuessMessage(
            inputNumber > secretNumber ? 'Слишком много' : 'Слишком мало'
        );
        --score;
        document.querySelector('.score').textContent = score;
    } else {
        changeGuessMessage('Вы проиграли');
        --score;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = 'red';
    }
});

// Кнопка 'Сначала'
document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = '#000';
    document.querySelector('.question').textContent = '???';
    document.querySelector('.number-input').value = '';
    changeGuessMessage('Начни угадывать');
    score = 20;
    document.querySelector('.score').textContent = '20';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
});
