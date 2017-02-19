<!DOCTYPE html>
<html lang="cn">
<head>
  <meta charset="UTF-8">
  <title>rose</title>
  <script type="text/javascript">
    (function (win, doc){

      let scale
      var metaEl = doc.querySelector('meta[name="viewport"]'),
          metaCtt = metaEl ? metaEl.content : '',
          matchScale = metaCtt.match(/initial\-scale=([\d\.]+)/),
          matchWidth = metaCtt.match(/width=([^,\s]+)/)

      if ( !metaEl ) { // REM
          var docEl = doc.documentElement,
              maxwidth = docEl.dataset.mw || 960, // 每 dpr 最大页面宽度
              dpr = 1,
              tid
          scale = docEl.clientWidth / 1920
          docEl.removeAttribute('data-mw')
          docEl.dataset.dpr = dpr
          metaEl = doc.createElement('meta')
          metaEl.name = 'viewport'
          metaEl.content = fillScale(scale)
          docEl.firstElementChild.appendChild(metaEl)

          var refreshRem = function() {
              var width = docEl.getBoundingClientRect().width
              if (width / dpr > maxwidth) {
                  width = maxwidth * dpr
              }

              scale = docEl.clientWidth / 1920
              var rem = width / 10
              docEl.style.fontSize = rem + 'px'
              console.log(scale)
              docEl.style.zoom = scale

          }

          win.addEventListener('resize', function() {
              clearTimeout(tid)
              tid = setTimeout(refreshRem, 300)
          }, false)
          win.addEventListener('pageshow', function(e) {
              if (e.persisted) {
                  clearTimeout(tid)
                  tid = setTimeout(refreshRem, 300)
              }
          }, false)

          refreshRem()
      } else if ( isMobile && !matchScale && ( matchWidth && matchWidth[1] != 'device-width' ) ) { // 定宽
          var width = parseInt(matchWidth[1]),
              iw = win.innerWidth || width,
              ow = win.outerWidth || iw,
              sw = win.screen.width || iw,
              saw = win.screen.availWidth || iw,
              ih = win.innerHeight || width,
              oh = win.outerHeight || ih,
              ish = win.screen.height || ih,
              sah = win.screen.availHeight || ih,
              w = Math.min(iw,ow,sw,saw,ih,oh,ish,sah)
          scale = w / width
          if ( scale < 1 ) {
              metaEl.content = metaCtt + ',' + fillScale(scale)
          }
      }

      function fillScale(scale) {
          return 'initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale
      }
    })(window, document);
  </script>
</head>
<body>
  <div id="app"></div>
</body>
</html>
