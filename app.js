const hamburger = document.querySelector(".hamburger__button")
const menu = document.querySelector(".menu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('shown')
    menu.classList.toggle('show');
})

var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 3000);