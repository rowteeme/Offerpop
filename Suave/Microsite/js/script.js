jQuery(function($){
	//Side Navigation Scroll To Animation
	$('#navigation li a').click(function(){
		var sectionClicked = $(this).attr('id');
		$('html, body').animate({
			scrollTop:$('.container-narrow .' + sectionClicked).offset().top
		}, 2000);
	});

	//Initialize Youtube Large View Size & Resize Function
	var windowWidth = $(window).width(),
	youtubeHeight = windowWidth * 0.75;
	if (windowWidth < 767){
		$('#yt-large').css('height', youtubeHeight);
	}

	$(window).resize(function(){
		var windowWidth = $(window).width(),
		youtubeHeight = windowWidth * 0.75;
		if (youtubeHeight < 500){
			$('#yt-large').css('height', youtubeHeight);
		}
	});

	//Youtube Carousel Script
	$('.next').click(function(){
    	$('#carousel-container').load('/Suave/ajax_load.html');
    	return false;
  	});


});
