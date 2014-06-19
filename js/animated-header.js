
// Variables //

var header = $('header'),
	headerHeight = header.height(),
	offset = 0,
	lastPos = 0;

$(document).on('scroll', function(){
	var newPos = $(document).scrollTop(),
	pos = newPos-lastPos; 

	if(offset+pos>headerHeight){ 
		offset = headerHeight;
	} else if(newPos < 0){ 
		offset = 0;
	} else {
		offset = offset+pos;
	}
	if (offset < 0){
		offset = 0;
	} else {
		offset = offset;
	}

	header.css('top', (-offset)+'px');

	lastPos = newPos;

});

// Navigation ScrollTo Plugin//


