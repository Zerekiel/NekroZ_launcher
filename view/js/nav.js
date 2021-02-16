const nav = document.getElementsByClassName('button__item');
var navPosition = 0;

const home = document.getElementById('home');
const news = document.getElementById('news');
const _event = document.getElementById('event');
const options = document.getElementById('options');

var nodeConsole = require('console');
var myConsole = new nodeConsole.Console(process.stdout, process.stderr);

window.onload = () => {
    if ((navPosition = localStorage.getItem("navPosition")) == undefined) {
        navPosition = 0;
    }
    myConsole.log(navPosition);
    nav[navPosition].classList.add('button--visible');
}

home.addEventListener('click', () => {
    nav[navPosition].classList.remove('button--visible');
    localStorage.setItem("navPosition", 0);
});

news.addEventListener('click', () => {
    nav[navPosition].classList.remove('button--visible');
    localStorage.setItem("navPosition", 1);
});

_event.addEventListener('click', () => {
    nav[navPosition].classList.remove('button--visible');
    localStorage.setItem("navPosition", 2);
});

options.addEventListener('click', () => {
    nav[navPosition].classList.remove('button--visible');
    localStorage.setItem("navPosition", 3);
});
