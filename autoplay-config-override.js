Object.defineProperty(window, 'ytInitialPlayerResponse', {
    set: function(value) {
        if (value?.playerConfig?.autoplay) {
            value.playerConfig.autoplay = false;
            console.log('🛑 Autoplay disabled via config override');
        }
        this._ytInitialPlayerResponse = value;
    },
    get: function() {
        return this._ytInitialPlayerResponse;
    }
});
