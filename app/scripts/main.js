'use strict';

function layout(){
	var dialWidth = $('.dial').width();
	$('.dial').css({'height':dialWidth+'px'});
	$('.circle1').css({'height':dialWidth/2+'px','width':dialWidth/2+'px'});
	$('.circle2').css({'height':dialWidth/3+'px','width':dialWidth/3+'px'});
	$('.shine').css({'height':dialWidth/20+'px','width':dialWidth/20+'px'});

}

$(window).resize(function() {
	layout();
});


layout();
