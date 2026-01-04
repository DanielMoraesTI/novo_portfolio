const menuToggle = document.querySelector('.menu-toggle');
const lista = document.querySelector('.lista');

menuToggle.addEventListener('click', () => {
    const isOpen = lista.classList.toggle('active');

    menuToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.lista a').forEach(link => {
    link.addEventListener('click', () => {
        lista.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

function enviarForm(event) {
    event.preventDefault();
    alert("Obrigado pelo contacto! Responderei a sua dúvida sobre o tema escolhido em breve. Tenha um ótimo dia!");
};