const color = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

let btn = document.getElementById('btn');
let body = document.querySelector('body');
let colortext = document.getElementById('color');
let randomNumber;
btn.addEventListener('click', ()=>{
    hexColor = '#';
    for(let i = 0; i<6; i++){
        hexColor += color[getRandomNumber()];
    }
    body.style.background = hexColor;
    colortext.textContent = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random()*color.length);
}