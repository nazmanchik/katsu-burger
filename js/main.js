$('.carousel').carousel({
  interval: 1000
})

var b = null;
$( '.carousel-frame ul' ).on( 'mousemove', function(e) {
    var container = $(this).parent();
    if ((e.pageX - container.offset().left) < container.width() / 2) {
        var direction = function() {
            container.animate( {scrollLeft: '-=600'}, 1000, 'linear', direction );
        }
        if ((b == false) || (b == null)) {
            b = true;
            container.stop( true ).animate( {scrollLeft: '-=600'}, 1000, 'linear', direction );
        }
    } else {
        var direction = function() {
            container.animate( {scrollLeft: '+=600'}, 1000, 'linear', direction );
        }
        if ((b == true) || (b == null)) {
            b = false;
            container.stop( true ).animate( {scrollLeft: '+=600'}, 1000, 'linear', direction );
        }
    }
}).on ( 'mouseleave', function() {
    var container = $(this).parent();
    container.stop( true );
    b = null;
});