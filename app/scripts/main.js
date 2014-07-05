'use strict';

function layout(){
	var dialWidth = Math.min($(window).width()/2,$(window).height()/2);
	var containerWidth = $('#dial-container').width();
	console.log('containerWidth ', containerWidth);
	$('.dial').css({'height':dialWidth+'px','width':dialWidth+'px', 'margin-left':(containerWidth-dialWidth)/2+'px'});
	$('.circle1').css({'height':dialWidth/2+'px','width':dialWidth/2+'px'});
	$('.circle2').css({'height':dialWidth/3+'px','width':dialWidth/3+'px'});
	$('.shine').css({'height':dialWidth/20+'px','width':dialWidth/20+'px'});
	$('#arrow-container').css({left:(containerWidth-dialWidth)/2+'px'});
}

$(window).resize(function() {
	layout();
});


layout();
