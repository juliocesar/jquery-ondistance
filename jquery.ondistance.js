(function($) {
  $.fn.ondistance = function(specified, close, far) {
    var elt = this.get(0), 
      last,
      offset = $(elt).offset(),
      center = { x: offset.left + ($(elt).width() / 2), y: offset.top + ($(elt).height() / 2) };
    $(document).mousemove(function(e) {
      // Throttle
      var current = new Date().getTime();
      if (current - last < 500) return;
      last = current;    
      var distance = parseInt(Math.sqrt(Math.pow(e.pageX-center.x, 2) + Math.pow(e.pageY-center.y, 2)));
      if (specified >= distance) {
        if ($(elt).data('mouseclose') == true) return false;
        $(elt).data('mouseclose', true);
        close(elt);        
      } else {
        if ($(elt).data('mouseclose') == false) return false;
        $(elt).data('mouseclose', false);
        far(elt);        
      }
    })
  }  
})(jQuery);
