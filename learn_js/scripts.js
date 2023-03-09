let btn = document.querySelector('#colorswitcher');
const background = document.querySelector('#container');
const text = document.querySelectorAll('.item');
let numclicks = 0;

btn.addEventListener('click', () => {
    if (numclicks % 2 == 0) {
        text.forEach(element => {
            element.style.color = "#E6C267";
        });
        background.style.backgroundColor = "#B96BF5";
    } else {
        text.forEach(element => {
            element.style.color = "#B96BF5";
        });
        background.style.backgroundColor = "#E6C267";
    }
    console.log("button pressed");
    numclicks++;
});