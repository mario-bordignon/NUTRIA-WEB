document.addEventListener('DOMContentLoaded', () => {

    // #region LÓGICA DE TEMA (CLARO / ESCURO)
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    const setTheme = (theme) => {
        if (theme === 'dark') {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    };

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        setTheme(currentTheme);
    } else if (prefersDarkScheme.matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = htmlElement.getAttribute('data-theme') === 'dark';
            setTheme(isDark ? 'light' : 'dark');
        });
    }
    // #endregion

    // #region LÓGICA DO BOTÃO SCROLL TOPO
    const btnScrollTop = document.getElementById('btnScrollTop');
    if (btnScrollTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) btnScrollTop.classList.add('show');
            else btnScrollTop.classList.remove('show');
        });

        btnScrollTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    // #endregion

    // #region LÓGICA DE DOWNLOAD (ANDROID VS IOS VS DESKTOP)
    const downloadTriggers = document.querySelectorAll('.download-trigger');
    const qrModal = document.getElementById('qrModal');
    const closeQrModalBtn = document.getElementById('closeModal');
    const iosModal = document.getElementById('iosModal');
    const closeIosModalBtn = document.getElementById('closeIosModal');

    downloadTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const isAndroid = /Android/i.test(navigator.userAgent);
            const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

            if (isAndroid) {
                const link = document.createElement('a');
                link.href = 'apk/teste.png';
                link.download = 'teste.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else if (isIOS) {
                if (iosModal) iosModal.classList.add('active');
            } else {
                if (qrModal) qrModal.classList.add('active');
            }
        });
    });

    if (closeQrModalBtn && qrModal) {
        closeQrModalBtn.addEventListener('click', () => qrModal.classList.remove('active'));
        qrModal.addEventListener('click', (e) => { if (e.target === qrModal) qrModal.classList.remove('active'); });
    }

    if (closeIosModalBtn && iosModal) {
        closeIosModalBtn.addEventListener('click', () => iosModal.classList.remove('active'));
        iosModal.addEventListener('click', (e) => { if (e.target === iosModal) iosModal.classList.remove('active'); });
    }
    // #endregion

    // #region LÓGICA DO CARROSSEL DE PLANOS
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
    // #endregion

    // #region LÓGICA DO CARROSSEL DE EQUIPE
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
// #endregion

});