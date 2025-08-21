(function() {
    'use strict';

    function killAutoplay() {
        const toggle = document.querySelector('ytd-autoplay-renderer tp-yt-paper-toggle-button');
        if (toggle) {
            const isOn = toggle.hasAttribute('checked');
            const isDisabled = toggle.hasAttribute('disabled');
            if (isOn && !isDisabled) {
                toggle.click();
                console.log('🔴 Autoplay toggle disabled');
            } else {
                console.log('✅ Autoplay already off or toggle not clickable');
            }
        } else {
            console.log('⚠️ Autoplay toggle not found, retrying...');
            setTimeout(killAutoplay, 1000); // Retry after 1s
        }
    }

    function observeChanges() {
        const observer = new MutationObserver(() => killAutoplay());
        observer.observe(document.body, { childList: true, subtree: true });
        console.log('👁️ Watching for autoplay toggle');
    }

    window.addEventListener('yt-navigate-finish', () => {
        console.log('🧭 Navigation finished, rechecking autoplay');
        killAutoplay();
    });

    killAutoplay();
    observeChanges();
})();
