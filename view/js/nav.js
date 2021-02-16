const nav = document.getElementsByClassName('button__item');
var navPosition = 0;

const home = document.getElementById('home');
const news = document.getElementById('news');
const _event = document.getElementById('event');
const options = document.getElementById('options');

var nodeConsole = require('console');
var myConsole = new nodeConsole.Console(process.stdout, process.stderr);

window.onload = () => {
    if ((navPosition = localStorage.getItem("navPosition")) == null) {
        navPosition = 0;
    }
    nav[navPosition].classList.add('button--visible');
}

home.addEventListener('click', () => {
    //nav[oldPosition].classList.remove('button--visible');
    localStorage.setItem("navPosition", 0);
    nav[globalData.navPosition].classList.add('button--visible');
});

news.addEventListener('click', () => {
    //nav[oldPosition].classList.remove('button--visible');
    localStorage.setItem("navPosition", 1);
    nav[navPosition].classList.add('button--visible');
});

_event.addEventListener('click', () => {
    //nav[oldPosition].classList.remove('button--visible');
    localStorage.setItem("navPosition", 2);
    nav[navPosition].classList.add('button--visible');
});

options.addEventListener('click', () => {
    //nav[oldPosition].classList.remove('button--visible');
    localStorage.setItem("navPosition", 3);
    nav[navPosition].classList.add('button--visible');
});
