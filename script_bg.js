const body = document.querySelector('body');
const bouton = document.getElementById('bouton');
const colors = ['White', 'Red', 'Blue', 'Violet', 'Green', 'yellow'];

bouton.addEventListener('click', function () {
    const multicolor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[multicolor];
    document.querySelector('span').innerHTML = colors[multicolor];
    document.querySelector('span').style.color = colors[multicolor];
})