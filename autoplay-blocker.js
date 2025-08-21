(function() {
    'use strict';

    function disableAutoplayViaAPI() {
        const player = document.querySelector('video');
        if (player) {
            player.addEventListener('ended', () => {
                console.log('🛑 Video ended — blocking autoplay');
                // Attempt to stop next video
                const nextButton = document.querySelector('.ytp-next-button');
                if (nextButton) {
                    nextButton.remove(); // Or disable it
                    console.log('🚫 Next button removed');
                }
            });
        } else {
            console.log('⚠️ No video element found, retrying...');
            setTimeout(disableAutoplayViaAPI, 1000);
        }
    }

    window.addEventListener('yt-navigate-finish', () => {
        console.log('🧭 Navigation finished, checking player');
        disableAutoplayViaAPI();
    });

    disableAutoplayViaAPI();
})();
