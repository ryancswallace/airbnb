(function(window, undefined) {
  var ANALYTICS_SERVER_BASE_URL = '//web-analytics.engagio.com/';
  var Loader, loader;

  if (!window.EI) {
    window.EI = {};
  }

  if (!Loader) {
    Loader = function() {
      this.counter = 0;
      this.urls = [];
      this.callbacks = [];

      this.registerScript = function(url) {
        this.counter += 1;
        this.urls.push(url);
      };

      this.registerCallback = function(callback) {
        this.callbacks.push(callback);
      };

      this._scriptLoaded = function() {
        var i;
        this.counter -= 1;
        if (this.counter === 0 && this.callbacks.length) {
          for (i = 0; i < this.callbacks.length; i += 1) {
            this.callbacks[i].call();
          }
        }
      };

      this._loadScript = function(url) {
        var head, script, obj;
        obj = this;
        head = document.getElementsByTagName('head')[0];
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;

        // then bind the event to the callback function
        // there are several events for cross browser compatibility
        if (script.addEventListener) {
          script.addEventListener("load", function() {
            obj._scriptLoaded.apply(obj);
          }, false);
        } else if (script.readyState) {
          script.onreadystatechange = function() {
            if (this.readyState == 'loaded' || this.readyState == 'complete') {
              obj._scriptLoaded.apply(obj);
            }
          };
        }

        // fire the loading
        head.appendChild(script);
      };

      this.go = function() {
        var i;
        for (i = 0; i < this.urls.length; i += 1) {
          this._loadScript(this.urls[i]);
        }
      };
    };
  }
  function main_load() {
      EI.main.init(ANALYTICS_SERVER_BASE_URL);
  }
  pre_loader = new Loader();
  pre_loader.registerScript(ANALYTICS_SERVER_BASE_URL + 'js/ei_track_all_packed.js');
  pre_loader.registerCallback(main_load);
  pre_loader.go();
}(window));
