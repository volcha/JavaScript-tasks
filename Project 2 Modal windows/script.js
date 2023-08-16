'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.close-modal-window');
// мы получаем только первый элемент такого класса
// const btnShowModalWindow = document.querySelector('.show-modal-window');
const btnsShowModalWindow = document.querySelectorAll('.show-modal-window');
console.log(btnsShowModalWindow);

function CloseModalWindow() {
    modalWindow.classList.add('hidden');
    overlay.style.display = 'none';
}

// for (let i = 0; i < btnsShowModalWindow.length; ++i) {
//     console.log(btnsShowModalWindow[i].textContent);
// }

for (let i = 0; i < btnsShowModalWindow.length; ++i) {
    btnsShowModalWindow[i].addEventListener('click', function () {
        modalWindow.classList.remove('hidden');
        // overlay.classList.remove('hidden');
        overlay.style.display = 'block';
    });
}

btnCloseModalWindow.addEventListener('click', CloseModalWindow); // addHiddenClass без скобок, потому что мы не вызываем функцию

overlay.addEventListener('click', CloseModalWindow);

// Срабатывает на нажатие клавиатуры
document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
        CloseModalWindow();
    }
});
