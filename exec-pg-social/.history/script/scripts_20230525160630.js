const pageLinks = document.querySelectorAll('.logos a');
const tela = document.getElementById('tela');

pageLinks.forEach((link) => {
    link.addEventListener('click', (event) =>{
        event.preventDefault();
        const url = link.getAttribute('href');
        
        tela.style.animation  = 'slide-out 0.3s forwards';

        setTimeout(() => {
            tela.src = url;
            res
            tela.style.animation = 'slide-in 0.3s forwards';
        },300);
    });
});