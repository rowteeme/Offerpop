jQuery(function($){
      $('#our-products').load('/Suave/three_step_ajax.html #ginger-load');

      //Create indexOf for IE 8
      if (!Array.prototype.indexOf){
        Array.prototype.indexOf = function(elt /*, from*/){
          var len = this.length >>> 0;
          var from = Number(arguments[1]) || 0;
            from = (from < 0)
              ? Math.ceil(from)
              : Math.floor(from);
                if (from < 0)
                  from += len;
                    for (; from < len; from++){
                    if (from in this &&
                      this[from] === elt)
                      return from;
                  }
                return -1;
        };
      }

      //Fix Background Full Screen
      $(window).load(function() {    
                  var theWindow        = $(window),
                      $bg              = $("#bg"),
                      aspectRatio      = $bg.width() / $bg.height();

                  function resizeBg() {
                    if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
                        $bg
                          .removeClass()
                          .addClass('bgheight');
                    } else {
                        $bg
                          .removeClass()
                          .addClass('bgwidth');
                    }
                  }
                  theWindow.resize(resizeBg).trigger("resize");
                });

});