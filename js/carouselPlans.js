/* =========================================
    CARROSSEL DA SESSÃO DE PLANOS
========================================= */

document.addEventListener('DOMContentLoaded', () => {
    const btnPrev = document.getElementById('planPrev');
    const btnNext = document.getElementById('planNext');
    const viewport = document.getElementById('plansViewport');

    if (btnPrev && btnNext && viewport) {
        btnNext.addEventListener('click', () => {
            const card = viewport.querySelector('.plan-card');
            const scrollAmount = card.offsetWidth + 20;
            if (viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 10) {
                viewport.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                viewport.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        });

        btnPrev.addEventListener('click', () => {
            const card = viewport.querySelector('.plan-card');
            const scrollAmount = card.offsetWidth + 20;
            if (viewport.scrollLeft <= 10) {
                viewport.scrollTo({ left: viewport.scrollWidth, behavior: 'smooth' });
            } else {
                viewport.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        });
    }
});