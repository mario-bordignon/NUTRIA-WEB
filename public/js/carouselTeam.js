/* =========================================
    CARROSSEL DA SESSÃO DE NOSSA EQUIPE
========================================= */

document.addEventListener('DOMContentLoaded', () => {
    const teamNext = document.getElementById('teamNext');
    const teamPrev = document.getElementById('teamPrev');
    const teamViewport = document.getElementById('teamViewport');

    if (teamViewport && teamNext && teamPrev) {
        teamNext.addEventListener('click', () => {
            // Forçamos a leitura da largura do cartão no momento do clique
            const cardWidth = teamViewport.querySelector('.team-member').offsetWidth + 20;
            const maxScroll = teamViewport.scrollWidth - teamViewport.clientWidth;
            
            if (teamViewport.scrollLeft >= maxScroll - 50) {
                teamViewport.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                teamViewport.scrollBy({ left: cardWidth, behavior: 'smooth' });
            }
        });

        teamPrev.addEventListener('click', () => {
            const cardWidth = teamViewport.querySelector('.team-member').offsetWidth + 20;
            if (teamViewport.scrollLeft <= 50) {
                teamViewport.scrollTo({ left: teamViewport.scrollWidth, behavior: 'smooth' });
            } else {
                teamViewport.scrollBy({ left: -cardWidth, behavior: 'smooth' });
            }
        });
    }
});