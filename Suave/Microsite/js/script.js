jQuery(document).ready(function($){
	jQuery(function(){

		/*******************
		*****SIDE NAVIGATION
		*******************/
		//Side Navigation Scroll To Animation
		$('#navigation li a').click(function(e){
			var sectionClicked = $(this).attr('id')
			,lastIndex = sectionClicked.length
			,navID = sectionClicked.slice(4,lastIndex);
			$('html, body').animate({
				scrollTop:$('.container-narrow .' + navID).offset().top
			}, 1500);
			$('#navigation li').removeClass('active');
			$(this).parent().addClass('active');
			window.history.pushState('glam-section', 'updateURL', "/#" + navID);
  			e.preventDefault();
		});

		//********************************************
		//Load in Ginger Product to "Three Step" section & then get offset for url updates
		//navigation object for updating active states
		$('#our-products').load('/Suave/three_step_ajax.html #ginger-load', function(){
				var nav = {
				'section1' : {
					'name' : 'touch-of-glam'
					,'location' : $('#touch-of-glam').offset().top
				}, 'section2' : {
					'name' : 'get-a-sample'
					,'location' : $('#get-a-sample').offset().top
				}, 'section3' : {
					'name' : 'get-a-coupon'
					,'location' : $('#get-a-coupon').offset().top
				}, 'section4' : {
					'name' : 'glam-gallery'
					,'location' : $('#glam-gallery').offset().top
				}, 'section5' : {
					'name' : 'our-products'
					,'location' : $('#our-products').offset().top
				}, 'section6' : {
					'name' : 'glam-4-good'
					,'location' : $('#glam-4-good').offset().top
				}
			}

			//scroll event to determine users location on page & update active states
			$(window).scroll(function(){
				var currentLocation = $(window).scrollTop();
				if (currentLocation >= nav.section6.location){
					window.history.pushState('glam-section', 'updateURL', '/#' + nav.section6.name);
					$('#navigation li').removeClass('active');
					$('#navigation li a#nav-' + nav.section6.name).parent().addClass('active');
				} else if (currentLocation >= nav.section5.location){
					window.history.pushState('glam-section', 'updateURL', '/#' + nav.section5.name);
					$('#navigation li').removeClass('active');
					$('#navigation li a#nav-' + nav.section5.name).parent().addClass('active');
				} else if (currentLocation >= nav.section4.location){
					window.history.pushState('glam-section', 'updateURL', '/#' + nav.section4.name);
					$('#navigation li').removeClass('active');
					$('#navigation li a#nav-' + nav.section4.name).parent().addClass('active');
				} else if (currentLocation >= nav.section3.location){
					window.history.pushState('glam-section', 'updateURL', '/#' + nav.section3.name);
					$('#navigation li').removeClass('active');
					$('#navigation li a#nav-' + nav.section3.name).parent().addClass('active');
				} else if (currentLocation >= nav.section2.location){
					window.history.pushState('glam-section', 'updateURL', '/#' + nav.section2.name);
					$('#navigation li').removeClass('active');
					$('#navigation li a#nav-' + nav.section2.name).parent().addClass('active');
				} else if (currentLocation >= nav.section1.location){
					window.history.pushState('glam-section', 'updateURL', '/#' + nav.section1.name);
					$('#navigation li').removeClass('active');
					$('#navigation li a#nav-' + nav.section1.name).parent().addClass('active');
				} else {
					window.history.pushState('glam-section','updateURL', '/');
				}
			});
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

			/******************************************/
			/* RESIZE SIGN UP APP CONTINER FOR MOBILE */
			/******************************************/
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)){
				var signUpWidth = $('#get-a-sample').width();
				if (signUpWidth < 480){
					$('#get-a-sample').height('1850px');
				}
			}

		/**************
		*****THREE STEP
		***************/
		//Load content for 3 Step Section on page load
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
		var glamWindowWidth = $(window).width()
			,glamHeaderHeight = windowWidth * 0.1675;
		if (glamWindowWidth < 825){
			$('#glam4good-header').css('height', glamHeaderHeight);
		}

			$(window).resize(function(){
				var glamWindowWidth = $('#glam4good-header').width()
					,glamHeaderHeight = glamWindowWidth * 0.1675;
					$('#glam4good-header').css('height', glamHeaderHeight);
			});
		//END Glam4Good Header Sizing

		/************
		*****PARALLAX
		************/		
		//PARALLAX SCROLLING 
		$window = $(window);	          
	     	var $bgobj = $('body'); // assigning the object
	      	
	      	$(window).scroll(function() {     
				// Scroll the background at var speed
				// the yPos is a negative value because we're scrolling it UP!			
				var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
				// Put together our final background position
				var coords = '50% '+ yPos + 'px';
				// Move the background
				$bgobj.css({ backgroundPosition: coords });
			}); // window scroll Ends


		/************
		*****MISC
		************/		
		//Direct user to "sign up app" when sample is clicked in product tour
		$('body').on('click','#ginger-sign-up-scroll',function(){
			$('html, body').animate({
				scrollTop:$('.container-narrow .get-a-sample').offset().top
			}, 1500);
		});


	});
});