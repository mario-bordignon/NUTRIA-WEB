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

    if(themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (htmlElement.getAttribute('data-theme') === 'dark') {
                setTheme('light');
            } else {
                setTheme('dark');
            }
        });
    }
// #endregion

// #region LÓGICA DO BOTÃO SCROLL TOPO
    const btnScrollTop = document.getElementById('btnScrollTop');

    if(btnScrollTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                btnScrollTop.classList.add('show');
            } else {
                btnScrollTop.classList.remove('show');
            }
        });

        btnScrollTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
// #endregion

// #region LÓGICA DE DOWNLOAD (ANDROID VS IOS VS DESKTOP)
    const downloadTriggers = document.querySelectorAll('.download-trigger');
    
    // Elementos do Modal QR (Desktop)
    const qrModal = document.getElementById('qrModal');
    const closeQrModalBtn = document.getElementById('closeModal');
    
    // Elementos do Modal iOS
    const iosModal = document.getElementById('iosModal');
    const closeIosModalBtn = document.getElementById('closeIosModal');

    downloadTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Verificação de sistema via User-Agent (com trava para iPads modernos)
            const isAndroid = /Android/i.test(navigator.userAgent);
            const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

            if (isAndroid) {
                // 1. Caso Android: Força o download
                const link = document.createElement('a');
                link.href = 'apk/teste.png'; // Caminho do APK
                link.download = 'teste.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else if (isIOS) {
                // 2. Caso iOS: Abre a janela modal de aviso
                if(iosModal) {
                    iosModal.classList.add('active');
                }
            } else {
                // 3. Caso Desktop: Abre a janela modal do QR Code
                if(qrModal) {
                    qrModal.classList.add('active');
                }
            }
        });
    });

    // Lógica para fechar o Modal QR Code
    if(closeQrModalBtn && qrModal) {
        closeQrModalBtn.addEventListener('click', () => qrModal.classList.remove('active'));
        qrModal.addEventListener('click', (e) => {
            if (e.target === qrModal) qrModal.classList.remove('active');
        });
    }

    // Lógica para fechar o Modal iOS
    if(closeIosModalBtn && iosModal) {
        closeIosModalBtn.addEventListener('click', () => iosModal.classList.remove('active'));
        iosModal.addEventListener('click', (e) => {
            if (e.target === iosModal) iosModal.classList.remove('active');
        });
    }
// #endregion

});