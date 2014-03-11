jQuery(document).ready(function($){
	jQuery(function(){

		/*******************
		*****SIDE NAVIGATION
		*******************/
		//Side Navigation Scroll To Animation
		$('#navigation li a').click(function(){
			var sectionClicked = $(this).attr('id')
			,lastIndex = sectionClicked.length
			,navID = sectionClicked.slice(4,lastIndex);
			$('html, body').animate({
				scrollTop:$('.container-narrow .' + navID).offset().top
			}, 1500);
		});

		/********************
		*****YOUTUBE CAROUSEL
		********************/
		//Initialize Youtube Large View Size & Resize Function
		var windowWidth = $(window).width(),
		youtubeHeight = windowWidth * 0.75;
		if (windowWidth < 767){
			$('#touch-of-glam').css('height', youtubeHeight);
		}

			$(window).resize(function(){
				var windowWidth = $(window).width(),
				youtubeHeight = windowWidth * 0.75;
				if (youtubeHeight < 500){
					$('#touch-of-glam').css('height', youtubeHeight);
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
				var signUpWidth = $('#get-a-sample').width();
				if (signUpWidth < 480){
					$('#get-a-sample').height('1880px');
				}
			}

		/**************
		*****THREE STEP
		***************/
		//Load content for 3 Step Section on page load
		$('#our-products').load('/Suave/three_step_ajax.html #ginger-load');

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
			$('#our-products').load('/Suave/three_step_ajax.html #' + threeStepArray[currentPosition]);
			return false;
		});

		//Three Step Side Controls
		$('body').on('click','.product-thumb',function(){
			var productID = $(this).attr('id')
				,findDash = productID.indexOf('-')
				,changeTo = productID.slice(0,findDash);
			$('#our-products').load('/Suave/three_step_ajax.html #' + changeTo + '-load');
		});


				//Step 1, Step 2, Step 3 Tabs in Product Info Container
				$('body').on('click','#product-info-tabs .btn',function(){
					var stepClicked = $(this).attr('id');
					$('#product-info-tabs a, #product-info-description p, #product-info-description ul').removeClass('active');
					$('#product-info-tabs a#' + stepClicked + ', #product-info-description p.' + stepClicked + ', #product-info-description ul.' + stepClicked).addClass('active');
					return false;
				});


		/**************
		*****GLAM 4 GOOD
		***************/
		//Initialize Glam4Good Header height and Resize
		/*var glamWindowWidth = $(window).width()
			,glamHeaderHeight = windowWidth * 0.1675;
		if (glamWindowWidth < 825){
			$('#glam4good-header').css('height', glamHeaderHeight);
		}

			$(window).resize(function(){
				var glamWindowWidth = $(window).width()
					,glamHeaderHeight = glamWindowWidth * 0.1675;
				if (youtubeHeight < 500){
					$('#glam4good-header').css('height', youtubeHeight);
				}
			});
				*/

	});
});