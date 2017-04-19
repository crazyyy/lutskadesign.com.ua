// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
if (typeof jQuery === 'undefined') {
  console.warn('jQuery hasn\'t loaded');
} else {
  console.log('jQuery has loaded');
}
// Place any jQuery/helper plugins in here.

// outside scripts


/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function() {
  function e() {}

  function t(e, t) {
    for (var n = e.length; n--;)
      if (e[n].listener === t) return n;
    return -1
  }

  function n(e) {
    return function() {
      return this[e].apply(this, arguments)
    }
  }
  var i = e.prototype,
    r = this,
    o = r.EventEmitter;
  i.getListeners = function(e) {
    var t, n, i = this._getEvents();
    if ("object" == typeof e) {
      t = {};
      for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
    } else t = i[e] || (i[e] = []);
    return t
  }, i.flattenListeners = function(e) {
    var t, n = [];
    for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
    return n
  }, i.getListenersAsObject = function(e) {
    var t, n = this.getListeners(e);
    return n instanceof Array && (t = {}, t[e] = n), t || n
  }, i.addListener = function(e, n) {
    var i, r = this.getListenersAsObject(e),
      o = "object" == typeof n;
    for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
      listener: n,
      once: !1
    });
    return this
  }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
    return this.addListener(e, {
      listener: t,
      once: !0
    })
  }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
    return this.getListeners(e), this
  }, i.defineEvents = function(e) {
    for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
    return this
  }, i.removeListener = function(e, n) {
    var i, r, o = this.getListenersAsObject(e);
    for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
    return this
  }, i.off = n("removeListener"), i.addListeners = function(e, t) {
    return this.manipulateListeners(!1, e, t)
  }, i.removeListeners = function(e, t) {
    return this.manipulateListeners(!0, e, t)
  }, i.manipulateListeners = function(e, t, n) {
    var i, r, o = e ? this.removeListener : this.addListener,
      s = e ? this.removeListeners : this.addListeners;
    if ("object" != typeof t || t instanceof RegExp)
      for (i = n.length; i--;) o.call(this, t, n[i]);
    else
      for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
    return this
  }, i.removeEvent = function(e) {
    var t, n = typeof e,
      i = this._getEvents();
    if ("string" === n) delete i[e];
    else if ("object" === n)
      for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
    else delete this._events;
    return this
  }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
    var n, i, r, o, s = this.getListenersAsObject(e);
    for (r in s)
      if (s.hasOwnProperty(r))
        for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
    return this
  }, i.trigger = n("emitEvent"), i.emit = function(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(e, t)
  }, i.setOnceReturnValue = function(e) {
    return this._onceReturnValue = e, this
  }, i._getOnceReturnValue = function() {
    return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
  }, i._getEvents = function() {
    return this._events || (this._events = {})
  }, e.noConflict = function() {
    return r.EventEmitter = o, e
  }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
    return e
  }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
  function(e) {
    function t(t) {
      var n = e.event;
      return n.target = n.target || n.srcElement || t, n
    }
    var n = document.documentElement,
      i = function() {};
    n.addEventListener ? i = function(e, t, n) {
      e.addEventListener(t, n, !1)
    } : n.attachEvent && (i = function(e, n, i) {
      e[n + i] = i.handleEvent ? function() {
        var n = t(e);
        i.handleEvent.call(i, n)
      } : function() {
        var n = t(e);
        i.call(e, n)
      }, e.attachEvent("on" + n, e[n + i])
    });
    var r = function() {};
    n.removeEventListener ? r = function(e, t, n) {
      e.removeEventListener(t, n, !1)
    } : n.detachEvent && (r = function(e, t, n) {
      e.detachEvent("on" + t, e[t + n]);
      try {
        delete e[t + n]
      } catch (i) {
        e[t + n] = void 0
      }
    });
    var o = {
      bind: i,
      unbind: r
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
  }(this),
  function(e, t) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
      return t(e, n, i)
    }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
  }(window, function(e, t, n) {
    function i(e, t) {
      for (var n in t) e[n] = t[n];
      return e
    }

    function r(e) {
      return "[object Array]" === d.call(e)
    }

    function o(e) {
      var t = [];
      if (r(e)) t = e;
      else if ("number" == typeof e.length)
        for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
      else t.push(e);
      return t
    }

    function s(e, t, n) {
      if (!(this instanceof s)) return new s(e, t);
      "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
      var r = this;
      setTimeout(function() {
        r.check()
      })
    }

    function f(e) {
      this.img = e
    }

    function c(e) {
      this.src = e, v[e] = this
    }
    var a = e.jQuery,
      u = e.console,
      h = u !== void 0,
      d = Object.prototype.toString;
    s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
      this.images = [];
      for (var e = 0, t = this.elements.length; t > e; e++) {
        var n = this.elements[e];
        "IMG" === n.nodeName && this.addImage(n);
        var i = n.nodeType;
        if (i && (1 === i || 9 === i || 11 === i))
          for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
            var f = r[o];
            this.addImage(f)
          }
      }
    }, s.prototype.addImage = function(e) {
      var t = new f(e);
      this.images.push(t)
    }, s.prototype.check = function() {
      function e(e, r) {
        return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
      }
      var t = this,
        n = 0,
        i = this.images.length;
      if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
      for (var r = 0; i > r; r++) {
        var o = this.images[r];
        o.on("confirm", e), o.check()
      }
    }, s.prototype.progress = function(e) {
      this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
      var t = this;
      setTimeout(function() {
        t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
      })
    }, s.prototype.complete = function() {
      var e = this.hasAnyBroken ? "fail" : "done";
      this.isComplete = !0;
      var t = this;
      setTimeout(function() {
        if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
          var n = t.hasAnyBroken ? "reject" : "resolve";
          t.jqDeferred[n](t)
        }
      })
    }, a && (a.fn.imagesLoaded = function(e, t) {
      var n = new s(this, e, t);
      return n.jqDeferred.promise(a(this))
    }), f.prototype = new t, f.prototype.check = function() {
      var e = v[this.img.src] || new c(this.img.src);
      if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
      if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
      var t = this;
      e.on("confirm", function(e, n) {
        return t.confirm(e.isLoaded, n), !0
      }), e.check()
    }, f.prototype.confirm = function(e, t) {
      this.isLoaded = e, this.emit("confirm", this, t)
    };
    var v = {};
    return c.prototype = new t, c.prototype.check = function() {
      if (!this.isChecked) {
        var e = new Image;
        n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
      }
    }, c.prototype.handleEvent = function(e) {
      var t = "on" + e.type;
      this[t] && this[t](e)
    }, c.prototype.onload = function(e) {
      this.confirm(!0, "onload"), this.unbindProxyEvents(e)
    }, c.prototype.onerror = function(e) {
      this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
    }, c.prototype.confirm = function(e, t) {
      this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
    }, c.prototype.unbindProxyEvents = function(e) {
      n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
    }, s
  });


/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT / GPLv2 License.
*/
(function() {
  function e() {}

  function t(e, t) {
    for (var n = e.length; n--;)
      if (e[n].listener === t) return n;
    return -1
  }

  function n(e) {
    return function() {
      return this[e].apply(this, arguments)
    }
  }
  var i = e.prototype,
    r = this,
    o = r.EventEmitter;
  i.getListeners = function(e) {
    var t, n, i = this._getEvents();
    if ("object" == typeof e) {
      t = {};
      for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
    } else t = i[e] || (i[e] = []);
    return t
  }, i.flattenListeners = function(e) {
    var t, n = [];
    for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
    return n
  }, i.getListenersAsObject = function(e) {
    var t, n = this.getListeners(e);
    return n instanceof Array && (t = {}, t[e] = n), t || n
  }, i.addListener = function(e, n) {
    var i, r = this.getListenersAsObject(e),
      o = "object" == typeof n;
    for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
      listener: n,
      once: !1
    });
    return this
  }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
    return this.addListener(e, {
      listener: t,
      once: !0
    })
  }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
    return this.getListeners(e), this
  }, i.defineEvents = function(e) {
    for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
    return this
  }, i.removeListener = function(e, n) {
    var i, r, o = this.getListenersAsObject(e);
    for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
    return this
  }, i.off = n("removeListener"), i.addListeners = function(e, t) {
    return this.manipulateListeners(!1, e, t)
  }, i.removeListeners = function(e, t) {
    return this.manipulateListeners(!0, e, t)
  }, i.manipulateListeners = function(e, t, n) {
    var i, r, o = e ? this.removeListener : this.addListener,
      s = e ? this.removeListeners : this.addListeners;
    if ("object" != typeof t || t instanceof RegExp)
      for (i = n.length; i--;) o.call(this, t, n[i]);
    else
      for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
    return this
  }, i.removeEvent = function(e) {
    var t, n = typeof e,
      i = this._getEvents();
    if ("string" === n) delete i[e];
    else if ("object" === n)
      for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
    else delete this._events;
    return this
  }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
    var n, i, r, o, s = this.getListenersAsObject(e);
    for (r in s)
      if (s.hasOwnProperty(r))
        for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
    return this
  }, i.trigger = n("emitEvent"), i.emit = function(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(e, t)
  }, i.setOnceReturnValue = function(e) {
    return this._onceReturnValue = e, this
  }, i._getOnceReturnValue = function() {
    return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
  }, i._getEvents = function() {
    return this._events || (this._events = {})
  }, e.noConflict = function() {
    return r.EventEmitter = o, e
  }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
    return e
  }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
  function(e) {
    function t(t) {
      var n = e.event;
      return n.target = n.target || n.srcElement || t, n
    }
    var n = document.documentElement,
      i = function() {};
    n.addEventListener ? i = function(e, t, n) {
      e.addEventListener(t, n, !1)
    } : n.attachEvent && (i = function(e, n, i) {
      e[n + i] = i.handleEvent ? function() {
        var n = t(e);
        i.handleEvent.call(i, n)
      } : function() {
        var n = t(e);
        i.call(e, n)
      }, e.attachEvent("on" + n, e[n + i])
    });
    var r = function() {};
    n.removeEventListener ? r = function(e, t, n) {
      e.removeEventListener(t, n, !1)
    } : n.detachEvent && (r = function(e, t, n) {
      e.detachEvent("on" + t, e[t + n]);
      try {
        delete e[t + n]
      } catch (i) {
        e[t + n] = void 0
      }
    });
    var o = {
      bind: i,
      unbind: r
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
  }(this),
  function(e, t) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
      return t(e, n, i)
    }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
  }(window, function(e, t, n) {
    function i(e, t) {
      for (var n in t) e[n] = t[n];
      return e
    }

    function r(e) {
      return "[object Array]" === d.call(e)
    }

    function o(e) {
      var t = [];
      if (r(e)) t = e;
      else if ("number" == typeof e.length)
        for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
      else t.push(e);
      return t
    }

    function s(e, t, n) {
      if (!(this instanceof s)) return new s(e, t);
      "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), h && (this.jqDeferred = new h.Deferred);
      var r = this;
      setTimeout(function() {
        r.check()
      })
    }

    function c(e) {
      this.img = e
    }

    function a(e) {
      this.src = e, v[e] = this
    }
    var h = e.jQuery,
      u = e.console,
      f = void 0 !== u,
      d = Object.prototype.toString;
    s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
      this.images = [];
      for (var e = 0, t = this.elements.length; t > e; e++) {
        var n = this.elements[e];
        "IMG" === n.nodeName && this.addImage(n);
        var i = n.nodeType;
        if (i && (1 === i || 9 === i || 11 === i))
          for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
            var c = r[o];
            this.addImage(c)
          }
      }
    }, s.prototype.addImage = function(e) {
      var t = new c(e);
      this.images.push(t)
    }, s.prototype.check = function() {
      function e(e, r) {
        return t.options.debug && f && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
      }
      var t = this,
        n = 0,
        i = this.images.length;
      if (this.hasAnyBroken = !1, !i) return void this.complete();
      for (var r = 0; i > r; r++) {
        var o = this.images[r];
        o.on("confirm", e), o.check()
      }
    }, s.prototype.progress = function(e) {
      this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
      var t = this;
      setTimeout(function() {
        t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
      })
    }, s.prototype.complete = function() {
      var e = this.hasAnyBroken ? "fail" : "done";
      this.isComplete = !0;
      var t = this;
      setTimeout(function() {
        if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
          var n = t.hasAnyBroken ? "reject" : "resolve";
          t.jqDeferred[n](t)
        }
      })
    }, h && (h.fn.imagesLoaded = function(e, t) {
      var n = new s(this, e, t);
      return n.jqDeferred.promise(h(this))
    }), c.prototype = new t, c.prototype.check = function() {
      var e = v[this.img.src] || new a(this.img.src);
      if (e.isConfirmed) return void this.confirm(e.isLoaded, "cached was confirmed");
      if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
      var t = this;
      e.on("confirm", function(e, n) {
        return t.confirm(e.isLoaded, n), !0
      }), e.check()
    }, c.prototype.confirm = function(e, t) {
      this.isLoaded = e, this.emit("confirm", this, t)
    };
    var v = {};
    return a.prototype = new t, a.prototype.check = function() {
      if (!this.isChecked) {
        var e = new Image;
        n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
      }
    }, a.prototype.handleEvent = function(e) {
      var t = "on" + e.type;
      this[t] && this[t](e)
    }, a.prototype.onload = function(e) {
      this.confirm(!0, "onload"), this.unbindProxyEvents(e)
    }, a.prototype.onerror = function(e) {
      this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
    }, a.prototype.confirm = function(e, t) {
      this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
    }, a.prototype.unbindProxyEvents = function(e) {
      n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
    }, s
  }),
  function(e) {
    function t() {
      u.setAttribute("content", v), l = !0
    }

    function n() {
      u.setAttribute("content", d), l = !1
    }

    function i(i) {
      h = i.accelerationIncludingGravity, s = Math.abs(h.x), c = Math.abs(h.y), a = Math.abs(h.z), e.orientation && 180 !== e.orientation || !(s > 7 || (a > 6 && 8 > c || 8 > a && c > 6) && s > 5) ? l || t() : l && n()
    }
    var r = navigator.userAgent;
    if (/iPhone|iPad|iPod/.test(navigator.platform) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(r) && r.indexOf("AppleWebKit") > -1) {
      var o = e.document;
      if (o.querySelector) {
        var s, c, a, h, u = o.querySelector("meta[name=viewport]"),
          f = u && u.getAttribute("content"),
          d = f + ",maximum-scale=1",
          v = f + ",maximum-scale=10",
          l = !0;
        u && (e.addEventListener("orientationchange", t, !1), e.addEventListener("devicemotion", i, !1))
      }
    }
  }(this),
  function(e) {
    e.topBelowTheScreenCenter = function(t, n) {
      var i = e(t).offset().top - n.threshold,
        r = e(window).scrollTop() + .5 * e(window).height();
      return i > r
    }, e.btmAboveTheScreenCenter = function(t, n) {
      var i = e(window).scrollTop() + .5 * e(window).height(),
        r = e(t).offset().top + e(t).height() - n.threshold;
      return i >= r
    }, e.inviewport = function(t, n) {
      return !e.topBelowTheScreenCenter(t, n) && !e.btmAboveTheScreenCenter(t, n)
    }, e.extend(e.expr[":"], {
      topBelowTheScreenCenter: function(t, n, i) {
        return e.topBelowTheScreenCenter(t, {
          threshold: 0
        })
      },
      btmAboveTheScreenCenter: function(t, n, i) {
        return e.btmAboveTheScreenCenter(t, {
          threshold: 0
        })
      },
      in_viewport: function(t, n, i) {
        return e.inviewport(t, {
          threshold: 0
        })
      }
    })
  }(jQuery);


/*
 * Viewport - jQuery selectors for finding elements in viewport
 *
 * Copyright (c) 2008-2009 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *  http://www.appelsiini.net/projects/viewport
 *
 */
! function(e) {
  e.topBelowTheScreenCenter = function(t, n) {
    var r = e(t).offset().top - n.threshold,
      o = e(window).scrollTop() + .5 * e(window).height();
    return r > o
  }, e.btmAboveTheScreenCenter = function(t, n) {
    var r = e(window).scrollTop() + .5 * e(window).height(),
      o = e(t).offset().top + e(t).height() - n.threshold;
    return r >= o
  }, e.inviewport = function(t, n) {
    return !e.topBelowTheScreenCenter(t, n) && !e.btmAboveTheScreenCenter(t, n)
  }, e.extend(e.expr[":"], {
    topBelowTheScreenCenter: function(t, n, r) {
      return e.topBelowTheScreenCenter(t, {
        threshold: 0
      })
    },
    btmAboveTheScreenCenter: function(t, n, r) {
      return e.btmAboveTheScreenCenter(t, {
        threshold: 0
      })
    },
    in_viewport: function(t, n, r) {
      return e.inviewport(t, {
        threshold: 0
      })
    }
  })
}(jQuery);


$(document).bind("scroll", function() {
  /* add '.scrolling' class to body while scrolling */
  toggleMenuOnSlide();
});


$(window).resize(function() {
  toggleMenuOnSlide();
});


$('#menu li a').mouseover(function() {
  $('#menu').addClass('hovered');
}).mouseout(function() {
  $('#menu').removeClass('hovered');
});

$('#shareProject .switcher').click(function() {
  $('#shareProject').toggleClass('active');
})



$(document).ready(function() {

  // $('#pusher').bind('swipeone swiperight', switchMobMenu);
  toggleMenuOnSlide();

  //highlight active menu
  var pathArray = window.location.pathname.split('/');
  $('#menu li a').each(function() {
    var curHref = $(this).attr('href');
    if (pathArray.slice(-1)[0] == curHref) {
      $(this).addClass('active');
    }
  });

  $('body').addClass('loaded');

  /* Swipebox gallery (lightbox) */
  $('.swipebox').swipebox({
    hideBarsDelay: false,
    removeBarsOnMobile: false
  });

  $(function() {
    // init Isotope for portfolio page
    var $projects_container = $('#portfolio #projects_container');
    $projects_container.isotope({
      itemSelector: '.item',
      layoutMode: 'fitRows'
    });

    //init Isotope for project page
    var $project_container = $('#projectabout #container');
    $project_container.isotope({
      itemSelector: '#container .item',
      layoutMode: 'masonry',
      masonry: {
        columnWidth: "#container .grid-sizer",
        gutter: "#container .gutter-sizer",
        itemSelector: '#container .item'
      }

    });
    //init Isotope for project page part II
    var $project_container = $('#extra_images #container2');
    $project_container.isotope({
      itemSelector: '#container2 .item',
      layoutMode: 'masonry',
      masonry: {
        columnWidth: "#container2 .grid-sizer",
        gutter: "#container2 .gutter-sizer",
        itemSelector: '#container2 .item'
      }

    });

    // init Isotope for blog page
    var $blog_container = $('#blog #blog_container').imagesLoaded(function() {
      $blog_container.isotope({
        itemSelector: '.item',
        layoutMode: 'masonry',
        masonry: {
          columnWidth: "#blog_container .grid-sizer",
          gutter: "#blog_container .gutter-sizer",
          itemSelector: '#blog_container .item'
        }
      });
    });

    function getHashFilter() {
      // get filter=filterName
      var matches = location.hash.match(/filter=([^&]+)/i);
      var hashFilter = matches && matches[1];
      return hashFilter && decodeURIComponent(hashFilter);
    }

    $(function() {

      var $grid = $('.isotope_container');

      // bind filter button click
      var $filterButtonGroup = $('.filter-button-group');
      $filterButtonGroup.on('click', 'button', function() {
        var filterAttr = $(this).attr('data-filter');
        // set filter in hash
        location.hash = 'filter=' + encodeURIComponent(filterAttr);
      });

      var isIsotopeInit = false;

      function onHashchange() {
        var hashFilter = getHashFilter();
        if (!hashFilter && isIsotopeInit) {
          return;
        }
        isIsotopeInit = true;
        // filter isotope
        $grid.isotope({
          itemSelector: '.item',
          layoutMode: 'masonry',
          filter: hashFilter
        });
        // set selected class on button
        if (hashFilter) {
          $filterButtonGroup.find('.is-checked').removeClass('is-checked');
          $filterButtonGroup.find('[data-filter="' + hashFilter + '"]').addClass('is-checked');
        }
      }

      $(window).on('hashchange', onHashchange);

      // trigger event handler to init Isotope
      onHashchange();

    });

  });

});

// mobile slide menu
(function($) {
  $('.toggle-menu').on('touchstart click', function(e) {
    switchMobMenu(e);
  });
})(jQuery);


function switchMobMenu(e) {
  e.preventDefault();

  var $body = $('body'),
    $page = $('#page'),
    $menu = $('#mob_menu'),

    transitionEnd = 'transitionend webkitTransitionEnd otransitionend MSTransitionEnd';

  $body.addClass('animating');

  if ($body.hasClass('menu-visible')) {
    $body.addClass('right');
  } else {
    $body.addClass('left');
  }
  $page.on(transitionEnd, function() {
    $body
      .removeClass('animating left right')
      .toggleClass('menu-visible');

    $page.off(transitionEnd);
  });
}


function toggleMenuOnSlide() {
  var docWidth = $(document).width();
  var scrollTop = $(document).scrollTop();

  if (scrollTop > 12) {
    $("header").addClass('sticky').removeClass('not-sticky');
  } else {
    $("header").removeClass('sticky').addClass('not-sticky');
  }

}


function animateMenu(stat, delay) {
  if (!delay) {
    delay = 0
    $('header, #pusher').removeClass('animated');
  } else {
    $('header, #pusher').addClass('animated');
  }
  if (stat == 'compact') {
    //показываем компактный вариант
    // $("body").removeClass('scrolling');
    // $(".menu-compact").fadeOut(delay);
    // $(".menu-expanded").fadeIn(delay);
    $("body").addClass('scrolling');
    $(".menu-expanded").fadeOut(delay);
    $(".menu-compact").fadeIn(delay);
  }
  if (stat == 'expand') {
    //показываем расширенный вариант
    // $("body").removeClass('scrolling');
    // $(".menu-compact").fadeOut(delay);
    // $(".menu-expanded").fadeIn(delay);
    $("body").addClass('scrolling');
    $(".menu-expanded").fadeOut(delay);
    $(".menu-compact").fadeIn(delay);
  }
}


// Listen for orientation changes


$(".scrolldown").click(function(event) {
  event.preventDefault();
  dest = $(this.hash).offset().top;
  $('html,body').animate({
    scrollTop: dest - 60
  }, 1000, 'swing');
});

//services. show panels with description
$(".show-content").click(function() {
  var elem_id = $(this).attr('rel');
  var elem = $('#' + elem_id);
  elem.toggleClass('show');
  return false;
});

$('.custom-select .title').click(function() {
  $(this).siblings('.options').toggleClass('opened');
});
$('.custom-select .options button').click(function() {
  var optionValue = $(this).html();
  $(this).parent().parent().children('.title').children('span').html(optionValue);
  $(this).parent().removeClass('opened');
});


$(function() {
  $('.homeslider').vegas({
    delay: 7000,
    timer: false,
    slides: [{
      src: 'http://nataly-bolshakova.com.ua/wp-content/uploads/2016/09/16-07-28-221.jpg'
    }, {
      src: 'http://nataly-bolshakova.com.ua/wp-content/uploads/2015/10/Slideshow_07_size.jpg'
    }, {
      src: 'http://nataly-bolshakova.com.ua/wp-content/uploads/2015/10/Slideshow_02_size.jpg'
    }, {
      src: 'http://nataly-bolshakova.com.ua/wp-content/uploads/2015/10/Slideshow_04_size.jpg'
    }, {
      src: 'http://nataly-bolshakova.com.ua/wp-content/uploads/2015/10/Slideshow_03_size.jpg'
    }, {
      src: 'http://nataly-bolshakova.com.ua/wp-content/uploads/2015/10/Slideshow_01_size.jpg'
    }, {
      src: 'http://nataly-bolshakova.com.ua/wp-content/uploads/2015/10/Slideshow_05_size.jpg'
    }, {
      src: 'http://nataly-bolshakova.com.ua/wp-content/uploads/2015/10/Slideshow_06_size.jpg'
    }, ],
    transitionDuration: '2000'
  });
});

$(document).ready(function() {

  $('.slider-next').click(function(e) {
    e.preventDefault();
    $('.homeslider').vegas('next');
  });

  $('.slider-prev').click(function(e) {
    e.preventDefault();
    $('.homeslider').vegas('previous');
  });


  $('body').bind('vegaswalk', function(e, bg, step) {

    $('.slide_text:eq(' + window.SwitchHomeCount + ')').stop(false, true).fadeOut(1000);

    SwitchHomeCount = bg;

    $('.slide_text:eq(' + window.SwitchHomeCount + ')').fadeIn(1000);

  });
});

function h100PercentHack() {
  // var headerHeight = (window.innerWidth>1023)? 88:78;
  document.getElementById("fullscreen").innerHTML = '.fullscreen{height:' + (window.innerHeight) + 'px}';
}
// "100% height class" hack for class .fullscreen
var el = document.createElement('style');
el.id = 'fullscreen';
el.type = 'text/css';
document.getElementsByTagName('head')[0].appendChild(el);
h100PercentHack();

// var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);
if (isMobile) {
  window.addEventListener("orientationchange", function() {
    h100PercentHack();
  }, false);
} else {
  window.onresize = h100PercentHack;
}

// addition for swipebox, closing img on click on bg
$(function() {
  $(document.body)
    .on('click touchend', '#swipebox-slider .current img', function(e) {
      return false;
    })
    .on('click touchend', '#swipebox-slider .current', function(e) {
      $('#swipebox-close').trigger('click');
    });
});


var empSwiper = undefined;

function employeeSwiper() {
  var screenWidth = window.innerWidth || $(window).width();
  if (screenWidth <= 1024) {
    $('.employee-swiper').removeClass('arrange-slides');
    if (typeof empSwiper == 'undefined') {
      empSwiper = new Swiper('.employee-swiper', {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        nextButton: '.slider-arrow-right',
        prevButton: '.slider-arrow-left',
        breakpoints: {
          1024: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          },
          639: {
            slidesPerView: 1
          }
        }
      });
    }
  } else {
    $('.employee-swiper').addClass('arrange-slides');
    if (typeof empSwiper != 'undefined') {
      empSwiper.destroy();
      empSwiper = undefined;
      $('.employee-swiper .swiper-wrapper').removeAttr('style');
      $('.employee-swiper .swiper-slide').removeAttr('style');
    }
  }

}

$(document).ready(function() {
  employeeSwiper();

});
$(window).on('resize', function() {
  employeeSwiper();
});
