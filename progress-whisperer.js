(function() {
    'use strict';

    function logProgress() {
        const video = document.querySelector('video');
        if (!video) {
            console.log('⚠️ No video element found, retrying...');
            setTimeout(logProgress, 1000);
            return;
        }

        setInterval(() => {
            const title = document.title;
            const current = Math.floor(video.currentTime);
            const duration = Math.floor(video.duration);
            const percent = ((current / duration) * 100).toFixed(1);
            console.log(`🎬 "${title}" at ${current}s (${percent}%)`);
        }, 5000);
    }

    window.addEventListener('yt-navigate-finish', () => {
        console.log('🔁 Navigation finished, restarting progress log');
        logProgress();
    });

    logProgress();
})();
