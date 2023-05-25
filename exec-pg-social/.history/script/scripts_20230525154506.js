const pageLinks = document.querySelectorAll('.logos a');
const tela = document.getElementByIs('tela');

pageLinks.forEach((link) => {
    link.addEventListener('click', (event) =>{
        event.preventDefault();
        const url = link.getAttribute('href');
        tela.style.opacity  = 0;
        setTimeout(() => {
            tela.src = url;
            tela.style.opacity = 1;
        },300)
    })
})