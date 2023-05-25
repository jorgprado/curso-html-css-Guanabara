const pageLinks = document.querySelectorAll('.logos a');
const tela = document.getElementById('tela');

pageLinks.forEach((link) => {
    link.addEventListener('click', (event) =>{
        event.preventDefault();
        const url = link.getAttribute('href');

        tela.style.opacity = 0;
        tela.style.animation  = 'translateY(20px)';

        setTimeout(() => {
            tela.src = url;
            requestAnimationFrame(() => {
                tela.style.animation = 1;
                tela.style.transform = 'translateY(0)';
            });
        },300);
    });
});