const btnMobile = document.getElementById('btn-mobile');


function toggleMenu(){
    const nav = document.getElementById('nav');
    const corpo = document.getElementById('body');
    const textoLogo = document.getElementById('texto_logo');
    const menu = document.getElementById('header');

    nav.classList.toggle('active');
    corpo.classList.toggle('active-corpo');
    textoLogo.classList.toggle('active-texto');
    menu.classList.toggle('active-fundo');
}

btnMobile.addEventListener('click', toggleMenu);