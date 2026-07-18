// ==========================================================
// PROJET 4.1 — Interactions de la navigation
// ==========================================================

const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const nav = document.querySelector('nav');
const darkToggle = document.getElementById('dark-toggle');



burger.addEventListener('click', () => {
    const estOuvert = menu.classList.toggle('ouvert');
    burger.setAttribute('aria-expanded', estOuvert);
    burger.textContent = estOuvert ? '✕' : '☰';
});



menu.querySelectorAll('a').forEach((lien) => {
    lien.addEventListener('click', () => {
        menu.classList.remove('ouvert');
        burger.setAttribute('aria-expanded', 'false');
        burger.textContent = '☰';
    });
});



window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});



darkToggle.addEventListener('click', () => {
    const estSombre = document.body.classList.toggle('mode-sombre');
    darkToggle.textContent = estSombre ? '🤍' : '🖤';
    darkToggle.setAttribute(
        'aria-label',
        estSombre ? 'Désactiver le mode sombre' : 'Activer le mode sombre'
    );
});