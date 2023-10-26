const color = ["red", "blue", "yellow", "green"];

let btn = document.getElementById('btn');
let body = document.querySelector('body');
let colortext = document.getElementById('color');
let randomNumber;
btn.addEventListener('click', ()=>{
    randomNumber = getRandomNumber();
    body.style.background = color[randomNumber];
    colortext.textContent = color[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*color.length);
}