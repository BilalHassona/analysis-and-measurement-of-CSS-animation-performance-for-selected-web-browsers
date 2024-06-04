import './style.css';

const appWrapper = document.getElementById('app-wrapper');

const anim6Thresh1 = 100;
const anim6Thresh2 = 500;
const anim6Thresh3 = 1000;
const anim6Thresh4 = 2000;
const anim6Thresh5 = 5000;

for (let i = 0; i < anim6Thresh1; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    appWrapper.appendChild(div);
}

appWrapper.classList.add('animation');