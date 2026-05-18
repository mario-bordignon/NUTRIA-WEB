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

});