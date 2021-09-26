const start_btn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const time_list = document.querySelector('#time-list');
const time_elem = document.querySelector('#time');
const board = document.querySelector('#board');
let time = 0;
let score = 0;
const colors = ['#08ff4a', '#fc05e4', '#ff0324', '#f7ff03', '#ff6f00', '#a6ff00', '#d503ff', '#00f7ff', '#00fa85', '#0022ff'];

function randomColor() {
    return Math.floor(Math.random() * colors.length)
}

start_btn.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up');
});

time_list.addEventListener('click', (e) => {
    if (e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
});

board.addEventListener('click', (e) => {
    if (e.target.classList.contains('circle')) {
        score++;
        e.target.remove();
        createRandomCircle();
    }
})

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
};

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}` 
        }
        setTime(current);
    }
};

function setTime(value) {
    time_elem.innerHTML = `00:${value}`;
};

function finishGame() {
    time_elem.parentNode.remove();
    board.innerHTML = `your score: <span class='primary'>${score}</span>`
};

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const { width, height } = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
    let color = colors[randomColor()];

    circle.classList.add('circle');
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = color;
    circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

    board.append(circle);
};

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};