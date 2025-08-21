(function() {
    'use strict';

    function logProgress() {
        const video = document.querySelector('video');
        const title = document.title;
        if (video) {
            console.log(`🎬 "${title}" at ${Math.floor(video.currentTime)}s`);
        } else {
            console.log('⚠️ No video element found');
        }
    }

    window.addEventListener('yt-navigate-finish', () => {
        console.log('🔁 Navigation finished, restarting progress log');
        clearInterval(window._ytProgressInterval);
        window._ytProgressInterval = setInterval(logProgress, 5000);
    });

    window._ytProgressInterval = setInterval(logProgress, 5000);
})();
