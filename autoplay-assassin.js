(function() {
    'use strict';

    function killAutoplay() {
        const toggle = document.querySelector('ytd-autoplay-renderer tp-yt-paper-toggle-button');
        if (toggle && toggle.hasAttribute('checked')) {
            toggle.click();
            console.log('🛑 Autoplay toggle disabled');
        } else {
            console.log('✅ Autoplay already off or toggle not found');
        }
    }

    function observeChanges() {
        const observer = new MutationObserver(() => killAutoplay());
        observer.observe(document.body, { childList: true, subtree: true });
        console.log('👁️ Watching for autoplay toggle');
    }

    window.addEventListener('yt-navigate-finish', () => {
        console.log('🔁 Navigation finished, rechecking autoplay');
        killAutoplay();
    });

    killAutoplay();
    observeChanges();
})();
