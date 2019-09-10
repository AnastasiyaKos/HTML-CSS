let openLetter = document.querySelector('.button-letter');
let letter = document.querySelector('.modal-login');
let modalOverlay = document.querySelector('.modal-overlay');
let closeLetter = document.querySelector('.modal-close');
let form = letter.querySelector('form');

let userName = letter.querySelector('[name=name]');
let userEmail = letter.querySelector('[name=email]');
let userLetter = letter.querySelector('.letter-icon-user');

let isStorageSupport = true;
let storage = '';

try {
    storage = localStorage.getItem('userName');
} catch (err) {
    isStorageSupport = false;
}

openLetter.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(letter);
    letter.classList.add('modal-show');
    modalOverlay.classList.add('modal-overlay-show');
    if (storage) {
        userName.value = storage;
        userEmail.focus();
    } else {
        userName.focus();
    }
});

closeLetter.addEventListener('click', (e) => {
    e.preventDefault();
    letter.classList.remove('modal-show');
    letter.classList.remove('modal-error');
    modalOverlay.classList.remove('modal-overlay-show');
});


modalOverlay.addEventListener('click', (e) => {
    e.preventDefault();
    letter.classList.remove('modal-show');
    modalOverlay.classList.remove('modal-overlay-show');
});

form.addEventListener('submit', (e) => {
    if (!userName.value || !userEmail.value || !userLetter.value) {
         // alert('Введите данные');
        letter.classList.add('modal-error');
    } else {
        if (isStorageSupport) {
            localStorage.setItem("userName", userName.value);
        }
    }
});

window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
        if (letter.classList.contains('modal-show')) {
            evt.preventDefault();
            letter.classList.remove('modal-show');
            modalOverlay.classList.remove('modal-overlay-show');
        }
    }
});