    var fby = fby || [];
    fby.push(['showTab', {
      id: '11559',
      position: 'right',
      color: '#004B87'
    }]);
    (function () {
      var f = document.createElement('script');
      f.type = 'text/javascript';
      f.async = true;
      f.src = '//cdn.feedbackify.com/f.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(f, s);
    })();


        window._wpemojiSettings = {
      "baseUrl": "http:\/\/s.w.org\/images\/core\/emoji\/72x72\/",
      "ext": ".png",
      "source": {
        "concatemoji": "http:\/\/www.georgiancollege.ca\/wp-includes\/js\/wp-emoji-release.min.js"
      }
    };
    ! function (a, b, c) {
      function d(a) {
        var c = b.createElement("canvas"),
          d = c.getContext && c.getContext("2d");
        return d && d.fillText ? (d.textBaseline = "top", d.font = "600 32px Arial", "flag" === a ? (d.fillText(String.fromCharCode(
          55356, 56812, 55356, 56807), 0, 0), c.toDataURL().length > 3e3) : (d.fillText(String.fromCharCode(55357,
          56835), 0, 0), 0 !== d.getImageData(16, 16, 1, 1).data[0])) : !1
      }

      function e(a) {
        var c = b.createElement("script");
        c.src = a, c.type = "text/javascript", b.getElementsByTagName("head")[0].appendChild(c)
      }
      var f, g;
      c.supports = {
        simple: d("simple"),
        flag: d("flag")
      }, c.DOMReady = !1, c.readyCallback = function () {
        c.DOMReady = !0
      }, c.supports.simple && c.supports.flag || (g = function () {
          c.readyCallback()
        }, b.addEventListener ? (b.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1)) :
        (a.attachEvent("onload", g), b.attachEvent("onreadystatechange", function () {
          "complete" === b.readyState && c.readyCallback()
        })), f = c.source || {}, f.concatemoji ? e(f.concatemoji) : f.wpemoji && f.twemoji && (e(f.twemoji), e(f.wpemoji))
      )
    }(window, document, window._wpemojiSettings);


          jQuery(document).ready(function () {
        var $container = jQuery('.home-masonry');
        $container.imagesLoaded(function () {
          $container.masonry({
            itemSelector: '.home-item',
            columnWidth: '.home-item',
            gutterWidth: 30,
            containerStyle: null,
            stamp: '.stamp'
          });
        });
      });

      /*
       * rwdImageMaps jQuery plugin v1.5
       *
       * Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
       *
       * Copyright (c) 2013 Matt Stow
       * https://github.com/stowball/jQuery-rwdImageMaps
       * http://mattstow.com
       * Licensed under the MIT license
       */
      ;
      (function (a) {
        a.fn.rwdImageMaps = function () {
          var c = this;
          var b = function () {
            c.each(function () {
              if (typeof (a(this).attr("usemap")) == "undefined") {
                return
              }
              var e = this,
                d = a(e);
              a("<img />").load(function () {
                var g = "width",
                  m = "height",
                  n = d.attr(g),
                  j = d.attr(m);
                if (!n || !j) {
                  var o = new Image();
                  o.src = d.attr("src");
                  if (!n) {
                    n = o.width
                  }
                  if (!j) {
                    j = o.height
                  }
                }
                var f = d.width() / 100,
                  k = d.height() / 100,
                  i = d.attr("usemap").replace("#", ""),
                  l = "coords";
                a('map[name="' + i + '"]').find("area").each(function () {
                  var r = a(this);
                  if (!r.data(l)) {
                    r.data(l, r.attr(l))
                  }
                  var q = r.data(l).split(","),
                    p = new Array(q.length);
                  for (var h = 0; h < p.length; ++h) {
                    if (h % 2 === 0) {
                      p[h] = parseInt(((q[h] / n) * 100) * f)
                    } else {
                      p[h] = parseInt(((q[h] / j) * 100) * k)
                    }
                  }
                  r.attr(l, p.toString())
                })
              }).attr("src", d.attr("src"))
            })
          };
          a(window).resize(b).trigger("resize");
          return this
        }
      })(jQuery);
      jQuery('img[usemap]').rwdImageMaps();


          jQuery(document).ready(function () {
      //iframe issues
      var propCollector = "";
      var iframeHolder = document.getElementsByTagName("iframe");
      for (var i = 0; i < iframeHolder.length; i++) {
        if (iframeHolder[i].title == "" || iframeHolder[i].title == undefined) {
          if (iframeHolder[i].src.indexOf("www.youtube.com") > -1) {

            iframeHolder[i].title = "Youtube Video Number " + (i + 1).toString();
          }
          if (iframeHolder[i].src.indexOf("assets.adobetm.com") > -1) {

            iframeHolder[i].title = "Adobe Pixel " + (i + 1).toString();
          }
          if (iframeHolder[i].src.indexOf("assets.adobetm.com") > -1) {

            iframeHolder[i].title = "Adobe Pixel " + (i + 1).toString();
          }
          if (iframeHolder[i].src.indexOf("maps.google.ca") > -1 || iframeHolder[i].src.indexOf(
              "www.google.com/maps") > -1 || iframeHolder[i].src.indexOf("www.google.ca/maps") > -1) {

            iframeHolder[i].title = "Google Map " + (i + 1).toString();
          }
          if (iframeHolder[i].src.indexOf("www.georgiancollege.ca/forms/embed.php") > -1) {

            iframeHolder[i].title = "Mach Form " + (i + 1).toString();
          }
          if (iframeHolder[i].src.indexOf("apps.twinesocial.com") > -1) {

            iframeHolder[i].title = "Twine Social Frame " + (i + 1).toString();
          }
          if (iframeHolder[i].src.indexOf("www.facebook.com/connect/") > -1) {

            iframeHolder[i].title = "Facebook Frame " + (i + 1).toString();
          }
          if (iframeHolder[i].id.indexOf("gform_ajax_frame") > -1) {

            iframeHolder[i].title = "Gravity Form " + (i + 1).toString();
          }
          if (iframeHolder[i].id.indexOf("sched-iframed") > -1) {

            iframeHolder[i].title = "Orientation Schedule " + (i + 1).toString();
          }

          if (iframeHolder[i].src.indexOf("internationalorientation2016.sched.org") > -1) {

            iframeHolder[i].title = "Orientation Schedule " + (i + 1).toString();

          }
          //for (var j = 0; j < iframeHolder[i].attributes.length; j++) {
          //          var attrib = iframeHolder[i].attributes[j];
          //      if (attrib.specified) {
          //          console.log(attrib.name + " = " + attrib.value);
          //   }
          //    }
        }
      }

      //identify all links as links
      jQuery('a').attr('role', 'link');
    });