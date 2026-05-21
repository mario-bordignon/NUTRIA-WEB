/* =========================================
    BOTÃO DOWNLOAD COM DETECÇÃO DE SISTEMA 
========================================= */

document.addEventListener('DOMContentLoaded', () => {
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
});