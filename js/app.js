function enviarForm(event) {
    event.preventDefault();
    alert("Obrigado pelo contacto! Responderei a sua dúvida sobre o tema escolhido em breve. Tenha um ótimo dia!");
};

const menuToggle = document.querySelector('.menu-toggle');
const lista = document.querySelector('.lista');

menuToggle.addEventListener('click', () => {
    lista.classList.toggle('active');
});

    // Opcional: Fecha o menu ao clicar num link
document.querySelectorAll('.lista a').forEach(link => {
    link.addEventListener('click', () => {
        lista.classList.remove('active');
    });
});