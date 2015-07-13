(function( $ ){
  $.fn.pully = function(options) {
    var settings = {
      'newclass'  : 'pullyquote', // class to apply to inserted span
      'prependtoparent' : false // or selector, e.g. 'p' or '.section'
    };
    return this.each(function(){
      if (options) {
        $.extend(settings,options);
      }
      if (settings.prependtoparent) {
        $parent = $(this).closest(settings.prependtoparent);
        if ($parent.data('hasPullquote') != true) { // only create pullquote from first found element within parent
          var elementType;
          switch ($parent.get(0).tagName) {
            case 'DIV':
            case 'SECTION':
            case 'BODY':
              elementType = '<p />';
              break;
            default:
              elementType = '<span />';
          }
          $parent.data('hasPullquote',true).prepend($(elementType).addClass(settings.newclass).html($(this).html()));
        }
      } else {
        $(this).before($('<span />').addClass(settings.newclass).html($(this).html()));
      }
    });
  };
})( jQuery );