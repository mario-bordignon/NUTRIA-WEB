document.addEventListener('DOMContentLoaded', () => {
    
// #region LÓGICA DO BOTÃO SCROLL TOPO
    const btnScrollTop = document.getElementById('btnScrollTop');

    // Monitora o scroll para revelar o botão após descer 300px
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnScrollTop.classList.add('show');
        } else {
            btnScrollTop.classList.remove('show');
        }
    });

    // Evento de clique para rolar fluidamente para o topo
    btnScrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
// #endregion

});