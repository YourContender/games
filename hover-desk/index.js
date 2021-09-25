const board = document.querySelector('#board');

const colors = ['#8a3232', '#1467c7', '#eb13bc', '#ebbc13', '#13eb91', '#16eb13', '#3c4d32', '#ebbc13', '#66eb13', '#eb2113'];
const SQUARE_NUMBER = 308;

for (let i = 0; i < SQUARE_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    });

    square.addEventListener('mouseleave', () => {
        removeColor(square);
        square.style.background = 'none'
    });
    
    board.append(square);
}

function setColor(elem) {
    const color = getRandomColor();
    
    elem.style.backgroundColor = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(elem) {
    elem.style.backgroundColor = '#2a4a5a'
    elem.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index]
}