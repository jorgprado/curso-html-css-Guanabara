const pageLinks = document.querySelectorAll('.logos a');
const tela = document.getElementById('tela');

pageLinks.forEach((link) => {
    link.addEventListener('click', (event) =>{
        event.preventDefault();
        const url = link.getAttribute('href');
        
        tela.style.animation  = 'trans';

        setTimeout(() => {
            tela.src = url;
            requestAnimationFrame(() => {
                tela.style.animation = 'slide-in 0.3s forwards';
                tela.style.transform = 'translateY(0)';
            });
        },300);
    });
});