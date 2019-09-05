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
    modalOverlay.classList.add('modal-show');
    if (storage) {
        userName.value = storage;
    } else  {
        userName.focus();
    }
});

closeLetter.addEventListener('click', (e) => {
    e.preventDefault();
    letter.classList.remove('modal-show');
    modalOverlay.classList.remove('modal-show');
});


modalOverlay.addEventListener('click', (e) => {
    e.preventDefault();
    letter.classList.remove('modal-show');
    modalOverlay.classList.remove('modal-show');
});



form.addEventListener('submit', (e) => {
    if (!userName.value || !userEmail.value || !userLetter.value) {
        e.preventDefault();
        alert('Введите данные');
    } else {
        if (isStorageSupport) {
            localStorage.setItem("userName", userName.value);
        }
    }
});