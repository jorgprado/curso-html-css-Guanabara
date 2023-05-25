const pageLinks = document.querySelectorAll('.logos a');
const tela = document.getElementByIs('tela');

pageLinks.forEach((link) => {
    link.addEventListener('click', (event) =>{
        event.preventDefault();
        const url = link.getAttribute('href');
        tela.sty
    })
})