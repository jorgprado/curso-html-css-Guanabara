const pageLinks = document.querySelectorAll('.logos a');
const tela = document.getElementById('tela');

pageLinks.forEach((link) => {
    link.addEventListener('click', (event) =>{
        event.preventDefault();
        const url = link.getAttribute('href');
        
        tela.style.opacity  = 0;

        setTimeout(() => {
            tela.src = url;
            tela.style.animation = 'slide-in 0.3s forwards';
        },1000);
    })
})