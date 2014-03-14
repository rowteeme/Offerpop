jQuery(document).ready(function($){
	jQuery(function(){
		
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
				}
				/*, 'section4' : {
					'name' : 'glam-gallery'
					,'location' : $('#glam-gallery').offset().top
				}*/
				, 'section5' : {
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
				} 
				/*else if (currentLocation >= nav.section4.location){
					window.history.pushState('glam-section', 'updateURL', '/#' + nav.section4.name);
					$('#navigation li').removeClass('active');
					$('#navigation li a#nav-' + nav.section4.name).parent().addClass('active');
				}*/ 
				else if (currentLocation >= nav.section3.location){
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

			var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
          	var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

          	$(window).on(messageEvent, function (e) {
  				var data = e.originalEvent.data;
				if (data === 'resize') {
					$('#get-a-sample').addClass('after-sign-up')
				} else if (data === 'signup-top'){
					$('html, body').animate({
						scrollTop:$('.container-narrow .get-a-sample').offset().top
					}, 1500);
				}
          	});

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


	});
});