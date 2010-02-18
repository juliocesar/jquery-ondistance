$.fn.ondistance = function(dist, close, far) {
  var elt = this.get(0), last;
  $(document).mousemove(function(e) {
    // Throttle
    var current = new Date().getTime();
    if (current - last < 500) return;
    last = current;    
    var offset = $(elt).offset(), 
      pos = { x: offset.left+ ($(elt).width() / 2), y: offset.top + ($(elt).height() / 2) };
    var distance = parseInt(Math.sqrt(Math.pow(e.pageX-pos.x,2) + Math.pow(e.pageY-pos.y,2)));
    if (distance <= dist) {
      if ($(elt).data('mouseclose')) return false;
      close(elt);
      $(elt).data('mouseclose', true);
    } else {
      if (!$(elt).data('mouseclose')) return false;
      $(elt).data('mouseclose', false);
      far(elt);
    }
  })
}
