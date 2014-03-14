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
		var domLoadResize = function(event){
			var windowWidth = $(window).width();
			if ( $('#touch-of-glam img').is(':visible')){
				var imageHeight = windowWidth * 0.375;
					if (event && imageHeight < 300){
						$('#touch-of-glam').css('height', imageHeight);
					} else if (windowWidth < 800){
						$('#touch-of-glam').css('height', imageHeight);
					}
			} else if ($('#touch-of-glam iframe').is(':visible')){
				var youtubeHeight = windowWidth * 0.75;
					if (event && youtubeHeight < 500){
						$('#touch-of-glam').css('height', youtubeHeight);
					} else if (windowWidth >= 800){
						youtubeHeight = 500;
						$('#touch-of-glam').css('height', youtubeHeight);
					} else if (windowWidth < 800){
						$('#touch-of-glam').css('height', youtubeHeight);
					}
			}
		}

		domLoadResize();

			//Responsive event for Youtube or Image Container
			$(window).resize(function(){
				domLoadResize('resized');
			});

			//Swap image for youtube video and resize container
			$('#touch-of-glam img').click(function(){
				$(this).fadeOut();
				$('#touch-of-glam iframe').fadeIn('slow',domLoadResize);
				var youtubeLink = $('#touch-of-glam iframe').attr('src');
				$('#touch-of-glam iframe').attr('src',youtubeLink + '&rel=0&autoplay=1');
			});

				/************************/
				/*  Temporarily Hidden  */
				//Youtube Carousel Script
				$('#yt-controls .next').click(function(){
			    	$('#carousel-container').hide().load('/Suave/youtube_carousel_ajax.html #youtube').fadeIn();
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

			var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
          	var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

          	$(window).on(messageEvent, function (e) {
  				var data = e.originalEvent.data;
				if (data === 'resize') {
					$('#get-a-sample').addClass('after-sign-up')
				}
          	});

          	/******************/
          	/* Touch to Share */
          	/******************/
			var startTime, endTime
			,$touchGif = $('#touch-gif img');

			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)){
				var eventStart = 'touchstart'
				,eventEnd = 'touchend';
			} else{
				var eventStart = 'mousedown'
				,eventEnd = 'mouseup';
			}

			    $touchGif.on(eventStart, function () {
			        var currentLink = $touchGif.attr('src');
			        if (currentLink.indexOf('x4VLtX') > -1){
			            return true;
			        } else{
			            $touchGif.attr('src','https://s3.amazonaws.com/com.offerpop.datastore/438279/kZkbxi.gif');
			            startTime = new Date().getTime();
			        }
			    });

			    $touchGif.on(eventEnd, function () {
			        endTime = new Date().getTime();
			        if (endTime - startTime < 1000) {
			            $touchGif.attr('src','https://s3.amazonaws.com/com.offerpop.datastore/438279/5msNih.png');
			        }
			        else if (endTime - startTime > 1000){
			            $touchGif.animate({'opacity':'0.6'}, 'fast');
			            $touchGif.attr('src','https://s3.amazonaws.com/com.offerpop.datastore/438279/x4VLtX.png');
						$('#social-container').fadeIn();
			       }
			    });

	          	//Update Share copy
				// $('#s-facebook').click(function(){
				// FB.ui({
				//   method: 'feed',
				//   link: 'https://developers.facebook.com/docs/dialogs/',
				//   caption: 'An example caption',
				// }, function(response){});
				// });


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
			,glamHeaderHeight = glamWindowWidth * 0.1675;
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
			});


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