

 
const bar = document.getElementById ('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click' , function() {
        nav.classList.add('open');
    })
};

if (close) {
    close.addEventListener('click',() => {
        nav.classList.remove( 'open');
    })
};
