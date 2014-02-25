jQuery(document).ready(function($){
	jQuery(function(){
		//Side Navigation Scroll To Animation
		$('#navigation li a').click(function(){
			var sectionClicked = $(this).attr('id');
			$('html, body').animate({
				scrollTop:$('.container-narrow .' + sectionClicked).offset().top
			}, 1500);
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
				$('#yt-controls .next').click(function(){
			    	$('#carousel-container').load('/Suave/youtube_carousel_ajax.html #youtube');
			    	return false;
			  	});

		//Three Step Section Scripts Below
		//Load content for 3 Step Section on page load
		$('#glam-three-steps').load('/Suave/three_step_ajax.html #ginger-load');

		var threeStepArray = ['ginger-load','macadamia-load','seaweed-load'];
		//Three Step Controls
		$('body').on('click','#three-controls a',function(){
			var current = $('.ajax-load').attr('id')
			,currentPosition = threeStepArray.indexOf(current)
			,buttonClicked = $(this).attr('class');

			if (buttonClicked === 'next'){
				currentPosition++;
				if ( currentPosition > 2 ){
					currentPosition = 0;
				}
			} else{
				currentPosition--;
				if ( currentPosition < 0 ){
					currentPosition = 2;
				}
			}
			$('#glam-three-steps').load('/Suave/three_step_ajax.html #' + threeStepArray[currentPosition]);
			return false;
		});


	});
});