$('section').hide();
var i = 0;
var txt = "w e l c o m e";
var welcome = document.getElementById('welcome');

//type animation
function type() {
    welcome.innerHTML += txt.charAt(i);
    i++;
    setTimeout(type, 150);
}
setTimeout(type, 600);

//title animation
function move() {
    $('#welcome').animate({
        top: '-100px'
    }, 600);
}
setTimeout(move, 2600);

//button animation
function show() {
    $('section').fadeIn(600);
}
setTimeout(show, 3200);

//button effects
const buttons = document.querySelectorAll('.button');
buttons.forEach(function (btn) {
    btn.addEventListener('mouseenter', function (e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(function(){
            ripples.remove()
        },800);
    });
});
