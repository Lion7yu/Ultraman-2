// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"test.js":[function(require,module,exports) {
var string = "\u6211\u662F\u5927\u5E05\u903C\uFF0C\u4F60\u4E5F\u662F\u5927\u5E05\u903C\uFF1F\uFF1F\uFF1F\n<style>\n*{box-sizing: border-box;padding: 0;margin: 0}\n*::before,*::after{box-sizing: border-box;}\n.head{\n    top: 100px;\n    width: 213px;\n    height: 222px;\n    background: #fff;\n    border: 7px solid #000;\n    border-top: 15px solid #000;\n    border-radius: 50% 50% 60% 60%;\n    position: relative;\n    left: 50%;\n    margin-left: -110px;\n\n}\n\n.trapezoid{\n    width: 50px;\n    height: 30px;\n    top: -42px;\n    left: 50%;\n    margin-left: -25px;\n    position: absolute;\n    border-bottom:30px solid #000;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-top: 10px solid transparent;\n}\n.triangle{\n    width: 40px;\n    height: 80px;\n    left: 50%;\n    margin-left: -20px;\n    position: relative;\n    border-bottom: none;\n    border-top:90px solid #000;\n    border-left: 20px solid transparent;\n    border-right: 20px solid transparent;\n\n}\n.mouth{\n    border: 1px solid #000;\n    width: 40px;\n    height: 22px;\n    top: 160px;\n    left: 50%;\n    margin-left: -20px;\n    position: absolute;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    border-top: 15px solid black;\n}\n.eye{\n    border: 5px solid #000;\n    width: 80px;\n    height: 80px;\n    position: absolute;\n    left: 50%;\n    margin-left: -40px;\n    top: 50px;\n    background: rgb(255, 195, 10);\n}\n.head:hover .eye{\n    animation:eyes 0.5s ease-in-out infinite;\n}\n@keyframes eyes{\n    0%{\n        background:rgb(255,190,0);\n    }\n    50%{\n        background:yellow;\n    }\n    100%{\n        background:rgb(255,190,0);\n    }\n}\n.eye.left{\n    transform: translate(-50px);\n    border-radius: 50% 90%;\n}\n.eye.right{\n    transform: translate(+50px);\n    border-radius: 90% 50%;\n}\n.ear{\n    border: 5px solid #000;\n    width: 24px;\n    height: 64px;\n    top: 70px;\n    position: absolute;\n    left: 50%;\n    margin-left: -24px;\n    background-color: #c3c3c3;\n    z-index:-1;\n}\n.ear.left{\n    margin-left: 95px ;\n    transform: rotate(8deg);\n    border-left: transparent;\n}\n.ear.right{\n    margin-left: -120px;\n    transform: rotate(-7deg);\n    border-right: transparent;\n}\n.body{\n    border: 7px solid #000;\n    position: relative;\n    width: 133px;\n    height: 100px;\n    left: 50%;\n    margin-left: -70px;\n    top: 70px;\n    border-top: transparent;\n}\n.abdomen{\n    border: 7px solid #000;\n    position: relative;\n    width: 133px;\n    height: 30px;\n    left: 50%;\n    margin-left: -66.5px;\n    top: -80px;\n    border-top: transparent;\n    background-color: red;\n    z-index: 1;\n    border-radius: 0% 0% 50% 50%;\n}\n.hand{\n    border: 7px solid #000;\n    position: relative;\n    left: 50%;\n    margin-left: -25px;\n    background-color: #fff;\n}\n.hand > img{\n    position: relative;\n    z-index: 999;\n    left: 50%;\n}\n.hand.left{\n    width: 43px;\n    height: 136px;\n    border-radius: 60% 60% 50% 50%;\n    transform: translate(-60px);\n    top: -40px;\n    z-index: 1;\n}\n.hand.left > img{\n    top: 45px;\n    transform: translate(140px);\n}\n.hand.right{\n    width: 144px;\n    height: 44px;\n    border-radius: 60% 50% 50% 60%;\n    top: -130px;\n    transform: translate(-36px);\n    z-index: 2;\n}\n.hand.right >img{\n    transform: rotateY(180deg);\n    margin-left: -250px;\n}\n.san{\n    border: 4px solid #000;\n    left: 50%;\n    width: 50px;\n    height: 50px;\n    margin-left: -25px;\n    position: absolute;\n    top: 20px;\n    transform: rotate(45deg);\n    background-color: red;\n}\n.san::after{\n    border: 1px solid #000;\n    position: absolute;\n    border-radius: 50%;\n    content: '';\n    display: block;\n    border: 1px solid #000;\n    width: 12px;\n    height: 12px;\n    background: blue;\n    position: absolute;\n    left: 50%;\n    margin-left: 7px;\n    top: 28px;\n    z-index: 999;\n}\n.san::after{\n    animation: light .5s linear infinite alternate;\n}\n@keyframes light{\n    0%{\n        background:#48e1e7;\n    }\n    50%{\n        background:blue;\n    }\n    100%{\n        background:#48e1e7;\n    }\n}\n.leg{\n    position: relative;\n    border-radius: 50% 50% 60% 60%;\n}\n.leg.left{\n    border: 7px solid #000;\n    width: 44px;\n    height: 96px;\n    left: 50%;\n    margin-left: -60px;\n    top: 70px;\n    transform: rotate(16deg);\n}\n/* .run2{\n    animation: legLeft 3s linear 3s infinite alternate;\n}\n@keyframes legLeft{\n   \n    33% {\n      transform: rotate(-30deg);\n    }\n    66% {\n      transform: rotate(30deg);\n   \n    }\n  \n  } */\n.leg.right{\n    border: 7px solid #000;\n    width: 44px;\n    height: 96px;\n    left: 50%;\n    margin-left: 10px;\n    transform: rotate(-16deg);\n    top: -25px;\n}\n/* .run1{\n    animation: legRight 3s linear 3s infinite alternate;\n}\n@keyframes legRight{\n   \n  33% {\n    transform: rotate(30deg);\n  }\n  66% {\n    transform: rotate(-30deg);\n \n  }\n} */\n </style>   \n";
var player = {
  n: 1,
  time: 100,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2")
  },
  id: undefined,
  init: function init() {
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnQuick': 'quick'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; //pause /play / slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  quick: function quick() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51290" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map