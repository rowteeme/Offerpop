jQuery(function($){

	var bitLy = "http://bit.ly/1bTTLUT"
		,blankValue = JSON.stringify($('#actual_code').text());

	//Check for coupon code
	var validate = function (){
		var newValue = JSON.stringify($('#actual_code').text());
		if (blankValue !== newValue){
			displayMessage(newValue);
		} else {
			setTimeout(validate, 1000);
		}
	}

		//Display Win or Loss Message
		var displayMessage = function (displayText){
			$('#instructions').css('display','none');
			var messageCase;
			switch(displayText){
				case "\"50GC\"" :
				messageCase = "#gCardWrapper";
				break;

				case "\"FLAGFBSET\"" : 
				messageCase = "#flagFbSetWrapper";
				break;

				case "\"FBBOWL\"" : 
				messageCase = "#fbBowlWrapper";
				break;

				case "\"FBTRAY\"" : 
				messageCase = "#fbTrayWrapper";
				break;

				case "\"FPC\"" : 
				messageCase = "#fpcWrapper";
				break;

				case "\"DC\"" : 
				messageCase = "#dcWrapper";
				break;

				case "\"LOSS\"" : 
				messageCase = "#sorryWrapper";
				break;

			}
			$(messageCase).appendTo('#view_code');	
			$(messageCase).css('display','block');
		}

	$('#get_code_link').click(function(){
		setTimeout(validate, 1000);
	});

	//Facebook Share Copy
	$('<a href="#"><img id="facebookShare" src="https://opop.cachefly.net/RobLum/Misc/facebook_share_bgc_011314.png"></a>').appendTo('#socialContainer');
			
			$('#facebookShare').parent().click(function(){
				FB.ui({
					method: 'feed',
					link: bitLy,
					caption: 'I just took Unilever\'s Big Game Challenge and INSTANTLY won a prize! I\'m also entered to win a 55" TV. Take the challenge for yourself and enter for a chance to win big!',
					description: 'Unilever\'s Big Game Challenge - Pick your favorites in the Big Game Challenge and you could INSTANTLY win one of hundreds of prizes. You\'ll also be entered to win the grand prize: a 55" flat screen TV with surround sound!',
				}, function(response){});

			});

	//Twitter Share Copy
	$('<a target="_blank" href="http://twitter.com/share?text=I%20just%20took%20%40unileverusa%E2%80%99s%20Big%20Game%20Challenge%2C%20INSTANTLY%20won%20a%20prize%20%26%20entered%20to%20win%20a%2055%22%20TV.%20Take%20the%20Challenge%3A&url=' + bitLy + '"><img src="https://opop.cachefly.net/RobLum/Misc/twitter_share_bgc_011314.png"></a>').appendTo('#socialContainer');
			
	
});
