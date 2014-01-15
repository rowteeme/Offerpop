jQuery(function($){

	var blankValue = JSON.stringify($('#actual_code').text());

	var validate = function (){
		var newValue = JSON.stringify($('#actual_code').text());
		if (blankValue !== newValue){
			console.log(blankValue + '' + newValue)
			displayMessage(newValue);
		} else {
			setTimeout(validate, 1000);
		}
	}

		var displayMessage = function (displayText){
			console.log(displayText);
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
			console.log(displayText);
			$(messageCase).appendTo('#actual_code');
			$(messageCase).css('display','block');
		}

	$('#get_code_link').click(function(){
		setTimeout(validate, 1000);
	});


	
});