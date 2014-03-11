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

			/* RESIZE SIGN UP APP CONTINER FOR MOBILE */
			/******************************************/
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)){
				var signUpWidth = $('#sign-up-app').width();
				if (signUpWidth < 480){
					$('#sign-up-app').height('1880px');
				}
			}

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

		//Three Step Side Controls
		$('body').on('click','.product-thumb',function(){
			var productID = $(this).attr('id')
				,findDash = productID.indexOf('-')
				,changeTo = productID.slice(0,findDash);
			$('#glam-three-steps').load('/Suave/three_step_ajax.html #' + changeTo + '-load');
		});


				//Step 1, Step 2, Step 3 Tabs in Product Info Container
				$('body').on('click','#product-info-tabs .btn',function(){
					var stepClicked = $(this).attr('id');
					$('#product-info-tabs a, #product-info-description p, #product-info-description ul').removeClass('active');
					$('#product-info-tabs a#' + stepClicked + ', #product-info-description p.' + stepClicked + ', #product-info-description ul.' + stepClicked).addClass('active');
					return false;
				});


	});
});