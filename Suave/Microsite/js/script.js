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
  			e.preventDefault();
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
			    	$('#yt-carousel #carousel-container').hide().load('/Suave/youtube_carousel_ajax.html #youtube').fadeIn();
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
			    			setTimeout(function(){
			    				$touchGif.animate({'opacity':'0.6'}, 'fast');	
			    				$touchGif.attr('src','https://s3.amazonaws.com/com.offerpop.datastore/438279/x4VLtX.png');
								$('#social-container').fadeIn();
			    			},1000);
			    		}
			    });

			var $emailEnvelope = $('#email-envelope');
			//Email Trigger
			$('#s-email').click(function(){
				$emailEnvelope.show().animate({left: "+=500"}, 1800);
				$emailEnvelope.fadeOut();
				$emailEnvelope.css('left','0px');
			
			setTimeout(function(){
				window.location = "mailto:?body=Hey%20there!%0A%0AI%20wanted%20to%20let%20you%20know%20I%E2%80%99m%20getting%20a%20%23TouchofGlam%20with%20NEW%20Suave%20Professionals%C2%AE%20Natural%20Infusion.%20Each%20collection%20is%20infused%20with%20specially-chosen%20exotic%20ingredients%20that%20deliver%20noticeable%20results%20and%20contains%20no%20parabens%20or%20dyes.%0A%0AYou%20can%20get%20your%20free%20sample%20of%20NEW%20Suave%20Professionals%C2%AE%20Natural%20Infusion%20by%20clicking%20here%20http%3A%2F%2Fbit.ly%2F1m0wwyH%0A%0ANo%20purchase%20necessary.%20Void%20where%20prohibited.%20Open%20to%2050%20U.S.%20%26%20D.C.%2C%2018%2B.%20Ends%205%2F31%2F14%20or%20while%20supplies%20last.%20For%20rules%2C%20visit%20bit.ly%2F1cVkp3h&subject=Your%20gift%20of%20glam";
				}, 1800);
			});

			//Twitter Trigger
			$('#s-twitter').click(function(){
                    $emailEnvelope.show().animate({left: "+=500"}, 1800);
                    $emailEnvelope.fadeOut();
                    $emailEnvelope.css('left','0px');
              
               setTimeout(function(){
                    window.location = "http://twitter.com/share?text=I%20got%20a%20%23TouchofGlam%20from%20%40SuaveBeauty!%20Get%20your%20free%20sample%3A%20bit.ly%2F1m0wwyH%20NoPurNec%2018%2B%20Ends%205%2F31%2F14%20Rules%20bit.ly%2F1cVkp3h&url=";
                    }, 1800);
               }); 

			//Facebook Trigger
			$('#s-facebook').click(function(){
                    $emailEnvelope.show().animate({left: "+=500"}, 1800);
                    $emailEnvelope.fadeOut();
                    $emailEnvelope.css('left','0px');
              
               setTimeout(function(){
                    window.location = "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsuave.microsite.offerpop.com";
                    }, 1800);
               });

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
		*****MISC
		************/		
		//Direct user to "sign up app" when sample is clicked in product tour
		$('body').on('click','#ginger-sign-up-scroll',function(){
			$('html, body').animate({
				scrollTop:$('.container-narrow .get-a-sample').offset().top
			}, 1500);
		});

		
		//Load Glam4Good Image Carousel on Page load
		$('#glam4good-carousel #glam4good-carousel-load').load('/Suave/glam4good_ajax.html #glam4good-gallery-1');
		//Load new content for Glam4Good Image Carousel on click
		$('#yt-controls .next').click(function(){
			$('#glam4good-carousel #glam4good-carousel-load').hide().load('/Suave/glam4good_ajax.html #glam4good-gallery-1').fadeIn();
			return false;
		});

	});
});