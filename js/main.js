var w = $('.galimg').width();

$('.galimg').height(w);


$('.galimg img').each(function(){

var imgw = $(this).width();
var imgh = $(this).height();

if ( imgw > imgh ) {
	$(this).addClass('landscape');
	var newW = $(this).width();
	$(this).css('right', (newW-w) / 2);
}
else {
	$(this).addClass('portrait');
	var newh = $(this).height();
	$(this).css('bottom', (newh-w) /2);
}


});