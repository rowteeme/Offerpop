jQuery(document).ready(function(){
jQuery(function($){
	//UPDATE BITLY LINK HERE
	var bitlyLink = '18iRalR';

	//Move Legal
	$('#legal').prependTo('.CFooter');

	//Adjust text position mobile
	if ($('#app_canvas_header').length > 0 ){
		$('#topDescription').css('top','275px');
	}

	//Dynamic FB Share - Infographic
	$('#stateFB').click(function(){
		var currentState = $('#stateSelection').val()
			,shareImage = stateData[currentState].shareImg
			,stateNameShare = stateData[currentState].state
			,stateCaption = stateData[currentState].fbCaption
			,statePercentShare = stateData[currentState].percent;

		FB.ui({
			  method: 'feed',
			  name: 'Unilever USA',
			  link: 'http://bit.ly/' + bitlyLink,
			  caption: 'In ' + stateNameShare + ', ' + stateCaption + ' children don’t have enough to eat.',
			  description: 'In ' + stateNameShare + ', ' + statePercentShare + '% of kids are food insecure and face periods without enough to eat. To help, Unilever is donating two million meals. Do your part by learning about food insecurity in your state and what you can do about it. #letsaddhope',
			  picture: shareImage,
			}, function(response){});

	});

	//Dynamic Twitter Share - Infographic
	$('#stateTW').click(function(){
			var currentState = $('#stateSelection').val()
			   ,stateNameShare = stateData[currentState].state
			   ,statePercentShare = stateData[currentState].percent;

		$(this).attr('href', 'https://twitter.com/share?url=http%3A//bit.ly/' + bitlyLink + '&text=' + statePercentShare + '%25%20of%20children%20in%20' + stateNameShare + '%20don%27t%20have%20enough%20to%20eat.%20Help%20%40unileverusa%20share%20the%20facts%20%23letsaddhope');

	});

	//Google Analytics Event Tracking
	//===============================

		$('#stateSelection').change(function(){
			var currentState = this.value
				,stateName = JSON.stringify(stateData[currentState].state).replace(/ /g,'');
			//track("StateSelection", stateName + "Click");
		});

	//===============================
	//Google Analytics Event Tracking - End

	//Change content based on dropdown
	$('#stateSelection').on('change', function(){
		var currentState = this.value
		    ,stateInfo = stateData[currentState].info
		    ,stateName = stateData[currentState].state;
		$('.infographics img').removeAttr('src');
		$('.infographics img').attr('src',stateInfo);

			if (currentState !== "unitedstates"){
				$('#foodBankState').css('display','block');
			} else { 
				$('#foodBankState').css('display','none');
			}

		$('#foodBankState span').text((stateName).toUpperCase());
		$('#foodBanks').html('');

			for (var prop in stateData[currentState].foodBank){
				//Create variables for importing Food Banks
				var bank = stateData[currentState].foodBank[prop]
				   ,bankName = bank.name
				   ,bankAddress = bank.address
				   ,bankAddress2 = bank.address2
				   ,bankPhone = bank.phone
				   ,bankURL = bank.url
				   ,bankFB = bank.facebook
				   ,bankTW = bank.twitter
				   ,bankGmaps = bank.gmaps
				   ,newDiv = document.createElement('div')
				   ,leftDiv = document.createElement('div')
				   ,rightDiv = document.createElement('div')
				   ,newHeadline = document.createElement('h4')
				   ,newAddress = document.createElement('p')
				   ,newAddress2 = document.createElement('p')
				   ,newPhone = document.createElement('p')
				   ,newURL = document.createElement('a')
				   ,newMaps = document.createElement('img')
				   ,newFacebook = document.createElement('img')
				   ,newTwitter = document.createElement('img');

				   //Create DOM housing elements
				   $(newDiv).attr('class','foodBankItem');
				   $(leftDiv).attr('class','leftDiv');
				   $(rightDiv).attr('class','rightDiv');
				   //Populate Data
				   $(newHeadline).text(bankName);
				   		$(newHeadline).appendTo(leftDiv);
				   $(newAddress).text(bankAddress);
				   		$(newAddress).appendTo(leftDiv);
				   $(newAddress2).text(bankAddress2);
				   		$(newAddress2).appendTo(leftDiv);
				   $(newPhone).text(bankPhone);
				   		$(newPhone).appendTo(leftDiv);
				   $(newURL).text(bankURL);
				   $(newURL).attr('href', 'http://www.' + bankURL);
				   $(newURL).attr('target','_blank');
				   		$(newURL).appendTo(leftDiv);	
				   $(leftDiv).appendTo(newDiv);

				    //Add social icon for Bank if link exists
				   	if (bankGmaps !== ""){
				   		$(newMaps).attr('src','https://s3.amazonaws.com/com.offerpop.datastore/438279/UBT71x.jpg');
				   			$(newMaps).appendTo(rightDiv);
				   		}
				   	if (bankFB !== ""){
				   		$(newFacebook).attr('src','https://s3.amazonaws.com/com.offerpop.datastore/438279/argc5g.jpg');
				   			$(newFacebook).appendTo(rightDiv);
				   		}
				   	if (bankTW !== ""){
				   		$(newTwitter).attr('src','https://s3.amazonaws.com/com.offerpop.datastore/438279/x5o7xo.jpg');
							$(newTwitter).appendTo(rightDiv);
						}

					//Add Social Links for Food Banks
				   	$(rightDiv).appendTo(newDiv);
					   	$(newMaps).wrap('<a class="mapsocial" href="'+ bankGmaps +'" target="_blank"></a>');
					   	$(newFacebook).wrap('<a class="fbsocial" href="'+ bankFB +'" target="_blank"></a>');
					   	$(newTwitter).wrap('<a class="twsocial" href="'+ bankTW +'" target="_blank"></a>');
				   $('<hr id="banksHR">').appendTo(newDiv);		   
				   $(newDiv).appendTo('#foodBanks');
			}
			$('.foodBankItem').last().children().remove('hr');
	});
});

if (jQuery.browser.mozilla) {
   $('#stateSelection').wrap('<span class="css-select-moz"></span>');
}
});


//State Data Object
var stateData = {
	"unitedstates" : {
			 "state" : "United States"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/united_states2.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/united_states2.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "20"
			,"foodBank" : {
					
			} 			
	}
	,"alabama" : {
	 		 "state" : "Alabama"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/alabama.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/alabama.jpg"
			,"fbCaption": "1 in 4"
			,"percent" : "26"
			,"foodBank" : {
					 "one" : {
						 "name" : "Community Food Bank of Central Alabama"
						,"address" : "107 Walter Davis Drive"
						,"address2" : "Birmingham, AL 35209"
						,"phone" : "205-942-8911"
						,"url" : "feedingal.org"
						,"facebook" : "https://www.facebook.com/pages/Community-Food-Bank-of-Central-Alabama/140464948519"
						,"twitter" : "https://twitter.com/feedingAL"
						,"gmaps" : "https://maps.google.com/maps?q=107+Walter+Davis+Drive+Birmingham,+AL+35209"
					}
					,"two" : {
						 "name" : "Food Bank of North Alabama"
						,"address" : "2000 B. Vernon Ave. P.O. Box 18607"
						,"address2" : "Huntsville, AL 35805"
						,"phone" : "256-539-2256"
						,"url" : "fbofna.org"
						,"facebook" : ""
						,"twitter" : ""
						,"gmaps" : "https://maps.google.com/maps?q=2000+B.+Vernon+Ave.+Huntsville,+AL+35805"
					}
					,"three" : {
						 "name" : "Montgomery Area Food Bank"
						,"address" : "521 Trade Center Street"
						,"address2" : "Montgomery, AL 36108-2107"
						,"phone" : "334-263-3784"
						,"url" : "montgomeryareafoodbank.org"
						,"facebook" : "https://www.facebook.com/MontgomeryAreaFoodBankInc"
						,"twitter" : ""
						,"gmaps" : "https://maps.google.com/maps?q=521+Trade+Center+Street+Montgomery,+AL+36108-2107"
					}
					,"four" : {
						 "name" : "Bay Area Food Bank"
						,"address" : "5248 Mobile South Street"
						,"address2" : "Theodore, AL 36582"
						,"phone" : "251-653-1617"
						,"url" : "bayareafoodbank.org"
						,"facebook" : "https://www.facebook.com/BayAreaFoodBank"
						,"twitter" : "https://twitter.com/BayAreaFoodBank"
						,"gmaps" : "https://maps.google.com/maps?q=5248+Mobile+South+Street+Theodore,+AL+36582"
					}
			} 
	}
	,"alaska" : {
			 "state" : "Alaska"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/alaska.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/alaska.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "20"
			,"foodBank" : {
					"one" : {
						 "name" : "Food Bank of Alaska, Inc."
						,"address" : "2121 Spar Avenue"
						,"address2" : "Anchorage, AK 99501-1886"
						,"phone" : "907-272-3663"
						,"url" : "foodbankofalaska.org"
						,"facebook" : "https://www.facebook.com/foodbankofalaska"
						,"twitter" : "https://twitter.com/foodbankofAK"
						,"gmaps" : "https://maps.google.com/maps?q=2121+Spar+Avenue+Anchorage,+AK+99501-1886"
					}
			} 			
	}
	,"arkansas" : {
			 "state" : "Arkansas"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/arkansas.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/arkansas.jpg"
			,"fbCaption": "1 in 4"
			,"percent" : "28"
			,"foodBank" : {
					"one" : {
						 "name" : "Northwest Arkansas Food Bank"
						,"address" : "1378 June Self Drive"
						,"address2" : "Bethel Heights, AR 72764"
						,"phone" : "479-872-8774"
						,"url" : "NWAfoodbank.org"
						,"facebook" : "https://www.facebook.com/nwafoodbank"
						,"twitter" : "https://twitter.com/nwafoodbank"
						,"gmaps" : "https://maps.google.com/maps?q=1378+June+Self+Drive+Bethel+Heights,+AR+72764"
					}
					,"two" : {
						 "name" : "River Valley Regional Food Bank"
						,"address" : "1420 N. 32nd Street PO Box 4069"
						,"address2" : "Ft. Smith, AR 72914"
						,"phone" : "479-785-0582"
						,"url" : "rvrfoodbank.org"
						,"facebook" : "https://www.facebook.com/RiverValleyRegionalFoodBank"
						,"twitter" : ""
						,"gmaps" : "https://maps.google.com/maps?q=1420+N.+32nd+Street+Ft.+Smith,+AR+72914"
					}
					,"three" : {
						 "name" : "Food Bank of Northeast Arkansas"
						,"address" : "3414 One Place"
						,"address2" : "Jonesboro, AR 72402"
						,"phone" : "870-932-3663"
						,"url" : "foodbankofnea.org"
						,"facebook" : ""
						,"twitter" : ""
						,"gmaps" : "https://maps.google.com/maps?q=3414+One+Place+Jonesboro,+AR+72402"
					}
					,"four" : {
						 "name" : "Arkansas Foodbank"
						,"address" : "4301 W 65th St"
						,"address2" : "Little Rock, AR 72209"
						,"phone" : "501-565-8121"
						,"url" : "arkansasfoodbank.org"
						,"facebook" : "https://www.facebook.com/arkansasfoodbank"
						,"twitter" : "https://twitter.com/arfoodbank"
						,"gmaps" : "https://maps.google.com/maps?q=4301+W+65th+St+Little+Rock,+AR+72209"
					}
					,"five" : {
						 "name" : "Harvest Texarkana Regional Food Bank, Inc"
						,"address" : "3120 East 19th Street P.O. Box 707"
						,"address2" : "Texarkana, AR 71854"
						,"phone" : "870-774-1398"
						,"url" : "harvesttexarkana.org"
						,"facebook" : "https://www.facebook.com/harvesttxk"
						,"twitter" : "https://twitter.com/HarvestTxK"
						,"gmaps" : "https://maps.google.com/maps?q=3120+East+19th+Street+Texarkana,+AR+71854"
					}
			} 
	}
	,"arizona" : {
			 "state" : "Arizona"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/arizona.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/arizona.jpg"
			,"fbCaption": "2 in 7"
			,"percent" : "30"
			,"foodBank" : {
					"one" : {
						 "name" : "United Food Bank"
						,"address" : "245 South Nina Drive"
						,"address2" : "Mesa, AZ 85210"
						,"phone" : "480-926-4897"
						,"url" : "unitedfoodbank.org"
						,"facebook" : "https://www.facebook.com/UnitedFoodBank"
						,"twitter" : "https://twitter.com/UnitedFoodBank"
						,"gmaps" : "https://maps.google.com/maps?q=245+South+Nina+Drive+Mesa,+AZ+85210"
					}
					,"two" : {
						 "name" : "St. Mary's Food Bank Alliance"
						,"address" : "2831 N. 31st Avenue"
						,"address2" : "Pheonix, AZ 85009"
						,"phone" : "602-242-3663"
						,"url" : "firstfoodbank.org"
						,"facebook" : "https://www.facebook.com/firstfoodbank"
						,"twitter" : "https://twitter.com/StMarysFoodBank"
						,"gmaps" : "https://maps.google.com/maps?q=2831+N.+31st+Avenue+Phoenix,+AZ+85009"
					}
					,"three" : {
						 "name" : "Community Food Bank of Southern Arizona"
						,"address" : "3003 South Country Club Road PO BOX 26727"
						,"address2" : "Tucson, AZ 85726"
						,"phone" : "520-622-0525"
						,"url" : "communityfoodbank.org"
						,"facebook" : "https://www.facebook.com/foodbankofsouthernarizona?sk=wall"
						,"twitter" : "https://twitter.com/foodbanktucson"
						,"gmaps" : "https://maps.google.com/maps?q=3003+South+Country+Club+Road+Tucson,+AZ+85726-6727"
					}
					,"four" : {
						 "name" : "Yuma Community Food Bank"
						,"address" : "2404 E. 24th St. Ste A"
						,"address2" : "Yuma, AZ 85365"
						,"phone" : "928-343-1243"
						,"url" : "yumafoodbank.org"
						,"facebook" : "https://www.facebook.com/yumafoodbank"
						,"twitter" : ""
						,"gmaps" : "https://maps.google.com/maps?q=2404+E+24th+St.+Ste.+A+Yuma,+AZ+85365"
					}
			} 
	}
	,"california" : {
			 "state" : "California"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/california.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/california.jpg"
			,"fbCaption": "1 in 4"
			,"percent" : "27"
			,"foodBank" : {
					"one" : {
						 "name" : "Food Bank of Contra Costa and Solano"
						,"address" : "4010 Nelson Ave PO Box 6324"
						,"address2" : "Concord, CA 94520"
						,"phone" : "925-676-7543"
						,"url" : "foodbankccs.org"
						,"facebook" : "https://www.facebook.com/foodbankccs"
						,"twitter" : "https://twitter.com/foodbankccs"
						,"gmaps" : "https://maps.google.com/maps?q=4010+Nelson+Ave+Concord,+CA+94520"
					}
					,"two" : {
						 "name" : "Community Food Bank"
						,"address" : "3403 E. Central Ave"
						,"address2" : "Fresno, CA 93725"
						,"phone" : "559-237-3663"
						,"url" : "communityfoodbank.net"
						,"facebook" : "https://www.facebook.com/Communityfoodbankcentralvalley"
						,"twitter" : "https://twitter.com/CFBFresno"
						,"gmaps" : "https://maps.google.com/maps?q=3403+E.+Central+Ave+Fresno,+CA+93725"
					}
					,"three" : {
						 "name" : "Find Food Bank"
						,"address" : "83-775 Citrus Ave PS Box 10080"
						,"address2" : "Indio, CA 92202"
						,"phone" : "760-775-3663"
						,"url" : "FINDfoodbank.org"
						,"facebook" : "https://www.facebook.com/FINDFoodBank"
						,"twitter" : "https://twitter.com/FINDFoodBank"
						,"gmaps" : "https://maps.google.com/maps?q=83-775+Citrus+Ave+Indio,+CA+92202"
					}
					,"four" : {
						 "name" : "Second Harvest Food Bank of Orange County"
						,"address" : "8014 Marine Way"
						,"address2" : "Irvine, CA 92618"
						,"phone" : "949-653-2900"
						,"url" : "FeedOC.org"
						,"facebook" : "https://www.facebook.com/SecondHarvestFoodBank"
						,"twitter" : "https://twitter.com/secondharvestfb"
						,"gmaps" : "https://maps.google.com/maps?q=8014+Marine+Way+Irvine,+CA+92618"
					}
					,"five" : {
						 "name" : "Los Angeles Regional Food Bank"
						,"address" : "1734 E. 41st Street"
						,"address2" : "Los Angeles, CA 90058"
						,"phone" : "323-234-3030"
						,"url" : "lafoodbank.org/"
						,"facebook" : "http://www.facebook.com/lafoodbank"
						,"twitter" : "http://twitter.com/lafoodbank"
						,"gmaps" : "http://maps.google.com/maps?q=1734%20E.%2041st%20Street%20Los%20Angeles,%20CA%2090058-1502"
					}
					,"six" : {
						 "name" : "Second Harvest Food Bank of San Joaquin and Stanislaus Counties"
						,"address" : "704 E. Industrial Park Drive"
						,"address2" : "Manteca, CA 95337"
						,"phone" : "209-239-2091"
						,"url" : "localfoodbank.org/"
						,"facebook" : "http://www.facebook.com/localfoodbank"
						,"twitter" : "http://twitter.com/FightingHunger"
						,"gmaps" : "http://maps.google.com/maps?q=704%20E.%20Industrial%20Park%20Drive%20Manteca,%20CA%2095337"
					}
					,"seven" : {
						 "name" : "Alameda County Community Food Bank"
						,"address" : "7900 Edgewater Drive PO Box 2599 "
						,"address2" : ""
						,"phone" : "510-635-3663"
						,"url" : "accfb.org/"
						,"facebook" : "http://www.facebook.com/alcofoodbank"
						,"twitter" : "http://twitter.com/ACCFB"
						,"gmaps" : "http://maps.google.com/maps?q=7900%20Edgewater%20Drive%20Oakland,%20CA%2094621"
					}
					,"eight" : {
						 "name" : "Food Share, INC."
						,"address" : "4156 Southbank Road"
						,"address2" : "Oxnard, CA 93036"
						,"phone" : "805-983-7100"
						,"url" : "foodshare.com/"
						,"facebook" : "http://www.facebook.com/FoodShareofVenturaCounty"
						,"twitter" : "http://twitter.com/FoodshareVC"
						,"gmaps" : "http://maps.google.com/maps?q=4156%20Southbank%20Road%20Oxnard,%20CA%2093036"
					}
					,"nine" : {
						 "name" : "Second Harvest Food Bank Serving Riverside and San Bernardino Cos."
						,"address" : "2950 B Jefferson Street"
						,"address2" : "Riverside, CA 92504"
						,"phone" : "951-359-4757"
						,"url" : "secondharvest.us/"
						,"facebook" : "http://www.facebook.com/secondharvest.us"
						,"twitter" : ""
						,"gmaps" : "http://maps.google.com/maps?q=2950%20-%20B%20Jefferson%20Street%20Riverside,%20CA%2092504-4360"
					}
					,"ten" : {
						 "name" : "Community Resources Council/Placer Food Bank"
						,"address" : "8284 Industrial Ave"
						,"address2" : "Roseville, CA 95678"
						,"phone" : "916-783-0481"
						,"url" : "placerfoodbank.org/"
						,"facebook" : "http://www.facebook.com/placerfoodbank"
						,"twitter" : "http://twitter.com/placerfoodbank"
						,"gmaps" : "http://maps.google.com/maps?q=8284%20Industrial%20Ave%20Roseville,%20CA%2095678"
					}
					,"eleven" : {
						 "name" : "Food Bank for Monterey County"
						,"address" : "815 W. Market Street, Suite 5"
						,"address2" : "Salinas, CA 93901"
						,"phone" : "831-758-1523"
						,"url" : "food4hungry.org/"
						,"facebook" : "http://www.facebook.com/TheFoodBankforMontereyCounty"
						,"twitter" : ""
						,"gmaps" : "http://maps.google.com/maps?q=815%20W.%20Market%20Street,%20Suite%205%20Salinas,%20CA%2093901"
					}
					,"twelve" : {
						 "name" : "Feeding America San Diego"
						,"address" : "9455 Waples Streetm Suite 135"
						,"address2" : "San Diego, 92121"
						,"phone" : "858-452-3663"
						,"url" : "feedingamericasd.org/"
						,"facebook" : "http://www.facebook.com/feedingamericasd"
						,"twitter" : "http://twitter.com/FeedingSanDiego"
						,"gmaps" : "http://maps.google.com/maps?q=9455%20Waples%20Street,%20Suite%20135%20San%20Diego,%20CA%2092121"
					}
					,"thirteen" : {
						 "name" : "San Francisco and Marin Food Banks"
						,"address" : "900 Pennsylvania Avenue"
						,"address2" : "San Francisco, CA 94107"
						,"phone" : "415-282-1900"
						,"url" : "sffoodbank.org/"
						,"facebook" : "http://www.facebook.com/sffoodbank"
						,"twitter" : "http://twitter.com/sffoodbank"
						,"gmaps" : "http://maps.google.com/maps?q=900%20Pennsylvania%20Avenue%20San%20Francisco,%20CA%2094107"
					}
					,"fourteen" : {
						 "name" : "Second Harveset Food Bank of Santa Clara & San Mateo Counties"
						,"address" : "750 Curtner Avenue"
						,"address2" : "San Jose, CA 95125"
						,"phone" : "408-266-8866"
						,"url" : "shfb.org/"
						,"facebook" : "http://www.facebook.com/2ndharvest"
						,"twitter" : "http://twitter.com/2ndharvest"
						,"gmaps" : "http://maps.google.com/maps?q=750%20Curtner%20Avenue%20San%20Jose,%20CA%2095125"
					}
					,"fifteen" : {
						 "name" : "Foodbank of Santa Barbara County"
						,"address" : "4554 Hollister Avenue"
						,"address2" : "Santa Barbara, CA 93110"
						,"phone" : "805-967-5741"
						,"url" : "foodbanksbc.org/"
						,"facebook" : "http://www.facebook.com/FoodbankSB"
						,"twitter" : "http://twitter.com/FoodbankSBC"
						,"gmaps" : "http://maps.google.com/maps?q=4554%20Hollister%20Avenue%20Santa%20Barbara,%20CA%2093110"
					}
					,"sixteen" : {
						 "name" : "Redwood Empire Food Bank"
						,"address" : "3990 Brickway Blvd"
						,"address2" : "Santa Rosa, CA 95403"
						,"phone" : "707-523-7900"
						,"url" : "refb.org/"
						,"facebook" : "http://www.facebook.com/pages/Redwood-Empire-Food-Bank/115482921809001"
						,"twitter" : "http://twitter.com/refb"
						,"gmaps" : "http://maps.google.com/maps?q=3990%20Brickway%20Blvd%20Santa%20Rosa,%20CA%2095403"
					}
					,"seventeen" : {
						 "name" : "Foodlink for Tulare County "
						,"address" : "7427 W. Sunnyview PO Box 1544"
						,"address2" : "Visalia, CA 93291"
						,"phone" : "559-651-3663"
						,"url" : "foodlinktc.org/"
						,"facebook" : ""
						,"twitter" : ""
						,"gmaps" : "http://maps.google.com/maps?q=7427%20W.%20Sunnyview%20Visalia,%20CA%2093291"
					}
					,"eighteen" : {
						 "name" : "Second Harvest Food Bank Santa Cruz County"
						,"address" : "800 Ohlone Parkway"
						,"address2" : "Watsonville, CA 95076"
						,"phone" : "831-722-7110"
						,"url" : "thefoodbank.org/"
						,"facebook" : "http://www.facebook.com/SecondHarvestSantaCruz"
						,"twitter" : "http://twitter.com/SHFBSantaCruz"
						,"gmaps" : "http://maps.google.com/maps?q=800%20Ohlone%20Parkway%20Watsonville,%20CA%2095076-7005"
					}
			} 
	}
	,"colorado" : {
			 "state" : "Colorado"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/colorado.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/colorado.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "22"
			,"foodBank" : {
					"one" : {
						 "name" : "Care and Share Food Bank"
						,"address" : "2605 Preamble Point"
						,"address2" : "Colorado Springs, CO 80915"
						,"phone" : "719-528-1247"
						,"url" : "careandshare.org"
						,"facebook" : "https://www.facebook.com/careandsharefb"
						,"twitter" : "https://twitter.com/careandsharefb"
						,"gmaps" : "https://maps.google.com/maps?q=2605+Preamble+Point+Colorado+Springs,+CO+80915"
					}
					,"two" : {
						 "name" : "Food Bank of the Rockies"
						,"address" : "10700 E. 45th Ave"
						,"address2" : "Denver, CO 80239"
						,"phone" : "303-371-9250"
						,"url" : "foodbankrockies.com"
						,"facebook" : "https://www.facebook.com/FoodBankRockies?sid=b56db8dffc93d1f409250e100f6df"
						,"twitter" : "https://twitter.com/foodbankrockies"
						,"gmaps" : "https://maps.google.com/maps?q=10700+E.+45th+Ave+Denver,+CO+80239"
					}
					,"three" : {
						 "name" : "Food Bank for Larimer County"
						,"address" : "1031 Blue Spruce"
						,"address2" : "Ft. Collins, CO 80524"
						,"phone" : "970-493-4477"
						,"url" : "foodbanklarimer.org"
						,"facebook" : "https://www.facebook.com/foodbankforlarimercounty"
						,"twitter" : ""
						,"gmaps" : "https://maps.google.com/maps?q=1301+Blue+Spruce+Ft.+Collins,+CO+80524"
					}
					,"four" : {
						 "name" : "Weld Food Bank"
						,"address" : "1108 H Street"
						,"address2" : "Greeley, CO 80631"
						,"phone" : "970-356-2199"
						,"url" : "weldfoodbank.org"
						,"facebook" : "https://www.facebook.com/weldfoodbank"
						,"twitter" : "https://twitter.com/WeldFoodBank"
						,"gmaps" : "https://maps.google.com/maps?q=1108+H+Street+Greeley,+CO+80631"
					}
					,"five" : {
						 "name" : "Community Food Share"
						,"address" : "650 S. Taylor Ave."
						,"address2" : "Louisville, CO 80027"
						,"phone" : "303-652-3663"
						,"url" : "communityfoodshare.org"
						,"facebook" : "https://www.facebook.com/communityfoodshare"
						,"twitter" : "https://twitter.com/CommFoodShare"
						,"gmaps" : "https://maps.google.com/maps?q=650+S.+Taylor+Ave.+Louisville,+CO+80027"
					}
			} 
	}
	,"connecticut" : {
			 "state" : "Connecticut"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/connecticut.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/connecticut.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "20"
			,"foodBank" : {
					"one" : {
						 "name" : "Foodshare"
						,"address" : "450 Woodland Ave"
						,"address2" : "Bloomfield, CT 06002"
						,"phone" : "860-286-9999"
						,"url" : "foodshare.org"
						,"facebook" : "https://www.facebook.com/Foodshare"
						,"twitter" : "https://twitter.com/foodshare"
						,"gmaps" : "https://maps.google.com/maps?q=450+Woodland+Avenue+Bloomfield,+CT+06002-1342"
					}
					,"two" : {
						 "name" : "Connecticut Food Bank"
						,"address" : "150 Bradley St."
						,"address2" : "East Haven, CT 06512"
						,"phone" : "203-469-5000"
						,"url" : "ctfoodbank.org"
						,"facebook" : "https://www.facebook.com/CTFoodBank"
						,"twitter" : "https://twitter.com/ctfoodbank"
						,"gmaps" : "https://maps.google.com/maps?q=150+Bradley+St+East+Haven,+CT+06512"
					}
			} 
	}
	,"districtofcolumbia" : {
			 "state" : "District Of Columbia"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/district_of_columbia.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/district_of_columbia.jpg"
			,"fbCaption": "1 in 3"
			,"percent" : "30"
			,"foodBank" : {
					"one" : {
						 "name" : "Capital Area Food Bank"
						,"address" : "4900 Puerto Rico Ave NE"
						,"address2" : "Washington, DC 20017"
						,"phone" : "202-526-5344"
						,"url" : "capitalareafoodbank.org"
						,"facebook" : "https://www.facebook.com/CapitalAreaFoodBank"
						,"twitter" : "https://twitter.com/foodbankmetrodc"
						,"gmaps" : "https://maps.google.com/maps?q=4900+Puerto+Rico+Ave+NE+Washington,+DC+20017-2063"
					}
			} 
	}
	,"delaware" : {
			 "state" : "Delaware"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/delaware.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/delaware.jpg"
			,"fbCaption": "1 in 6"
			,"percent" : "18"
			,"foodBank" : {
					"one" : {
						 "name" : "Food Bank of Delaware"
						,"address" : "14 Garfield Way"
						,"address2" : "Newark, DE 19713"
						,"phone" : "302-292-1305"
						,"url" : "fbd.org"
						,"facebook" : "https://www.facebook.com/FoodBankofDE"
						,"twitter" : "https://twitter.com/FoodBankofDE"
						,"gmaps" : "https://maps.google.com/maps?q=14+Garfield+Way+Newark,+DE+19713"
					}
			} 
	}
	,"florida" : {
			 "state" : "Florida"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/florida.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/florida.jpg"
			,"fbCaption": "1 in 4"
			,"percent" : "28"
			,"foodBank" : {
					"one" : {
						 "name" : "Harry Chapin Food Bank of Southwest Florida"
						,"address" : "3760 Fowler St."
						,"address2" : "Ft. Myers, FL. 33901"
						,"phone" : "239-334-7007"
						,"url" : "harrychapinfoodbank.org"
						,"facebook" : "https://www.facebook.com/HarryChapinFoodBank"
						,"twitter" : "https://twitter.com/HCFBSWFL"
						,"gmaps" : "https://maps.google.com/maps?q=3760+Fowler+St.+Ft.+Myers,+FL+33901"
					}
					,"two" : {
						 "name" : "Treasure Coast Food Bank"
						,"address" : "3051 Industrial 25th Street"
						,"address2" : "Ft. Pierce, FL 34946"
						,"phone" : "772-489-5676"
						,"url" : "stophunger.org"
						,"facebook" : "https://www.facebook.com/tcfoodbank"
						,"twitter" : "https://twitter.com/tcfoodbank"
						,"gmaps" : "https://maps.google.com/maps?q=3051+Industrial+25th+Street+Ft.+Pierce,+FL+34946"
					}
					,"three" : {
						 "name" : "Second Harvest North Florida"
						,"address" : "1502 Jessie Street"
						,"address2" : "Jacksonville, FL 32206"
						,"phone" : "904-353-3663"
						,"url" : "wenourishhope.org"
						,"facebook" : "https://www.facebook.com/wenourishhope"
						,"twitter" : "https://twitter.com/wenourishhope"
						,"gmaps" : "https://maps.google.com/maps?q=1502+Jessie+Street+Jacksonville,+FL+32206"
					}
					,"four" : {
						 "name" : "Second Harvest Food Bank of Central Florida"
						,"address" : "411 Mercy Drive"
						,"address2" : "Orlando, FL 32805"
						,"phone" : "407-295-1066"
						,"url" : "foodbankcentralflorida.org"
						,"facebook" : "https://www.facebook.com/FeedHopeNow"
						,"twitter" : "https://twitter.com/2harvestCFL"
						,"gmaps" : "https://maps.google.com/maps?q=411+Mercy+Drive+Orlando,+FL+32805"
					}
					,"five" : {
						 "name" : "Feeding South Florida"
						,"address" : "2501 SW 32 Terrace"
						,"address2" : "Pembroke Park, FL 33023"
						,"phone" : "954-518-1818"
						,"url" : "feedingsouthflorida.org"
						,"facebook" : "https://www.facebook.com/FeedingSFL"
						,"twitter" : "https://twitter.com/FeedingSFL"
						,"gmaps" : "https://maps.google.com/maps?q=2501+SW+32+Terrace+Pembroke+Park,+FL+33023"
					}
					,"six" : {
						 "name" : "All Faiths Food Bank"
						,"address" : "8171 Blaikie Ct"
						,"address2" : "Sarasota, FL 34240"
						,"phone" : "941-379-6333"
						,"url" : "allfaithsfoodbank.org"
						,"facebook" : "https://www.facebook.com/AllFaithsFoodBank"
						,"twitter" : ""
						,"gmaps" : "https://maps.google.com/maps?q=8171+Blaikie+Ct.+Sarasota,+FL+34240"
					}
					,"seven" : {
						 "name" : "America's Second Harvest of the Big Bend, INC."
						,"address" : "110 Four Points Way"
						,"address2" : "Tallahassee, FL 32305"
						,"phone" : "850-562-3033"
						,"url" : "fightinghunger.org"
						,"facebook" : "https://www.facebook.com/secondharvestofthebigbend"
						,"twitter" : "https://twitter.com/2ndHarvest_BB"
						,"gmaps" : "https://maps.google.com/maps?q=110+Four+Points+Way+Tallahassee,+FL+32305"
					}
					,"eight" : {
						 "name" : "Feeding America Tampa Bay"
						,"address" : "Tampa Distribution Center II 4702 Transport Dr. Bldg. 6"
						,"address2" : "Tampa, FL 33605"
						,"phone" : "813-254-1190"
						,"url" : "feedingamericatampabay.org"
						,"facebook" : "https://www.facebook.com/FeedingTampaBay"
						,"twitter" : "https://twitter.com/feedingtampabay"
						,"gmaps" : "https://maps.google.com/maps?q=Tampa+Distribution+Center+II+Tampa,+FL+33605-5940"
					}
			} 
	}
	,"georgia" : {
			 "state" : "Georgia"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/georgia.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/georgia.jpg"
			,"fbCaption": "2 in 7"
			,"percent" : "29"
			,"foodBank" : {
					"one" : {
						 "name" : "Food Bank of Northeast Georgia"
						,"address" : "861 Newton Bridge Road P.O. BOX 48857"
						,"address2" : "Athens, GA 30604"
						,"phone" : "706-354-8191"
						,"url" : "foodbanknega.org"
						,"facebook" : "https://www.facebook.com/pages/Food-Bank-of-Northeast-Georgia/40845907067"
						,"twitter" : "https://twitter.com/FoodBankNEGA"
						,"gmaps" : "https://maps.google.com/maps?q=861+Newton+Bridge+Road+Athens,+GA+30604"
					}
					,"two" : {
						 "name" : "Atlanta Community Food Bank"
						,"address" : "732 Joseph E. Lowery Blvd. N.W."
						,"address2" : "Atlanta, GA 30318 "
						,"phone" : "404-892-9822"
						,"url" : "acfb.org"
						,"facebook" : "https://www.facebook.com/atlfoodbank"
						,"twitter" : "https://twitter.com/ACFB"
						,"gmaps" : "https://maps.google.com/maps?q=732+Joseph+E.+Lowery+Blvd.+N.W.+Atlanta,+GA+30318"
					}
					,"three" : {
						 "name" : "Golden Harvest Food Bank"
						,"address" : "3310 Commerce Drive"
						,"address2" : "Augusta, GA 30909"
						,"phone" : "706-736-1375"
						,"url" : "goldenharvest.org"
						,"facebook" : "https://www.facebook.com/GoldenHarvestFoodBank"
						,"twitter" : "https://twitter.com/ghfbEndHunger"
						,"gmaps" : "https://maps.google.com/maps?q=3310+Commerce+Drive+Augusta,+GA+30909-4417"
					}
					,"four" : {
						 "name" : "Feeding The Valley Food Bank"
						,"address" : "5928 Coca-Cola Blvd"
						,"address2" : "Columbus, GA 31909-5531"
						,"phone" : "706-561-4755"
						,"url" : "feedingthevalley.org"
						,"facebook" : "https://www.facebook.com/pages/Feeding-the-Valley/206451742698993"
						,"twitter" : ""
						,"gmaps" : "https://maps.google.com/maps?q=5928+Coca-Cola+Blvd.+Columbus,+GA+31909-5531"
					}
					,"five" : {
						 "name" : "Middle Georgia Community Food Bank"
						,"address" : "4490 Ocmulgee East Boulevard P.O. Box 5024"
						,"address2" : "Macon, GA 31217"
						,"phone" : "478-742-3958"
						,"url" : "mgcfb.org"
						,"facebook" : "https://www.facebook.com/pages/Middle-Georgia-Community-Food-Bank/133477780036684"
						,"twitter" : ""
						,"gmaps" : "https://maps.google.com/maps?q=4490+Ocmulgee+East+Boulevard+Macon,+GA+31217"
					}
					,"six" : {
						 "name" : "America's Second Harvest of Coastal Georgia, INC."
						,"address" : "2501East President Street"
						,"address2" : "Savannah, GA 31404 "
						,"phone" : "912-236-6750"
						,"url" : "helpendhunger.org"
						,"facebook" : "https://www.facebook.com/Help.End.Hunger.Ga?ref=ts"
						,"twitter" : "https://twitter.com/helpendhungerga"
						,"gmaps" : "https://maps.google.com/maps?q=2501+East+President+Street+Savannah,+GA+31404"
					}
					,"seven" : {
						 "name" : "Second Harvest of South Georgia, INC."
						,"address" : "1411 Harbin Circle"
						,"address2" : "Valdosta, GA 31601"
						,"phone" : "229-244-3663"
						,"url" : "feedingsga.org"
						,"facebook" : "https://www.facebook.com/SecondHarvestSGA"
						,"twitter" : "https://twitter.com/secondharvest"
						,"gmaps" : "https://maps.google.com/maps?q=1411+Harbin+Circle+Valdosta,+GA+31601"
					}
			} 
	}
	,"hawaii" : {
			 "state" : "Hawaii"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/hawaii.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/hawaii.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "24"
			,"foodBank" : {
					"one" : {
						 "name" : "Hawaii Foodbank, INC."
						,"address" : "2611 Kilihau St."
						,"address2" : "Honolulu, HI 96819"
						,"phone" : "808-836-3600"
						,"url" : "hawaiifoodbank.org"
						,"facebook" : "https://www.facebook.com/HawaiiFoodbank"
						,"twitter" : "https://twitter.com/HawaiiFoodbank"
						,"gmaps" : "https://maps.google.com/maps?q=2611+Kilihau+St+Honolulu,+HI+96819"
					}
			} 
	}
	,"iowa" : {
			 "state" : "Iowa"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/iowa.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/iowa.jpg"
			,"fbCaption": "1 in 6"
			,"percent" : "19"
			,"foodBank" : {
					"one" : {
						 "name" : "Food Bank of Iowa"
						,"address" : "2220 E. 17th Street"
						,"address2" : "Des Moines, IA 50316"
						,"phone" : "515-564-0330"
						,"url" : "foodbankiowa.org"
						,"facebook" : "https://www.facebook.com/foodbankiowa"
						,"twitter" : ""
						,"gmaps" : "https://maps.google.com/maps?q=2220+E.+17th+Street+Des+Moines,+IA+50316"
					}
					,"two" : {
						 "name" : "Hacap Food Resevoir"
						,"address" : "1515 Hawkeye Drive P.O. Box 490"
						,"address2" : ""
						,"phone" : "319-393-7811"
						,"url" : "hacap.org"
						,"facebook" : "https://www.facebook.com/hacap"
						,"twitter" : "https://twitter.com/HACAP_"
						,"gmaps" : "https://maps.google.com/maps?q=1515+Hawkeye+Drive+Hiawatha,+IA+52233"
					}
					,"three" : {
						 "name" : "Northeast Iowa Food Bank"
						,"address" : "1605 Lawfayette Street PO Box 2397"
						,"address2" : "Waterloo, IA 50703"
						,"phone" : "319-235-0507"
						,"url" : "northeastiowafoodbank.org"
						,"facebook" : "https://www.facebook.com/NEIFB"
						,"twitter" : "https://twitter.com/neifb"
						,"gmaps" : "https://maps.google.com/maps?q=1605+Lafayette+Steet+Waterloo,+IA+50703"
					}
			} 
	}
	,"idaho" : {
			 "state" : "Idaho"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/idaho.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/idaho.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "23"
			,"foodBank" : {
					"one" : {
						 "name" : "The Idaho Foodbank"
						,"address" : "3625 TK Avenue"
						,"address2" : "Boise, ID 83705"
						,"phone" : "208-336-9643"
						,"url" : "idahofoodbank.org"
						,"facebook" : "https://www.facebook.com/theidahofoodbank"
						,"twitter" : "https://twitter.com/IdahoFoodbank"
						,"gmaps" : "https://maps.google.com/maps?q=3625+TK+Avenue+Boise,+ID+83705"
					}
					,"two" : {
						 "name" : "Second Harvest Inland Northwest"
						,"address" : "1234 E. Front Avenue"
						,"address2" : ""
						,"phone" : "509-534-6678"
						,"url" : "2-harvest.org"
						,"facebook" : "https://www.facebook.com/pages/Second-Harvest-Inland-Northwest/123973695052"
						,"twitter" : "https://twitter.com/2ndHarvestAlert"
						,"gmaps" : "https://maps.google.com/maps?q=1234+E.+Front+Avenue+Spokane,+WA+99202"
					}
			} 
	}
	,"illinois" : {
			 "state" : "Illinois"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/illinois.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/illinois.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "23"
			,"foodBank" : {
					"one" : {
						 "name" : "Greater Chicago Food Depository"
						,"address" : "4100 West Ann Lurie Place"
						,"address2" : "Chicago, IL 60632"
						,"phone" : "773-247-3663"
						,"url" : "chicagosfoodbank.org"
						,"facebook" : "https://www.facebook.com/fooddepository"
						,"twitter" : "https://twitter.com/FoodDepository"
						,"gmaps" : "https://maps.google.com/maps?q=4100+West+Ann+Lurie+Place+Chicago,+IL+60632"
					}
					,"two" : {
						 "name" : "Northern Illinois Food Bank"
						,"address" : "273 Dearborn Ct."
						,"address2" : "Geneva, IL 60134"
						,"phone" : "630-443-6910"
						,"url" : "solvehungertoday.org"
						,"facebook" : "https://www.facebook.com/northernilfoodbank"
						,"twitter" : ""
						,"gmaps" : "https://maps.google.com/maps?q=273+Dearborn+Ct.+Geneva,+IL+60134"
					}
					,"three" : {
						 "name" : "River Bend Food Bank"
						,"address" : "309 12th Street"
						,"address2" : "Moline, IL 61265"
						,"phone" : "309-764-7434"
						,"url" : "riverbendfoodbank.org"
						,"facebook" : "https://www.facebook.com/pages/River-Bend-Foodbank/186932404533"
						,"twitter" : "https://twitter.com/RiverBendFood"
						,"gmaps" : "https://maps.google.com/maps?q=309++12th+Street+Moline,+IL+61265"
					}
					,"four" : {
						 "name" : "Peoria Area Food Bank"
						,"address" : "721 W. McBean"
						,"address2" : "Peoria, IL 61605"
						,"phone" : "309-671-3906"
						,"url" : "pcceo.org/index.cfm?fuseaction=dep_intro&dept_id=19"
						,"facebook" : ""
						,"twitter" : ""
						,"gmaps" : "https://maps.google.com/maps?q=721+W.+McBean+Peoria,+IL+61605"
					}
					,"five" : {
						 "name" : "Central Illinois Foodbank"
						,"address" : "1937 E. Cook"
						,"address2" : "Springfield, IL 62703"
						,"phone" : "217-522-4022"
						,"url" : "centralilfoodbank.org"
						,"facebook" : "https://www.facebook.com/CentralIllinoisFoodbank"
						,"twitter" : "https://twitter.com/CentralILFoodbk"
						,"gmaps" : "https://maps.google.com/maps?q=1937+E.+Cook+Springfield,+IL+62703"
					}
					,"six" : {
						 "name" : "Eastern Illinois Foodbank"
						,"address" : "2405 North Shore Drive"
						,"address2" : "Urbana, IL 61802"
						,"phone" : "217-328-3663"
						,"url" : "elfoodbank.org"
						,"facebook" : "https://www.facebook.com/eifoodbank"
						,"twitter" : "https://twitter.com/eifoodbank"
						,"gmaps" : "https://maps.google.com/maps?q=2405+North+Shore+Drive+Urbana,+IL+61802"
					}
			} 
	}
	,"indiana" : {
			 "state" : "Indiana"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/indiana.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/indiana.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "23"
			,"foodBank" : {
					"one" : {
						 "name" : "Hoosier Hills Food Bank"
						,"address" : "2333 Industrial Park Drive PO Box 697"
						,"address2" : "Bloomington, IN 47404"
						,"phone" : "812-334-8374"
						,"url" : "hhfoodbank.org"
						,"facebook" : "https://www.facebook.com/pages/Hoosier-Hills-Food-Bank/48412266243"
						,"twitter" : "https://twitter.com/HoosierHillsFB"
						,"gmaps" : "https://maps.google.com/maps?q=2333+West+Industrial+Park+Drive+Bloomington,+IN+47404"
					}
					,"two" : {
						 "name" : "Tri-State Food Bank"
						,"address" : "801 E. Michigan Street"
						,"address2" : "Evansville, IN 47711"
						,"phone" : "812-425-0775"
						,"url" : "tristatefoodbank.org"
						,"facebook" : "https://www.facebook.com/Tri.State.Food.Bank"
						,"twitter" : "https://twitter.com/TSFBevv"
						,"gmaps" : "https://maps.google.com/maps?q=801+E.+Michigan+Street+Evansville,+IN+47711-5631"
					}
					,"three" : {
						 "name" : "Community Harvest Food Bank of Northeast Indiana, INC."
						,"address" : "999 East Tilman Road PO Box 10967"
						,"address2" : "Fort Mayne, IN 46855"
						,"phone" : "260-447-3696"
						,"url" : "chfb.org"
						,"facebook" : "https://www.facebook.com/communityharvestfoodbank"
						,"twitter" : "https://twitter.com/ComHarvest"
						,"gmaps" : "https://maps.google.com/maps?q=999+East+Tillman+Road+Fort+Wayne,+IN+46855"
					}
					,"four" : {
						 "name" : "Food Bank of NW Indiana"
						,"address" : "2248-50 W. 35th Avenue"
						,"address2" : "Gary, IN 46408"
						,"phone" : "219-980-1777"
						,"url" : "foodbanknwi.org"
						,"facebook" : "https://www.facebook.com/FoodBankofNorthwestIndiana"
						,"twitter" : "https://twitter.com/FoodBankofNWI"
						,"gmaps" : "https://maps.google.com/maps?q=2248-50+W.+35th+Avenue+Gary,+IN+46408-1849"
					}
					,"five" : {
						 "name" : "Gleaners Food Bank of Indiana, INC."
						,"address" : "3737 Waldemere Ave."
						,"address2" : "Indianapolis, IN 46241"
						,"phone" : "317-927-3189"
						,"url" : "gleaners.org"
						,"facebook" : "https://www.facebook.com/GleanersFoodBankofIndiana"
						,"twitter" : "https://twitter.com/GleanersFBIndy"
						,"gmaps" : "https://maps.google.com/maps?q=3737+Waldemere+Ave.+Indianapolis,+IN+46241"
					}
					,"six" : {
						 "name" : "Food Finders Food Bank INC."
						,"address" : "50 Olympia Ct."
						,"address2" : "Lafayette, IN 47909"
						,"phone" : "765-471-0062"
						,"url" : "food-finders.org"
						,"facebook" : "http://www.facebook.com/#!/FoodFindersFoodBank"
						,"twitter" : "http://twitter.com/FoodFinders"
						,"gmaps" : "http://maps.google.com/maps?q=50%20Olympia%20Ct.%20Lafayette,%20IN%2047909"
					}
					,"seven" : {
						 "name" : "Second Harvest Food Bank of East Central Indiana, INC."
						,"address" : "6621 N. Old SR 3"
						,"address2" : "Muncie, IN 47303"
						,"phone" : "765-287-8698"
						,"url" : "curehunger.org"
						,"facebook" : "http://www.facebook.com/curehunger"
						,"twitter" : "http://twitter.com/curehunger"
						,"gmaps" : "http://maps.google.com/maps?q=6621%20N.%20Old%20SR%203%20Muncie,%20IN%2047303"
					}
					,"eight" : {
						 "name" : "Food Bank of Northern Indiana"
						,"address" : "702 South Chapin Street"
						,"address2" : "South Bend, IN 46601"
						,"phone" : "574-232-9986"
						,"url" : "feedindiana.org"
						,"facebook" : "http://www.facebook.com/pages/Food-Bank-of-Northern-Indiana/137194575952"
						,"twitter" : "http://twitter.com/FoodBkNIndiana"
						,"gmaps" : "http://maps.google.com/maps?q=702%20South%20Chapin%20Street%20South%20Bend,%20IN%2046601-2804"
					}
					,"nine" : {
						 "name" : "Terre Haute Catholic Charities Food Bank"
						,"address" : "1356 Locust Street"
						,"address2" : "Terre Haute, IN 47803"
						,"phone" : "812-235-3424"
						,"url" : "archindy.org/cc/terrehaute/programs-foodbank.html"
						,"facebook" : "http://www.facebook.com/CatholicCharitiesTerreHaute"
						,"twitter" : ""
						,"gmaps" : "http://maps.google.com/maps?q=1356%20Locust%20Street%20Terre%20Haute,%20IN%2047803"
					}
			} 
	}
	,"kansas" : {
			 "state" : "Kansas"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/kansas.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/kansas.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "23"
			,"foodBank" : {
					"one" : {
						 "name" : "Kansas Food Bank"
						,"address" : "1919 E. Douglas"
						,"address2" : "Wichita, KS 67211 "
						,"phone" : "316-265-3663"
						,"url" : "kansasfoodbank.org"
						,"facebook" : "http://www.facebook.com/KansasFoodBank"
						,"twitter" : "http://twitter.com/KansasFoodbank"
						,"gmaps" : "http://maps.google.com/maps?q=1919%20E.%20Douglas%20Wichita,%20KS%2067211"
					}
			} 
	}
	,"kentucky" : {
			 "state" : "Kentucky"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/kentucky.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/kentucky.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "22"
			,"foodBank" : {
					"one" : {
						 "name" : "Feeding America, Kentucky's Heartland"
						,"address" : "313 Peterson Dr. PO Box 821"
						,"address2" : "Elizabethtown, KY 42701"
						,"phone" : "270-769-6997"
						,"url" : "feedingamericaky.org"
						,"facebook" : "http://www.facebook.com/pages/Feeding-America-Kentuckys-Heartland/105028761710?ref=mf"
						,"twitter" : "http://twitter.com/KnockOutHunger"
						,"gmaps" : "http://maps.google.com/maps?q=313%20Peterson%20Dr.,%20Elizabethtown,%20KY%2042701"
					}
					,"two" : {
						 "name" : "God's Pantry Food Bank, INC."
						,"address" : "1685 Jaggie Fox Way"
						,"address2" : "Lexington, KY 40511"
						,"phone" : "859-255-6592"
						,"url" : "godspantry.org"
						,"facebook" : "http://www.facebook.com/godspantryfoodbank"
						,"twitter" : "http://twitter.com/GPFoodBank"
						,"gmaps" : "http://maps.google.com/maps?q=1685%20Jaggie%20Fox%20Way%20Lexington,%20KY%2040511-1084"
					}
			} 
	}
	,"louisiana" : {
			 "state" : "Louisiana"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/louisiana.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/louisiana.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "24"
			,"foodBank" : {
					"one" : {
						 "name" : "Food Bank Central Louisiana"
						,"address" : "3223 Baldwin Avenue"
						,"address2" : "Alexandria, LA 71301"
						,"phone" : "318-445-2773"
						,"url" : "fbcenla.org"
						,"facebook" : "http://www.facebook.com/Foodbankofcentrallouisiana"
						,"twitter" : ""
						,"gmaps" : "http://maps.google.com/maps?q=3223%20Baldwin%20Avenue%20Alexandria,%20LA%2071301"
					}
					,"two" : {
						 "name" : "Greater Baton Rouge Food Bank"
						,"address" : "5546 Choctaw Drive PO Box 2996"
						,"address2" : "Baton Rouge, LA 70805"
						,"phone" : "225-359-9940"
						,"url" : "brfoodbank.org"
						,"facebook" : "http://www.facebook.com/GBRFoodBank"
						,"twitter" : "http://twitter.com/brfoodbank"
						,"gmaps" : "http://maps.google.com/maps?q=5546%20Choctaw%20Drive%20Baton%20Rouge,%20LA%2070805"
					}
					,"three" : {
						 "name" : "Food Bank of Northeast Louisiana"
						,"address" : "4600 Central Ave PB Box 5048"
						,"address2" : "Monroe, LA 71211"
						,"phone" : "318-322-3567"
						,"url" : "fbnela.org"
						,"facebook" : "http://www.facebook.com/FBNELA"
						,"twitter" : ""
						,"gmaps" : "http://maps.google.com/maps?q=4600%20Central%20Ave%20Monroe,%20LA%2071211"
					}
					,"four" : {
						 "name" : "Second Harvest Food Bank of Greater New Orleans and Acadiana"
						,"address" : "700 Edwards Avenue"
						,"address2" : "New Orleans, LA 70123"
						,"phone" : "504-734-1322"
						,"url" : "no-hunger.org"
						,"facebook" : "http://www.facebook.com/2ndHarvestGNOA"
						,"twitter" : "http://twitter.com/2ndHarvestGNOA"
						,"gmaps" : "http://maps.google.com/maps?q=700%20Edwards%20Avenue%20New%20Orleans,%20LA%2070123"
					}
					,"five" : {
						 "name" : "Food Bank of Northwest Louisiana"
						,"address" : "2307 Texas Avenue"
						,"address2" : "Shreveport, LA 71103"
						,"phone" : "318-675-2400"
						,"url" : "foodbanknla.org"
						,"facebook" : "http://www.facebook.com/pages/Food-Bank-of-Northwest-Louisiana/103692218325"
						,"twitter" : "http://twitter.com/FoodBankofNWLA"
						,"gmaps" : "http://maps.google.com/maps?q=2307%20Texas%20Avenue%20Shreveport,%20LA%2071103"
					}
			} 
	}
	,"massachusetts" : {
			 "state" : "Massachusetts"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/massachusetts.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/massachusetts.jpg"
			,"fbCaption": "1 in 6"
			,"percent" : "17"
			,"foodBank" : {
					"one" : {
						 "name" : "The Greater Boston Food Bank"
						,"address" : "70 South Bay Ave"
						,"address2" : "Boston, MA 02118"
						,"phone" : "617-427-5200"
						,"url" : "gbfb.org"
						,"facebook" : "http://www.facebook.com/gr8bosfoodbank"
						,"twitter" : "http://twitter.com/Gr8BosFoodBank"
						,"gmaps" : "http://maps.google.com/maps?q=70%20South%20Bay%20Ave%20Boston,%20MA%2002118-2700"
					}
					,"two" : {
						 "name" : "The Food Bank of Western Massachusetts"
						,"address" : "97 North Hatfield Road PO Box 160"
						,"address2" : "Hatfield, MA"
						,"phone" : "413-247-9738"
						,"url" : "foodbankwma.org"
						,"facebook" : "http://www.facebook.com/FoodBankofWesternMA"
						,"twitter" : "http://twitter.com/FoodBankWMA"
						,"gmaps" : "http://maps.google.com/maps?q=97%20North%20Hatfield%20Road%20Hatfield,%20MA%2001038"
					}
					,"three" : {
						 "name" : "Worcester County Food Bank, INC."
						,"address" : "474 Boston Turnpike"
						,"address2" : "Shrewsbury, MA 01545"
						,"phone" : "508-842-3663"
						,"url" : "foodbank.org"
						,"facebook" : ""
						,"twitter" : ""
						,"gmaps" : "http://maps.google.com/maps?q=474%20Boston%20Turnpike%20Shrewsbury,%20MA%2001545"
					}
			} 
	}
	,"maryland" : {
			 "state" : "Maryland"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/maryland.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/maryland.jpg"
			,"fbCaption": "1 in 6"
			,"percent" : "19"
			,"foodBank" : {
					"one" : {
						 "name" : "Maryland Food Bank"
						,"address" : "2200 Halethorpe Farms Road"
						,"address2" : "Baltimore, MD 21227"
						,"phone" : "410-737-8282"
						,"url" : "mdfoodbank.org"
						,"facebook" : "http://www.facebook.com/MDFoodBank"
						,"twitter" : "http://twitter.com/mdfoodbank"
						,"gmaps" : "http://maps.google.com/maps?q=2200%20Halethorpe%20Farms%20Road%20Baltimore,%20MD%2021227"
					}
			} 
	}
	,"maine" : {
			 "state" : "Maine"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/maine.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/maine.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "24"
			,"foodBank" : {
					"one" : {
						 "name" : "Good Shepherd Food Bank"
						,"address" : "3121 Hotel Road PO Box 1807"
						,"address2" : "Auburn, ME 04211-1807"
						,"phone" : "207-782-3554"
						,"url" : "gsfb.org"
						,"facebook" : "http://www.facebook.com/feedingmaine"
						,"twitter" : "http://twitter.com/FeedingMaine"
						,"gmaps" : "http://maps.google.com/maps?q=3121%20Hotel%20Road/%20PO%20Box%201807%20Auburn,%20ME%2004211-1807"
					}
			} 
	}
	,"michigan" : {
			 "state" : "Michigan"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/michigan2.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/michigan.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "24"
			,"foodBank" : {
					"one" : {
						 "name" : "Food Gatherers"
						,"address" : "1 Carrot Way PO Box 131037"
						,"address2" : "Ann Arbor, MI 48105"
						,"phone" : "734-761-2796"
						,"url" : "foodgatherers.org"
						,"facebook" : "http://www.facebook.com/foodgatherers"
						,"twitter" : "http://twitter.com/CarlSuperCarrot"
						,"gmaps" : "http://maps.google.com/maps?q=1%20Carrot%20Way%20Zip%2048105%20Ann%20Arbor,%20MI%2048105"
					}
					,"two" : {
						 "name" : "Food Bank of South Central Michigan"
						,"address" : "5451 Wayne Road PO Box 408"
						,"address2" : "Battle Creek, MI 49037"
						,"phone" : "269-964-3663"
						,"url" : "foodbankofscm.org"
						,"facebook" : "http://www.facebook.com/pages/Food-Bank-of-South-Central-Michigan/159228594925"
						,"twitter" : "http://twitter.com/foodbankofscm"
						,"gmaps" : "http://maps.google.com/maps?q=5451%20Wayne%20Road%20Battle%20Creek,%20MI%2049037-7327"
					}
					,"three" : {
						 "name" : "Feeding America West Michigan Food Bank"
						,"address" : "864 West River Center Drive"
						,"address2" : "Cornstock Park, MI 49231"
						,"phone" : "616-784-3250"
						,"url" : "feedingamericawestmichigan.org"
						,"facebook" : "http://www.facebook.com/FeedingAmericaWestMichigan"
						,"twitter" : "http://twitter.com/feedingwestmich"
						,"gmaps" : "http://maps.google.com/maps?q=864%20West%20River%20Center%20Drive%20Comstock%20Park,%20MI%2049321"
					}
					,"four" : {
						 "name" : "Gleaners Community Food Bank of Southeastern Michigan"
						,"address" : "2131 Beaufait Street"
						,"address2" : "Detroit, MI 48207"
						,"phone" : "313-923-3535"
						,"url" : "gcfb.org"
						,"facebook" : "http://www.facebook.com/Gleanersfan"
						,"twitter" : "http://twitter.com/Gleaners"
						,"gmaps" : "http://maps.google.com/maps?q=2131%20Beaufait%20Street%20Detroit,%20MI%2048207"
					}
					,"five" : {
						 "name" : "Food Bank of Eastern Michigan"
						,"address" : "2312 Lapeer Road"
						,"address2" : "Flint, MI 48503"
						,"phone" : "810-239-4441"
						,"url" : "fbem.org"
						,"facebook" : "http://www.facebook.com/FoodBankofemich"
						,"twitter" : "http://twitter.com/foodbankemich"
						,"gmaps" : "http://maps.google.com/maps?q=2312%20Lapeer%20Road%20Flint,%20MI%2048503"
					}
					,"six" : {
						 "name" : "Greater Lansing Food Bank"
						,"address" : "919 Filley St."
						,"address2" : "Lansing, MI 48906"
						,"phone" : "517-853-7800"
						,"url" : "greaterlansingfoodbank.org/about-us.html"
						,"facebook" : ""
						,"twitter" : "http://twitter.com/@GLFoodBank"
						,"gmaps" : "http://maps.google.com/maps?q=919%20Filley%20St.%20Lansing,%20MI%2048906"
					}
					,"seven" : {
						 "name" : "Forgotten Harvest"
						,"address" : "21800 Greenfield Road"
						,"address2" : "Oak Park, MI 48237"
						,"phone" : "248-967-1500"
						,"url" : "forgottenharvest.org"
						,"facebook" : "http://www.facebook.com/forgottenharvest"
						,"twitter" : "http://twitter.com/ForgottnHarvest"
						,"gmaps" : "http://maps.google.com/maps?q=21800%20Greenfield%20Road%20Oak%20Park,%20MI%2048237"
					}
			} 
	}
	,"minnesota" : {
			 "state" : "Minnesota"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/minnesota.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/minnesota.jpg"
			,"fbCaption": "1 in 6"
			,"percent" : "17"
			,"foodBank" : {
					"one" : {
						 "name" : "North Country Food Bank, INC."
						,"address" : "424 North Broadway"
						,"address2" : "Crookston, MN 56716"
						,"phone" : "218-281-7356"
						,"url" : "northcountyfoodbank.org"
						,"facebook" : "http://www.facebook.com/pages/North-Country-Food-Bank-Inc/266176483402393"
						,"twitter" : ""
						,"gmaps" : "http://maps.google.com/maps?q=424%20North%20Broadway%20Crookston,%20MN%2056716"
					}
					,"two" : {
						 "name" : "Second Harvest Northern Lakes Food Bank"
						,"address" : "4503 Airpark Boulevard"
						,"address2" : "Duluth, MN 55811"
						,"phone" : "218-727-5653"
						,"url" : "northernlakesfoodbank.org"
						,"facebook" : "http://www.facebook.com/northernlakesfoodbank"
						,"twitter" : "http://twitter.com/northernlakesfb"
						,"gmaps" : "http://maps.google.com/maps?q=4503%20Airpark%20Boulevard%20Duluth,%20MN%2055811"
					}
					,"three" : {
						 "name" : "Second Harvest North Central Food Bank"
						,"address" : "2222 Cromell Drive PO Box 5130"
						,"address2" : "Grand Rapids, MN"
						,"phone" : "218-326-4420"
						,"url" : "secondharvestncfb.com/"
						,"facebook" : "http://www.facebook.com/SecondHarvestNorthCentral"
						,"twitter" : "http://twitter.com/food4every1"
						,"gmaps" : "http://maps.google.com/maps?q=2222%20Cromell%20Drive%20Grand%20Rapids,%20MN%2055744"
					}
					,"four" : {
						 "name" : "Channel One Food Bank"
						,"address" : "131 35th Street"
						,"address2" : "SE Rochester, MN 55904"
						,"phone" : "507-424-1700"
						,"url" : "helpingfeedpeople.org"
						,"facebook" : "http://www.facebook.com/ChannelOneFoodBankandFoodShelf"
						,"twitter" : "http://twitter.com/Channel1FoodMN"
						,"gmaps" : "http://maps.google.com/maps?q=131%2035th%20Street,%20SE%20Rochester,%20MN%2055904"
					}
					,"five" : {
						 "name" : "Second Harvest Heartland"
						,"address" : "1140 Gervais Avenue"
						,"address2" : "St. Paul, MN 55109"
						,"phone" : "651-484-5117"
						,"url" : "2harvest.org"
						,"facebook" : "http://www.facebook.com/2harvest"
						,"twitter" : "http://twitter.com/2harvest"
						,"gmaps" : "http://maps.google.com/maps?q=1140%20Gervais%20Avenue%20St.%20Paul,%20MN%2055109-2042"
					}
			} 
	}
	,"missouri" : {
			 "state" : "Missouri"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/missouri.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/missouri.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "23"
			,"foodBank" : {
					"one" : {
						 "name" : "St. Louis Area Foodbank"
						,"address" : "70 Corporate Woods Drive"
						,"address2" : "Bridgeton, MO 63044"
						,"phone" : "314-292-6266"
						,"url" : "stlfoodbank.org/"
						,"facebook" : "http://www.facebook.com/stlfoodbank"
						,"twitter" : "http://twitter.com/STLFoodbank"
						,"gmaps" : "http://maps.google.com/maps?q=70%20Corporate%20Woods%20Drive%20Bridgeton,%20MO%2063044"
					}
					,"two" : {
						 "name" : "Southeast Missouri Food Bank"
						,"address" : "3920 Nash Road PO Box 1688"
						,"address2" : "Cape Girardeau, MO 63702"
						,"phone" : "573-651-0400"
						,"url" : "semofoodbank.org/"
						,"facebook" : "http://www.facebook.com/SoutheastMOFoodBank"
						,"twitter" : "http://twitter.com/semofoodbank"
						,"gmaps" : "http://maps.google.com/maps?q=3920%20Nash%20Road%20Cape%20Girardeau,%20MO%2063702"
					}
					,"three" : {
						 "name" : "The Food Bank for Central & Northeast Missouri"
						,"address" : "2101 Vandiver Drive, Suite B"
						,"address2" : "Columbia, MO 65202"
						,"phone" : "573-474-1020"
						,"url" : "sharefoodbringhope.org/"
						,"facebook" : "http://www.facebook.com/TheFoodBankMO"
						,"twitter" : "http://twitter.com/TheFoodbankMO"
						,"gmaps" : "http://maps.google.com/maps?q=2101%20Vandiver%20Drive,%20Suite%20B%20Columbia,%20MO%2065202-1910"
					}
					,"four" : {
						 "name" : "Harvesters- The Community Food Network"
						,"address" : "3801 Topping Avenue"
						,"address2" : "Kansas City, MO 64129"
						,"phone" : "816-929-3000"
						,"url" : "harvesters.org"
						,"facebook" : "http://www.facebook.com/harvestersorg"
						,"twitter" : "http://twitter.com/HarvestersORG"
						,"gmaps" : "http://maps.google.com/maps?q=3801%20Topping%20Avenue%20Kansas%20City,%20MO%2064129"
					}
					,"five" : {
						 "name" : "Ozarks Food Harvest"
						,"address" : "2810 N. Cedarbrook"
						,"address2" : "Springfield, MO 65803"
						,"phone" : "417-865-3411"
						,"url" : "ozarksfoodharvest.org"
						,"facebook" : "http://www.facebook.com/ozarksfoodharvest"
						,"twitter" : "http://twitter.com/ozksfoodharvest"
						,"gmaps" : "http://maps.google.com/maps?q=2810%20N.%20Cedarbrook%20Springfield,%20MO%2065803"
					}
					,"six" : {
						 "name" : "Second Harvest Community Food Bank"
						,"address" : "915 Douglas"
						,"address2" : "St. Joseph, MO 64505"
						,"phone" : "816-364-3663"
						,"url" : "ourcommunityfoodbank.org/"
						,"facebook" : "http://www.facebook.com/sec.harv"
						,"twitter" : "http://twitter.com/Second_Harvest"
						,"gmaps" : "http://maps.google.com/maps?q=915%20Douglas%20St.%20Joseph,%20MO%2064505"
					}
			} 
	}
	,"mississippi" : {
			 "state" : "Mississippi"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/mississippi.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/mississippi.jpg"
			,"fbCaption": "1 in 4"
			,"percent" : "27"
			,"foodBank" : {
					"one" : {
						 "name" : "Mississippi Food Network"
						,"address" : "440 W. Beatty Street PO Box 411"
						,"address2" : "Jackson, MS 39205"
						,"phone" : "601-973-7080"
						,"url" : "msfoodnet.org"
						,"facebook" : "https://www.facebook.com/MSFoodNetwork"
						,"twitter" : "http://twitter.com/MSFoodNet"
						,"gmaps" : "http://maps.google.com/maps?q=440%20W.%20Beatty%20Street%20Jackson,%20MS%2039205"
					}
			} 
	}
	,"montana" : {
			 "state" : "Montana"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/montana.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/montana.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "22"
			,"foodBank" : {
					"one" : {
						 "name" : "Montana Food Bank Network"
						,"address" : "5625 Expressway"
						,"address2" : "Missoula, MT 59808"
						,"phone" : "406-721-3825"
						,"url" : "mfbn.org"
						,"facebook" : "http://www.facebook.com/feedmontana"
						,"twitter" : "http://twitter.com/mfbn"
						,"gmaps" : "http://maps.google.com/maps?q=5625%20Expressway%20Missoula,%20MT%2059808"
					}
			} 
	}
	,"nebraska" : {
			 "state" : "Nebraska"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/nebraska.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/nebraska.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "21"
			,"foodBank" : {
					"one" : {
						 "name" : "Food Bank of Lincoln, INC."
						,"address" : "4840 Doris Bair Circle, Suite A"
						,"address2" : "Lincoln, NE 68504"
						,"phone" : "402-466-8170"
						,"url" : "lincolnfoodbank.org"
						,"facebook" : "http://www.facebook.com/FoodBankofLincoln"
						,"twitter" : "http://twitter.com/LincolnFoodBank"
						,"gmaps" : "http://maps.google.com/maps?q=4840%20Doris%20Bair%20Circle,%20Suite%20A%20Lincoln,%20NE%2068504"
					}
					,"two" : {
						 "name" : "Food Bank for the Heartland"
						,"address" : "10525 J Street"
						,"address2" : "Omaha, NE 68127"
						,"phone" : "402-905-4802"
						,"url" : "foodbankheartland.org"
						,"facebook" : "http://www.facebook.com/foodbankheartland"
						,"twitter" : "http://twitter.com/Food4Heartland"
						,"gmaps" : "http://maps.google.com/maps?q=10525%20%20J%20Street%20Omaha,%20NE%2068127-1016"
					}
			} 
	}
	,"nevada" : {
			 "state" : "Nevada"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/nevada.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/nevada.jpg"
			,"fbCaption": "1 in 4"
			,"percent" : "28"
			,"foodBank" : {
					"one" : {
						 "name" : "Three Square Food Bank"
						,"address" : "4190 N. Pecos Rd."
						,"address2" : "Las Vegas, NV 89115"
						,"phone" : "702-644-3663"
						,"url" : "threesquare.org"
						,"facebook" : "http://www.facebook.com/pages/Three-Square/56816738668"
						,"twitter" : "http://twitter.com/threesquareLV"
						,"gmaps" : "http://maps.google.com/maps?q=4190%20N.%20Pecos%20Rd.%20Las%20Vegas,%20NV%2089115"
					}
					,"two" : {
						 "name" : "Food Bank of Northern Nevada"
						,"address" : "550 Italy Dr."
						,"address2" : "McCarran, NV 89434"
						,"phone" : "775-331-3663"
						,"url" : "fbnn.org"
						,"facebook" : "http://www.facebook.com/FoodBankNN"
						,"twitter" : "http://twitter.com/FoodBankNN"
						,"gmaps" : "http://maps.google.com/maps?q=550%20Italy%20Dr%20McCarran,%20NV%2089434"
					}
			} 
	}
	,"newhampshire" : {
			 "state" : "New Hampshire"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/new_hampshire.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/new_hampshire.jpg"
			,"fbCaption": "1 in 7"
			,"percent" : "15"
			,"foodBank" : {
					"one" : {
						 "name" : "New Hampshire Food Bank"
						,"address" : "700 East Industrial Park Drive"
						,"address2" : "Machester, NH 03109"
						,"phone" : "603-669-9725"
						,"url" : "nhfoodbank.org"
						,"facebook" : "http://www.facebook.com/nhfoodbank"
						,"twitter" : "http://twitter.com/nhfoodbank"
						,"gmaps" : "http://maps.google.com/maps?q=700%20East%20Industrial%20Park%20Drive%20Manchester,%20NH%2003109"
					}
			} 
	}
	,"newjersey" : {
			 "state" : "New Jersey"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/new_jersey.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/new_jersey.jpg"
			,"fbCaption": "1 in 6"
			,"percent" : "19"
			,"foodBank" : {
					"one" : {
						 "name" : "Community Food Bank of New Jersey"
						,"address" : "31 Evans Terminal Road"
						,"address2" : "Hillside, NJ 07205"
						,"phone" : "908-355-3663"
						,"url" : "cfbnj.org/"
						,"facebook" : "http://www.facebook.com/communityfoodbankofnj"
						,"twitter" : "http://twitter.com/CFBNJ"
						,"gmaps" : "http://maps.google.com/maps?q=31%20Evans%20Terminal%20Road%20Hillside,%20NJ%2007205-2400"
					}
					,"two" : {
						 "name" : "The Foodbank of Monmouth and Ocean Counties, INC."
						,"address" : "330 Route 66"
						,"address2" : "Neptune, NJ 07753"
						,"phone" : "732-918-2600"
						,"url" : "foodbankmoc.org/"
						,"facebook" : "http://www.facebook.com/foodbankmoc"
						,"twitter" : "http://twitter.com/theFoodBankMOC"
						,"gmaps" : "http://maps.google.com/maps?q=3300%20Route%2066%20Neptune,%20NJ%2007753"
					}
					,"three" : {
						 "name" : "Food Bank of South Jersey"
						,"address" : "1501 John Tipton Boulevard"
						,"address2" : "Pennsauken, NJ 08110"
						,"phone" : "856-662-4884"
						,"url" : "foodbanksi.org"
						,"facebook" : "http://www.facebook.com/pages/Food-Bank-of-South-Jersey/110047429015319?ref=ts"
						,"twitter" : "http://twitter.com/foodbanksj"
						,"gmaps" : "http://maps.google.com/maps?q=1501%20John%20Tipton%20Boulevard%20Pennsauken,%20NJ%2008110"
					}
			} 
	}
	,"newmexico" : {
			 "state" : "New Mexico"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/new_mexico.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/new_mexico.jpg"
			,"fbCaption": "1 in 3"
			,"percent" : "31"
			,"foodBank" : {
					"one" : {
						 "name" : "Roadrunner Food Bank"
						,"address" : "5840 Office Blvd."
						,"address2" : "NE Albuquerque, NM 87109"
						,"phone" : "505-247-2052"
						,"url" : "rrfb.org/"
						,"facebook" : "http://www.facebook.com/roadrunner.food.bank"
						,"twitter" : "http://twitter.com/RoadrunnerFdBnk"
						,"gmaps" : "http://maps.google.com/maps?q=5840%20Office%20Blvd%20NE%20Albuquerque,%20NM%2087109"
					}
			} 
	}
	,"newyork" : {
			 "state" : "New York"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/new_york.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/new_york.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "22"
			,"foodBank" : {
					"one" : {
						 "name" : "Food Bank of Western New York"
						,"address" : "91 Holt Street"
						,"address2" : "Buffalo, NY 14206"
						,"phone" : "716-852-1305"
						,"url" : "foodbankwny.org/"
						,"facebook" : "http://www.facebook.com/FoodBankWNY"
						,"twitter" : "http://twitter.com/FoodBankofWNY"
						,"gmaps" : "http://maps.google.com/maps?q=91%20Holt%20Street%20Buffalo,%20NY%2014206"
					}
					,"two" : {
						 "name" : "Food Bank of the Southern Tier"
						,"address" : "388 Upper Oakwood Avenue PO Box 2127"
						,"address2" : "Elmira, NY 14903"
						,"phone" : "914-923-1100"
						,"url" : "foodbankforwestchester.org/"
						,"facebook" : "http://www.facebook.com/pages/Millwood-NY/Food-Bank-For-Westchester/45097098107"
						,"twitter" : "http://twitter.com/FoodBankforWest"
						,"gmaps" : "http://maps.google.com/maps?q=200%20Clearbrook%20Road%20Elmsford,%20NY%2010523"
					}
					,"three" : {
						 "name" : "Long Island Cares, INC."
						,"address" : "10 Davids Drive"
						,"address2" : "Hauppauge, NY 11788"
						,"phone" : "631-582-3663"
						,"url" : "licares.org/"
						,"facebook" : "http://www.facebook.com/LICares"
						,"twitter" : "http://twitter.com/LongIslandCares"
						,"gmaps" : "http://maps.google.com/maps?q=10%20Davids%20Drive%20Hauppauge,%20NY%2011788"
					}
					,"four" : {
						 "name" : "Regional Food Bank of Northeastern NY"
						,"address" : "965 Albany Shaker Rd."
						,"address2" : "Latham, NY 12110"
						,"phone" : "518-786-6391"
						,"url" : "regionalfoodbank.net/"
						,"facebook" : "http://www.facebook.com/RegionalFoodBankofNENY"
						,"twitter" : "http://twitter.com/FoodBankNENY"
						,"gmaps" : "http://maps.google.com/maps?q=965%20Albany%20Shaker%20Rd.%20Latham,%20NY%2012110"
					}
					,"five" : {
						 "name" : "Island Harvest"
						,"address" : "199 Second Street"
						,"address2" : "Mineola, NY 11501"
						,"phone" : "516-294-8528"
						,"url" : "islandharvest.org/"
						,"facebook" : "http://www.facebook.com/islandharvest"
						,"twitter" : "http://twitter.com/IslandHarvest"
						,"gmaps" : "http://maps.google.com/maps?q=199%20Second%20Street%20Mineola,%20NY%2011501"
					}
					,"six" : {
						 "name" : "City Harvest"
						,"address" : "6 East 32nd Street, 5th FL."
						,"address2" : "New York, NY 10016"
						,"phone" : "646-412-0600"
						,"url" : "cityharvest.org/"
						,"facebook" : "http://www.facebook.com/CityHarvestNYC"
						,"twitter" : "http://twitter.com/CityHarvest"
						,"gmaps" : "http://maps.google.com/maps?q=6%20East%2032nd%20Street,%205th%20Fl.%20New%20York,%20NY%2010016"
					}
					,"seven" : {
						 "name" : "Food Bank for NYC"
						,"address" : "355 Food Center Dr. 39 Broadway, 10thFL."
						,"address2" : "New York, NY 10474"
						,"phone" : "718-991-4300"
						,"url" : "foodbanknyc.org/"
						,"facebook" : "http://www.facebook.com/foodbanknyc"
						,"twitter" : "http://twitter.com/FoodBank4NYC"
						,"gmaps" : "http://maps.google.com/maps?q=355%20Food%20Center%20Dr.%20New%20York,%20NY%2010474"
					}
					,"eight" : {
						 "name" : "Foodlink, INC."
						,"address" : "1999 Mt. Read Boulevard"
						,"address2" : "Rochester, NY 14615"
						,"phone" : "585-328-3380"
						,"url" : "foodlinkny.org/"
						,"facebook" : "http://www.facebook.com/FoodlinkNY"
						,"twitter" : "http://twitter.com/FoodlinkNY"
						,"gmaps" : "http://maps.google.com/maps?q=1999%20Mt.%20Read%20Boulevard%20Rochester,%20NY%2014615-2801"
					}
					,"nine" : {
						 "name" : "Food Bank of Central NY"
						,"address" : "7066 Interstate Island Road"
						,"address2" : "Syracuse, NY 13209"
						,"phone" : "315-437-1899"
						,"url" : "foodbankcny.org/"
						,"facebook" : "http://www.facebook.com/foodbankcny"
						,"twitter" : "http://twitter.com/FoodBankofCNY"
						,"gmaps" : "http://maps.google.com/maps?q=7066%20Interstate%20Island%20Road%20Syracuse,%20NY%2013209"
					}
			} 
	}
	,"northcarolina" : {
			 "state" : "North Carolina"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/north_carolina.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/north_carolina.jpg"
			,"fbCaption": "1 in 4"
			,"percent" : "27"
			,"foodBank" : {
					"one" : {
						 "name" : "Manna Food Bank"
						,"address" : "627 Swannanoa River Rd."
						,"address2" : "Asheville, NC 28805"
						,"phone" : "828-299-3663"
						,"url" : "mannafoodbank.org/"
						,"facebook" : "http://www.facebook.com/MANNAFoodBank"
						,"twitter" : "http://twitter.com/MANNAFoodBank"
						,"gmaps" : "http://maps.google.com/maps?q=627%20Swannanoa%20River%20Rd%20Asheville,%20NC%2028805"
					}
					,"two" : {
						 "name" : "Second Harvest Food Bank of Metrolina"
						,"address" : "500 B Spratt St."
						,"address2" : "Charlotte, NC 28206"
						,"phone" : "704-376-1785"
						,"url" : "secondharvestmetrolina.org/"
						,"facebook" : "http://www.facebook.com/pages/Second-Harvest-Food-Bank-of-Metrolina/85064269154"
						,"twitter" : "http://twitter.com/Foodbankonthego"
						,"gmaps" : "http://maps.google.com/maps?q=500%20B%20Spratt%20St.%20Charlotte,%20NC%2028206"
					}
					,"three" : {
						 "name" : "Food Bank of the Albemarle"
						,"address" : "109 Tidewater Way PO Box 1704"
						,"address2" : "Elizabeth City, NC 27906"
						,"phone" : "252-335-4035"
						,"url" : "afoodbank.org/"
						,"facebook" : "http://www.facebook.com/pages/Food-Bank-of-the-Albemarle/140541924093"
						,"twitter" : "http://twitter.com/FoodBankerEC"
						,"gmaps" : "http://maps.google.com/maps?q=109%20Tidewater%20Way%20Elizabeth%20City,%20NC%2027906-1704"
					}
					,"four" : {
						 "name" : "Second Harvest Food Bank of Southeast"
						,"address" : "406 Deep Creek Road PO Box 2009"
						,"address2" : "Fayetteville, NC 28302"
						,"phone" : "910-485-8809"
						,"url" : "ccap-inc.org/"
						,"facebook" : "http://www.facebook.com/shfbnc"
						,"twitter" : "http://twitter.com/CumberlandCAP"
						,"gmaps" : "http://maps.google.com/maps?q=406%20Deep%20Creek%20Road,%20PO%20Box%202009%20Fayetteville,%20NC%2028302"
					}
					,"five" : {
						 "name" : "Food Bank of Central & Eastern North Carolina"
						,"address" : "3808 Tarheel Drive"
						,"address2" : "Raleigh, NC 27609"
						,"phone" : "919-875-0707"
						,"url" : "foodbankcenc.org/"
						,"facebook" : "http://www.facebook.com/FoodBankCENC"
						,"twitter" : "http://twitter.com/FoodBankCENC"
						,"gmaps" : "http://maps.google.com/maps?q=3808%20Tarheel%20Drive%20Raleigh,%20NC%2027609"
					}
					,"six" : {
						 "name" : "Inter- Faith Food Shuttle"
						,"address" : "1001 Blair Drive PO Box 14638"
						,"address2" : "Raleigh, NC 27603"
						,"phone" : "919-250-0043"
						,"url" : "foodshuttle.org/"
						,"facebook" : "http://www.facebook.com/InterFaithFoodShuttle"
						,"twitter" : "http://twitter.com/FoodShuttle"
						,"gmaps" : "http://maps.google.com/maps?q=1001%20Blair%20Drive%20Raleigh,%20NC%2027603"
					}
					,"seven" : {
						 "name" : "Second Harvest Food Bank of Northwest North Carolina"
						,"address" : "3655 Reed Street"
						,"address2" : "Winston-Salem, NC 27107"
						,"phone" : "336-784-5770"
						,"url" : "hungernwnc.org/"
						,"facebook" : "http://www.facebook.com/Food.Bank.NWNC"
						,"twitter" : "http://twitter.com/onecanonedollar"
						,"gmaps" : "http://maps.google.com/maps?q=3655%20Reed%20Street%20Winston-Salem,%20NC%2027107"
					}
			} 
	}
	,"northdakota" : {
			 "state" : "North Dakota"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/north_dakota.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/north_dakota.jpg"
			,"fbCaption": "1 in 10"
			,"percent" : "10"
			,"foodBank" : {
					"one" : {
						 "name" : "Great Plains Food Bank"
						,"address" : "1720 3rd Avenue North PO Box 389"
						,"address2" : "Fargo, ND 58102"
						,"phone" : "701-232-6219"
						,"url" : "greatplainsfoodbank.org/"
						,"facebook" : "http://www.facebook.com/GreatPlainsFoodBank"
						,"twitter" : ""
						,"gmaps" : "http://maps.google.com/maps?q=1720%203rd%20Avenue%20North%20Fargo,%20ND%2058102"
					}
			} 
	}
	,"ohio" : {
			 "state" : "Ohio"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/ohio.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/ohio.jpg"
			,"fbCaption": "1 in 4"
			,"percent" : "26"
			,"foodBank" : {
					"one" : {
						 "name" : "Akron- Canton Regional Foodbank"
						,"address" : "350 Opportunity Parkway"
						,"address2" : "Akron, OH 44307"
						,"phone" : "330-535-6900"
						,"url" : "akroncantonfoodbank.org/"
						,"facebook" : "http://www.facebook.com/akroncantonfoodbank"
						,"twitter" : "http://twitter.com/ACRFoodbank"
						,"gmaps" : "http://maps.google.com/maps?q=350%20Opportunity%20Parkway%20Akron,%20OH%2044307"
					}
					,"two" : {
						 "name" : "Freestore Foodbank"
						,"address" : "1141 Central Parkway"
						,"address2" : "Cincinnati, OH 45202"
						,"phone" : "513-482-4500"
						,"url" : "freestorefoodbank.org/"
						,"facebook" : "http://www.facebook.com/FreestoreFoodbank"
						,"twitter" : "http://twitter.com/FreestoreFB"
						,"gmaps" : "http://maps.google.com/maps?q=1141%20Central%20Parkway%20Cincinnati,%20OH%2045202"
					}
					,"three" : {
						 "name" : "Cleveland Foodbank, INC."
						,"address" : "15500 South Waterloo Road"
						,"address2" : "Cleveland, OH 44110"
						,"phone" : "216-738-2265"
						,"url" : "clevelandfoodbank.org/"
						,"facebook" : "http://www.facebook.com/ClevelandFoodbank"
						,"twitter" : "http://twitter.com/CleveFoodbank"
						,"gmaps" : "http://maps.google.com/maps?q=15500%20South%20Waterloo%20Road%20Cleveland,%20OH%2044110"
					}
					,"four" : {
						 "name" : "The Foodbank, INC."
						,"address" : "427 Washington Street"
						,"address2" : "Dayton, OH 45402"
						,"phone" : "937-461-0265"
						,"url" : "thefoodbankdayton.org/"
						,"facebook" : "http://www.facebook.com/thefoodbank"
						,"twitter" : ""
						,"gmaps" : "http://maps.google.com/maps?q=427%20Washington%20Street%20Dayton,%20OH%2045402"
					}
					,"five" : {
						 "name" : "Shared Harvest Foodbank"
						,"address" : "5901 Dixie Highway"
						,"address2" : "Fairfield, OH 45014"
						,"phone" : "513-874-0114"
						,"url" : "sharedharvest.org/"
						,"facebook" : "http://www.facebook.com/sharedharvestfoodbank"
						,"twitter" : ""
						,"gmaps" : "http://maps.google.com/maps?q=5901%20Dixie%20Highway%20Fairfield,%20OH%2045014-4207"
					}
					,"six" : {
						 "name" : "Mid-Ohio Foodbank"
						,"address" : "3960 Brookham Dr."
						,"address2" : "Grove City, OH 43123"
						,"phone" : "614-274-7770"
						,"url" : "midohiofoodbank.org/"
						,"facebook" : "http://www.facebook.com/midohiofoodbank"
						,"twitter" : "http://twitter.com/Mid_OHFoodbank"
						,"gmaps" : "http://maps.google.com/maps?q=3960%20Brookham%20Dr.%20Grove%20City,%20OH%2043123"
					}
					,"seven" : {
						 "name" : "West Ohio Food Bank"
						,"address" : "1380 East Kibby Street PO Box 1566"
						,"address2" : "Lima, OH 45802"
						,"phone" : "419-222-7946"
						,"url" : "westohiofoodbank.org/"
						,"facebook" : "http://www.facebook.com/WestOhioFoodBank"
						,"twitter" : "http://twitter.com/WestOhioFB"
						,"gmaps" : "http://maps.google.com/maps?q=1380%20East%20Kibby%20Street%20(45804)%20Lima,%20OH%2045802-1566"
					}
					,"eight" : {
						 "name" : "SE Ohio Foodbank"
						,"address" : "1005 CIC Drive"
						,"address2" : "Logan, OH 43138"
						,"phone" : "740-385-6815"
						,"url" : "hapcap.org/foodbank"
						,"facebook" : "http://www.facebook.com/SeOhioFoodbank"
						,"twitter" : "http://twitter.com/HAPCAP"
						,"gmaps" : "http://maps.google.com/maps?q=1005%20CIC%20Drive%20Logan,%20OH%2043138"
					}
					,"nine" : {
						 "name" : "Second Harvest Food Bank of North Central Ohio"
						,"address" : "7445 Deer Trail Lane"
						,"address2" : "Lorain, OH 44053"
						,"phone" : "440-960-2265"
						,"url" : "secondharvestfoodbank.org/"
						,"facebook" : "http://www.facebook.com/Second.Harvest.Food.Bank.Ohio"
						,"twitter" : "http://twitter.com/SecondHarvestOH"
						,"gmaps" : "http://maps.google.com/maps?q=7445%20Deer%20Trail%20Lane%20Lorain,%20OH%2044053"
					}
					,"ten" : {
						 "name" : "Second Harvest Foodbank of Clark, Champaign & Logan Counties"
						,"address" : "701 East Columbia Street"
						,"address2" : "Springfield, OH 45503 "
						,"phone" : "937-323-6507"
						,"url" : "springfieldshfb.org/"
						,"facebook" : "http://www.facebook.com/pages/Second-Harvest-Food-Bank-of-Clark-Champaign-Logan-Counties/112"
						,"twitter" : ""
						,"gmaps" : "http://maps.google.com/maps?q=701%20East%20Columbia%20Street%20Springfield,%20OH%2045503"
					}
					,"eleven" : {
						 "name" : "Toledo Northwestern Ohio Food Bank"
						,"address" : "24 East Woodruff Avenue"
						,"address2" : "Toledo, OH 43604"
						,"phone" : "419-242-5000"
						,"url" : "toledofoodbank.org/"
						,"facebook" : "http://www.facebook.com/toledofoodbank"
						,"twitter" : "http://twitter.com/toledofoodbank"
						,"gmaps" : "http://maps.google.com/maps?q=24%20East%20Woodruff%20Avenue%20Toledo,%20OH%2043604"
					}
					,"twelve" : {
						 "name" : "Second Harvest Food Bank of the Mahoning Valley"
						,"address" : "2805 Salt Springs Road"
						,"address2" : "Youngstown, OH 44509"
						,"phone" : "330-792-5522"
						,"url" : "mahoningvalleysecondharvest.org/"
						,"facebook" : "http://www.facebook.com/SHFBMV"
						,"twitter" : ""
						,"gmaps" : "http://maps.google.com/maps?q=2805%20Salt%20Springs%20Road%20Youngstown,%20OH%2044509"
					}
			} 
	}
	,"oklahoma" : {
			 "state" : "Oklahoma"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/oklahoma.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/oklahoma.jpg"
			,"fbCaption": "1 in 4"
			,"percent" : "25"
			,"foodBank" : {
					"one" : {
						 "name" : "Regional Food Bank of Oklahoma"
						,"address" : "3355 South Purdue PO Box 270968"
						,"address2" : "Oklahoma City, OK 73179"
						,"phone" : "405-972-1111"
						,"url" : "regionalfoodbank.org/"
						,"facebook" : "http://www.facebook.com/regionalfoodbank"
						,"twitter" : "http://twitter.com/rfbo"
						,"gmaps" : "http://maps.google.com/maps?q=3355%20South%20Purdue%20Oklahoma%20City,%20OK%2073179"
					}
					,"two" : {
						 "name" : "Community Food Bank of Eastern Oklahoma"
						,"address" : "1304 N. Kenosha Ave."
						,"address2" : "Tulsa, OK 74106"
						,"phone" : "918-585-2800"
						,"url" : "cfbeo.org/"
						,"facebook" : "http://www.facebook.com/cfbeo"
						,"twitter" : "http://twitter.com/foodbankok"
						,"gmaps" : "http://maps.google.com/maps?q=1304%20N.%20Kenosha%20Ave.%20Tulsa,%20OK%2074106"
					}
			} 
	}
	,"oregon" : {
			 "state" : "Oregon"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/oregon.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/oregon.jpg"
			,"fbCaption": "2 in 7"
			,"percent" : "29"
			,"foodBank" : {
					"one" : {
						 "name" : "Oregon Food Bank"
						,"address" : "7900 NE 33rd Drive PO Box 55370"
						,"address2" : "Portland, OR 97238"
						,"phone" : "503-282-0555"
						,"url" : "oregonfoodbank.org/"
						,"facebook" : "http://www.facebook.com/oregonfoodbank"
						,"twitter" : "http://twitter.com/oregonfoodbank"
						,"gmaps" : "http://maps.google.com/maps?q=P.O.%20Box%2055370%20Portland,%20OR%2097238-5370"
					}
					,"two" : {
						 "name" : "St. Vincent DePaul Food Recovery Network"
						,"address" : "5120 SE Milwaukie Ave"
						,"address2" : "Portland, OR 97242"
						,"phone" : "503-234-1114"
						,"url" : "svdppdx.org/"
						,"facebook" : "http://www.facebook.com/pages/Society-of-St-Vincent-de-Paul-Portland-Council/135599376611"
						,"twitter" : ""
						,"gmaps" : "http://maps.google.com/maps?q=5120%20SE%20Milwaukie%20Ave%20Portland,%20OR%2097242-0157"
					}
			} 
	}
	,"pennsylvania" : {
			 "state" : "Pennsylvania"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/pennsylvania.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/pennsylvania.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "21"
			,"foodBank" : {
					"one" : {
						 "name" : "Second Harvest Food Bank of Lehigh Valley and NE Pennsylvania"
						,"address" : "2045 Harvest Way"
						,"address2" : "Allentown, PA 18104"
						,"phone" : "610-434-0875"
						,"url" : "shfblv.org/"
						,"facebook" : "http://www.facebook.com/SHFBofLehighValleyandNEPA"
						,"twitter" : "http://twitter.com/SHFBLV"
						,"gmaps" : "http://maps.google.com/maps?q=2045%20Harvest%20Way%20Allentown,%20PA%2018104-6793"
					}
					,"two" : {
						 "name" : "Westmoreland County Food Bank"
						,"address" : "100 Devonshire Drive"
						,"address2" : "Delmont, PA 15626"
						,"phone" : "724-468-8660"
						,"url" : "westmorelandfoodbank.org/"
						,"facebook" : "http://www.facebook.com/westmorelandfoodbank"
						,"twitter" : "http://twitter.com/WestmorelandFB"
						,"gmaps" : "http://maps.google.com/maps?q=100%20Devonshire%20Drive%20Delmont,%20PA%2015626"
					}
					,"three" : {
						 "name" : "Greater Pittsburgh Community Food Bank"
						,"address" : "1 North Linden"
						,"address2" : "Duquesne, PA 15110"
						,"phone" : "412-460-3663"
						,"url" : "pittsburghfoodbank.org/"
						,"facebook" : "http://www.facebook.com/pittsburghfoodbank"
						,"twitter" : "http://twitter.com/PghFoodBank"
						,"gmaps" : "http://maps.google.com/maps?q=1%20North%20Linden%20Duquesne,%20PA%2015110"
					}
					,"four" : {
						 "name" : "Second Harvest Food Bank of Northwest Pennsylvania"
						,"address" : "1507 Grimm Drive"
						,"address2" : "Erie, PA 16501"
						,"phone" : "814-459-3663"
						,"url" : "eriefoodbank.org/"
						,"facebook" : "http://www.facebook.com/pages/Second-Harvest-Food-Bank-of-NW-PA/175565862500886"
						,"twitter" : "http://twitter.com/ErieFoodBank"
						,"gmaps" : "http://maps.google.com/maps?q=1507%20Grimm%20Drive%20Erie,%20PA%2016501"
					}
					,"five" : {
						 "name" : "Central Pennsylvania Food Bank"
						,"address" : "3908 Corey Road"
						,"address2" : "Harrisburg, PA 17109"
						,"phone" : "717-564-1700"
						,"url" : "centralpafoodbank.org/"
						,"facebook" : "http://www.facebook.com/pages/Central-Pennsylvania-Food-Bank/134696280446"
						,"twitter" : "http://twitter.com/centralpafb"
						,"gmaps" : "http://maps.google.com/maps?q=3908%20Corey%20Road%20Harrisburg,%20PA%2017109-5929"
					}
					,"six" : {
						 "name" : "Channels Food Rescue"
						,"address" : "3305 North 6th Street"
						,"address2" : "Harrisburg, PA 17110"
						,"phone" : "717-232-1300"
						,"url" : "channelsfoodrescue.com/"
						,"facebook" : "http://www.facebook.com/channelsfoodrescue"
						,"twitter" : ""
						,"gmaps" : "http://maps.google.com/maps?q=3305%20North%206th%20Street%20Harrisburg,%20PA%2017110"
					}
					,"seven" : {
						 "name" : "Philabundance"
						,"address" : "3616 S. Galloway Street"
						,"address2" : "Philadelphia, PA 19148"
						,"phone" : "215-339-0900"
						,"url" : "philabundance.org/"
						,"facebook" : "http://www.facebook.com/Philabundance"
						,"twitter" : "http://twitter.com/Philabundance"
						,"gmaps" : "http://maps.google.com/maps?q=3616%20S.%20Galloway%20Street%20Philadelphia,%20PA%2019148"
					}
					,"eight" : {
						 "name" : "Greater Berks Food Bank"
						,"address" : "1011 Tuckerton Court"
						,"address2" : "Reading, PA 19605"
						,"phone" : "610-926-5802"
						,"url" : "berksfoodbank.org/"
						,"facebook" : "http://www.facebook.com/GreaterBerksFoodBank"
						,"twitter" : ""
						,"gmaps" : "http://maps.google.com/maps?q=1011%20Tuckerton%20Court%20Reading,%20PA%2019605"
					}
					,"nine" : {
						 "name" : "Community Food Warehouse of Mercer County"
						,"address" : "109 S. Sarpsville Avenue, Suite A"
						,"address2" : "Sharon, PS 16146"
						,"phone" : "724-981-0353"
						,"url" : "foodwarehouse.org/"
						,"facebook" : "http://www.facebook.com/pages/Community-Food-Warehouse-of-Mercer-County/541662715886249"
						,"twitter" : ""
						,"gmaps" : "http://maps.google.com/maps?q=109%20S%20Sharpsville%20Avenue%20Sharon,%20PA%2016146"
					}
					,"ten" : {
						 "name" : "H & J Weinberg NE PA Regional Food Bank"
						,"address" : "165 Amber Lane PO BOX 1127"
						,"address2" : "Wilkes Barre, PA 18703"
						,"phone" : "570-826-0510"
						,"url" : "ceopeoplehelpingpeople.org/"
						,"facebook" : "http://www.facebook.com/CEO.nepa"
						,"twitter" : "http://twitter.com/CEOWeinbergFB"
						,"gmaps" : "http://maps.google.com/maps?q=165%20Amber%20Lane,%20PO%20Box%201127%20Wilkes%20Barre,%20PA%2018703-1127"
					}
			} 
	}
	,"rhodeisland" : {
			 "state" : "Rhode Island"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/rhode_island.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/rhode_island.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "22"
			,"foodBank" : {
					"one" : {
						 "name" : "Rhode Island Community Bank"
						,"address" : "200 Niantic Ave."
						,"address2" : "Providence, RI 02907"
						,"phone" : "401-942-6325"
						,"url" : "rifoodbank.org/"
						,"facebook" : "http://www.facebook.com/RICFB"
						,"twitter" : "http://twitter.com/RIFoodBank"
						,"gmaps" : "http://maps.google.com/maps?q=200%20Niantic%20Ave.%20Providence,%20RI%2002907"
					}
			} 
	}
	,"southcarolina" : {
			 "state" : "South Carolina"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/south_carolina.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/south_carolina.jpg"
			,"fbCaption": "1 in 4"
			,"percent" : "27"
			,"foodBank" : {
					"one" : {
						 "name" : "Lowcountry Food Bank"
						,"address" : "2864 Azalea Drive"
						,"address2" : "Charleston, SC 29405"
						,"phone" : "843-747-8146"
						,"url" : "lowcountryfoodbank.org/"
						,"facebook" : "http://www.facebook.com/LowcountryFoodBank"
						,"twitter" : "http://twitter.com/lcfoodbank"
						,"gmaps" : "http://maps.google.com/maps?q=2864%20Azalea%20Drive%20Charleston,%20SC%2029405"
					}
					,"two" : {
						 "name" : "Harvest Hope Food Bank"
						,"address" : "2220 Shop Road"
						,"address2" : "PS Boc 451"
						,"phone" : ""
						,"url" : "harvesthope.org/"
						,"facebook" : "http://www.facebook.com/pages/Harvest-Hope-Food-Bank/110374789005998"
						,"twitter" : "http://twitter.com/HarvestHopeFB"
						,"gmaps" : "http://maps.google.com/maps?q=2220%20Shop%20Road%20Columbia,%20SC%2029201"
					}
			} 
	}
	,"southdakota" : {
			 "state" : "South Dakota"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/south_dakota.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/south_dakota.jpg"
			,"fbCaption": "1 in 6"
			,"percent" : "18"
			,"foodBank" : {
					"one" : {
						 "name" : "Feeding South Dakota"
						,"address" : "3511 N. 1st Avenue"
						,"address2" : "Sioux Falls, SD 57104"
						,"phone" : "605-335-0364"
						,"url" : "feedingsouthdakota.org/"
						,"facebook" : "http://www.facebook.com/FeedingSD"
						,"twitter" : "http://twitter.com/FeedingSD"
						,"gmaps" : "http://maps.google.com/maps?q=3511%20N.%201st%20Avenue%20Sioux%20Falls,%20SD%2057104"
					}
			} 
	}
	,"tennessee" : {
			 "state" : "Tennessee"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/tennessee.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/tennessee.jpg"
			,"fbCaption": "1 in 4"
			,"percent" : "25"
			,"foodBank" : {
					"one" : {
						 "name" : "Chattanooga Area Food Bank"
						,"address" : "2009 Curtain Pole Road"
						,"address2" : "Chattanooga, TN 37406"
						,"phone" : "423-622-1800"
						,"url" : "chattfoodbank.org/"
						,"facebook" : "http://www.facebook.com/chattfoodbank"
						,"twitter" : "http://twitter.com/chattfood"
						,"gmaps" : "http://maps.google.com/maps?q=2009%20Curtain%20Pole%20Road%20Chattanooga,%20TN%2037406"
					}
					,"two" : {
						 "name" : "Second Harvest Food Bank of Northeast Tennessee"
						,"address" : "127 Dillon Ct."
						,"address2" : "Gray, TN 37615"
						,"phone" : "423-477-4053"
						,"url" : "netfoodbank.org/"
						,"facebook" : "http://www.facebook.com/netfoodbank"
						,"twitter" : "http://twitter.com/2ndHarvestNETN"
						,"gmaps" : "http://maps.google.com/maps?q=127%20Dillon%20Ct.%20Gray,%20TN%2037615"
					}
					,"three" : {
						 "name" : "Second Harvest Food Bank of East Tennessee"
						,"address" : "136 Harvest Lane"
						,"address2" : "Maryville, TN 37801"
						,"phone" : "855-521-0000"
						,"url" : "secondharvestetn.org/"
						,"facebook" : "http://www.facebook.com/pages/Second-Harvest-Food-Bank-of-East-Tennessee/126690546681"
						,"twitter" : "http://twitter.com/SecondHarvestET"
						,"gmaps" : "http://maps.google.com/maps?q=136%20Harvest%20Lane%20Maryville,%20TN%2037801"
					}
					,"four" : {
						 "name" : "Mid-South Food Bank"
						,"address" : "239 S. Dudley Street"
						,"address2" : "Memphis, TN 38104"
						,"phone" : "901-527-0841"
						,"url" : "midsouthfoodbank.org/"
						,"facebook" : "http://www.facebook.com/midsouthfoodbank"
						,"twitter" : "http://twitter.com/mSouthFoodBank"
						,"gmaps" : "http://maps.google.com/maps?q=239%20S.%20Dudley%20Street%20Memphis,%20TN%2038104-3203"
					}
					,"five" : {
						 "name" : "Second Harvest Food Bank of Middle Tennessee"
						,"address" : "331 Great Circle Road"
						,"address2" : "Nashville, TN 37228"
						,"phone" : "615-329-3491"
						,"url" : "secondharvestmidtn.org/"
						,"facebook" : "http://facebook.com/2HarvestMidTN"
						,"twitter" : "http://twitter.com/2harvestmidtn"
						,"gmaps" : "http://maps.google.com/maps?q=331%20Great%20Circle%20Road%20Nashville,%20TN%2037228"
					}
			} 
	}
	,"texas" : {
			 "state" : "Texas"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/texas.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/texas.jpg"
			,"fbCaption": "1 in 4"
			,"percent" : "28"
			,"foodBank" : {
					"one" : {
						 "name" : "Food Bank of West Central Texas"
						,"address" : "5505 N. 1st St."
						,"address2" : "Abilene, TX 79603"
						,"phone" : "325-695-6311"
						,"url" : "fbwct.org/"
						,"facebook" : "http://www.facebook.com/wctfoodbank"
						,"twitter" : "http://twitter.com/WTXFB"
						,"gmaps" : "http://maps.google.com/maps?q=5505%20N.%20First%20Abilene,%20TX%2079603"
					}
					,"two" : {
						 "name" : "High Plains Food Bank"
						,"address" : "815 S. Ross PO Box 31803"
						,"address2" : "Amarillo, TX 79120"
						,"phone" : "806-374-8562"
						,"url" : "hpfb.org/"
						,"facebook" : "http://www.facebook.com/highplainsfoodbank"
						,"twitter" : "http://twitter.com/hpfoodbank"
						,"gmaps" : "http://maps.google.com/maps?q=815%20S.%20Ross%20Amarillo,%20TX%2079120"
					}
					,"three" : {
						 "name" : "Capital Area Food Bank of TX, INC."
						,"address" : "8201 S. Congress Avenue"
						,"address2" : "Austin, TX 78745"
						,"phone" : "512-282-2111"
						,"url" : "austinfoodbank.org/"
						,"facebook" : "http://www.facebook.com/CapitalAreaFoodBankofTexas"
						,"twitter" : "http://twitter.com/CAFBTX"
						,"gmaps" : "http://maps.google.com/maps?q=8201%20S.%20Congress%20Avenue%20Austin,%20TX%2078745"
					}
					,"four" : {
						 "name" : "Southeast Texas Food Bank"
						,"address" : "3845 Martin Luther King Parkway PO Box 21012"
						,"address2" : "Beaumont, TX 77705"
						,"phone" : "409-839-8777"
						,"url" : "setxfoodbank.org/"
						,"facebook" : "http://www.facebook.com/SETXFOODBANK"
						,"twitter" : "http://twitter.com/SETXFoodBank"
						,"gmaps" : "http://maps.google.com/maps?q=3845%20Martin%20Luther%20King%20Parkway%20Beaumont,%20TX%2077705"
					}
					,"five" : {
						 "name" : "Food Bank of Corpus Christi"
						,"address" : "826 Krill St."
						,"address2" : "Corpus Christi, TX 78408"
						,"phone" : "361-887-6291"
						,"url" : "foodbankofcorpuschristi.org/"
						,"facebook" : "http://www.facebook.com/FoodBankofCorpusChristi"
						,"twitter" : "http://twitter.com/FoodBankofCC"
						,"gmaps" : "http://maps.google.com/maps?q=826%20Krill%20St.%20Corpus%20Christi,%20TX%2078408"
					}
					,"six" : {
						 "name" : "North Texas Food Bank"
						,"address" : "4500 S. Cockrell Hill Road"
						,"address2" : "Dallas, TX 75236"
						,"phone" : "214-330-1396"
						,"url" : "ntfb.org/"
						,"facebook" : "http://www.facebook.com/feednorthtexas"
						,"twitter" : "http://twitter.com/ntfb"
						,"gmaps" : "http://maps.google.com/maps?q=4500%20S.%20Cockrell%20Hill%20Road%20Dallas,%20TX%2075236-2028"
					}
					,"seven" : {
						 "name" : "Tarrant Area Food Bank"
						,"address" : "2600 Cullen St."
						,"address2" : "Ft. Worth, TX 76107"
						,"phone" : "817-332-9177"
						,"url" : "tafb.org/"
						,"facebook" : "http://www.facebook.com/TAFoodBank"
						,"twitter" : "http://twitter.com/TAFoodbank"
						,"gmaps" : "http://maps.google.com/maps?q=2600%20Cullen%20Ft.%20Worth,%20TX%2076107"
					}
					,"eight" : {
						 "name" : "Houston Food Bank"
						,"address" : "535 Portwall Street"
						,"address2" : "Houston, TX 77029"
						,"phone" : "713-223-3700"
						,"url" : "houstonfoodbank.org/"
						,"facebook" : "http://www.facebook.com/thehoustonfoodbank"
						,"twitter" : "http://twitter.com/HoustonFoodBank"
						,"gmaps" : "http://maps.google.com/maps?q=535%20Portwall%20Street%20Houston,%20TX%2077029"
					}
					,"nine" : {
						 "name" : "South Texas Food Bank"
						,"address" : "1907 Freight"
						,"address2" : "Laredo, TX 78041"
						,"phone" : "956-726-3120"
						,"url" : "southtexasfoodbank.org/"
						,"facebook" : "http://www.facebook.com/southtexasfoodbank"
						,"twitter" : "http://twitter.com/SoTxFoodBank"
						,"gmaps" : "http://maps.google.com/maps?q=1907%20Freight%20Laredo,%20TX%2078041"
					}
					,"ten" : {
						 "name" : "South Plains Food Bank"
						,"address" : "4612 Locust Avenue"
						,"address2" : "Lubbock, TX 79404"
						,"phone" : "806-763-3003"
						,"url" : "spfb.org/"
						,"facebook" : "http://www.facebook.com/pages/South-Plains-Food-Bank/115034736092"
						,"twitter" : "http://twitter.com/SPFB"
						,"gmaps" : "http://maps.google.com/maps?q=4612%20Locust%20Avenue%20Lubbock,%20TX%2079404"
					}
					,"eleven" : {
						 "name" : "West Texas Food Bank"
						,"address" : "1008 East 2nd Street PO Box 4242"
						,"address2" : "Odessa, TX 79760"
						,"phone" : "432-580-6333"
						,"url" : "wtxfoodbank.org/"
						,"facebook" : "http://www.facebook.com/FeedWestTX"
						,"twitter" : "http://twitter.com/WTXFB"
						,"gmaps" : "http://maps.google.com/maps?q=1008%20East%202nd%20Street%20Odessa,%20TX%2079760"
					}
					,"twelve" : {
						 "name" : "Food Bank of the Rio Grande Valley, INC."
						,"address" : "724 N. Cage Blvd."
						,"address2" : "Pharr, TX 78577"
						,"phone" : "956-682-8101"
						,"url" : "foodbankrgv.com/"
						,"facebook" : "http://www.facebook.com/FoodBankRGV"
						,"twitter" : "http://twitter.com/foodbankrgv"
						,"gmaps" : "http://maps.google.com/maps?q=724%20N.%20Cage%20Blvd.%20Pharr,%20TX%2078577"
					}
					,"thirteen" : {
						 "name" : "San Antonio Food Bank"
						,"address" : "5200 Old Highway 90"
						,"address2" : "West San Antonio, TX 78227"
						,"phone" : "210-337-3663"
						,"url" : "safoodbank.org/"
						,"facebook" : "http://www.facebook.com/safoodbank"
						,"twitter" : "http://twitter.com/safoodbank"
						,"gmaps" : "http://maps.google.com/maps?q=5200%20Old%20Highway%2090%20West%20San%20Antonio,%20TX%2078227-2209"
					}
					,"fourteen" : {
						 "name" : "East Texas Food Bank"
						,"address" : "3201 Robertson Road PO Box 6974"
						,"address2" : "Tyler, TX 75701"
						,"phone" : "903-597-3663"
						,"url" : "easttexasfoodbank.org/"
						,"facebook" : "http://www.facebook.com/etfoodbank"
						,"twitter" : "http://twitter.com/ETFoodBank"
						,"gmaps" : "http://maps.google.com/maps?q=3201%20Robertson%20Road%20Tyler,%20TX%2075701"
					}
					,"fifteen" : {
						 "name" : "Food Bank of the Golden Crescent"
						,"address" : "3809 E. Rio Grande PO Box 5085"
						,"address2" : "Victoria, TX 77901"
						,"phone" : "361-578-0591"
						,"url" : "tfbgc.org/"
						,"facebook" : "http://https//www.facebook.com/foodbankofthegc"
						,"twitter" : ""
						,"gmaps" : "http://maps.google.com/maps?q=3809%20E.%20Rio%20Grande%20Victoria,%20TX%2077901"
					}
					,"sixteen" : {
						 "name" : "Wichita Falls Area Food Bank"
						,"address" : "1230 Midwestern Parkway PO Box 623"
						,"address2" : "Wichita Falls, TX 76307"
						,"phone" : "940-766-2322"
						,"url" : "wfafb.org/"
						,"facebook" : "http://www.facebook.com/WFAFB"
						,"twitter" : ""
						,"gmaps" : "http://maps.google.com/maps?q=1230%20Midwestern%20Parkway%20Wichita%20Falls,%20TX%2076307"
					}
			} 
	}
	,"utah" : {
			 "state" : "Utah"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/utah.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/utah.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "21"
			,"foodBank" : {
					"one" : {
						 "name" : "Utah Food Bank"
						,"address" : "3150 South 900 West"
						,"address2" : "Salt Lake City, UT 84119"
						,"phone" : "801-908-8660"
						,"url" : "utahfoodbank.org/"
						,"facebook" : "http://www.facebook.com/utahfoodbank"
						,"twitter" : "http://twitter.com/utahfoodbank"
						,"gmaps" : "http://maps.google.com/maps?q=3150%20South%20900%20West%20Salt%20Lake%20City,%20UT%2084119"
					}
			} 
	}
	,"vermont" : {
			 "state" : "Vermont"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/vermont.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/vermont.jpg"
			,"fbCaption": "1 in 6"
			,"percent" : "19"
			,"foodBank" : {
					"one" : {
						 "name" : "Vermont Food Bank"
						,"address" : "33 Parker Road PO Box 254"
						,"address2" : "Barre, VT 05641"
						,"phone" : "802-476-3341"
						,"url" : "vtfoodbank.org/"
						,"facebook" : "http://www.facebook.com/VermontFoodbank"
						,"twitter" : "http://twitter.com/VermontFoodbank"
						,"gmaps" : "http://maps.google.com/maps?q=33%20Parker%20Road%20Barre,%20VT%2005641"
					}
			} 
	}
	,"virginia" : {
			 "state" : "Virginia"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/virginia.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/virginia.jpg"
			,"fbCaption": "1 in 6"
			,"percent" : "17"
			,"foodBank" : {
					"one" : {
						 "name" : "Fredericksburg Area Food Bank"
						,"address" : "3631 Lee Hill Drive PO Box 1006"
						,"address2" : "Fredericksburg, VA 22408"
						,"phone" : "540-371-7666"
						,"url" : "fredfood.org"
						,"facebook" : "http://www.facebook.com/FredFood"
						,"twitter" : "http://twitter.com/FredFoodVA"
						,"gmaps" : "http://maps.google.com/maps?q=3631%20Lee%20Hill%20Drive%20Fredericksburg,%20VA%2022408"
					}
					,"two" : {
						 "name" : "Foodbank of the Virginia Peninsula"
						,"address" : "2401 Aluminum Avenue"
						,"address2" : "Hampton, VA 23661"
						,"phone" : "757-596-7188"
						,"url" : "hrfoodbank.org"
						,"facebook" : "http://www.facebook.com/VAPenFoodbank"
						,"twitter" : "http://twitter.com/hrfoodbank"
						,"gmaps" : "http://maps.google.com/maps?q=2401%20Aluminum%20Avenue%20Hampton,%20VA%2023661"
					}
					,"three" : {
						 "name" : "Foodbank of Southeastern Virginia"
						,"address" : "800 Tidewater Drive PO Box 1940"
						,"address2" : "Norfolk, VA 23504"
						,"phone" : "757-627-6599"
						,"url" : "foodbankonline.org"
						,"facebook" : "http://www.facebook.com/SEVAFoodbank"
						,"twitter" : "http://twitter.com/FoodbankSEVA"
						,"gmaps" : "http://maps.google.com/maps?q=800%20Tidewater%20Drive%20Norfolk,%20VA%2023504"
					}
					,"four" : {
						 "name" : "Feedmore"
						,"address" : "1415 Rhoadmiller Street"
						,"address2" : "Richmond, VA 23220"
						,"phone" : "804-521-2500"
						,"url" : "feedmore.org"
						,"facebook" : "http://https//www.facebook.com/FeedMore"
						,"twitter" : "http://twitter.com/FeedMoreInc"
						,"gmaps" : "http://maps.google.com/maps?q=1415%20Rhoadmiller%20Street%20Richmond,%20VA%2023220"
					}
					,"five" : {
						 "name" : "Feeding America Southwest Virginia"
						,"address" : "1025 Electric Road"
						,"address2" : "Salem, VA 24153"
						,"phone" : "540-342-3011"
						,"url" : "faswa.org"
						,"facebook" : "http://www.facebook.com/feedingamericaswva"
						,"twitter" : "http://twitter.com/SWVAFoodbank"
						,"gmaps" : "http://maps.google.com/maps?q=1025%20Electric%20Road%20Salem,%20VA%2024153"
					}
					,"six" : {
						 "name" : "Blue Ridge Area Food Bank, INC."
						,"address" : "96 Laurel Hill Road PO Box 937"
						,"address2" : "Verona, VA 24482"
						,"phone" : "540-248-3663"
						,"url" : "brafb.org"
						,"facebook" : "http://www.facebook.com/BlueRidgeAreaFoodBank"
						,"twitter" : "http://twitter.com/BRAFB"
						,"gmaps" : "http://maps.google.com/maps?q=96%20Laurel%20Hill%20Road%20Verona,%20VA%2024482"
					}
			} 
	}
	,"washington" : {
			 "state" : "Washington"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/washington.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/washington.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "24"
			,"foodBank" : {
					"one" : {
						 "name" : "Food Lifeline"
						,"address" : "1702 NE 150th St."
						,"address2" : "Shoreline, WA 98155"
						,"phone" : "206-545-660"
						,"url" : "foodlifeline.org/"
						,"facebook" : "http://www.facebook.com/FoodLifeline"
						,"twitter" : "http://twitter.com/FoodLifeline"
						,"gmaps" : "http://maps.google.com/maps?q=1702%20NE%20150th%20St.%20Shoreline,%20WA%2098155-7226"
					}
					,"two" : {
						 "name" : "Second Harvest Inland Northwest"
						,"address" : "1234 E. Front Avenue"
						,"address2" : "Spokeane, WA 99202"
						,"phone" : "509-534-6678"
						,"url" : "2-harvest.org/"
						,"facebook" : "http://www.facebook.com/pages/Second-Harvest-Inland-Northwest/123973695052"
						,"twitter" : "http://twitter.com/2ndHarvestAlert"
						,"gmaps" : "http://maps.google.com/maps?q=1234%20E.%20Front%20Avenue%20Spokane,%20WA%2099202"
					}
			} 
	}
	,"westvirginia" : {
			 "state" : "West Virginia"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/west_virginia.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/west_virginia.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "22"
			,"foodBank" : {
					"one" : {
						 "name" : "Mountaineer Food Bank"
						,"address" : "484 Enterprise Drive"
						,"address2" : "Gassaway, WV 26624"
						,"phone" : "304-364-5518"
						,"url" : "mountaineerfoodbank.org/"
						,"facebook" : "http://www.facebook.com/pages/Mountaineer-Food-Bank/72691899876"
						,"twitter" : "http://twitter.com/MountaineerFood"
						,"gmaps" : "http://maps.google.com/maps?q=484%20Enterprise%20Drive%20Gassaway,%20WV%2026624"
					}
					,"two" : {
						 "name" : "Huntington Area Food Bank, INC."
						,"address" : "1327 Seventh Avenue"
						,"address2" : "Huntington, WV 25701"
						,"phone" : "304-523-6029"
						,"url" : "hafb.org/"
						,"facebook" : "http://https//www.facebook.com/HuntingtonFoodBank"
						,"twitter" : "http://twitter.com/Huntington_Bank"
						,"gmaps" : "http://maps.google.com/maps?q=1327%20Seventh%20Avenue%20Huntington,%20WV%2025701"
					}
			} 
	}
	,"wisconsin" : {
			 "state" : "Wisconsin"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/wisconsin.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/wisconsin.jpg"
			,"fbCaption": "1 in 5"
			,"percent" : "21"
			,"foodBank" : {
					"one" : {
						 "name" : "Second Harvest Foodbank of Southern Wisconsin"
						,"address" : "2802 Dairy Drive"
						,"address2" : "Madison, WI 53718"
						,"phone" : "608-223-9121"
						,"url" : "secondharvestmadison.org/"
						,"facebook" : "http://www.facebook.com/SecondHarvestFoodbankOfSouthernWisconsin"
						,"twitter" : "http://twitter.com/SecondHarvestSW"
						,"gmaps" : "http://maps.google.com/maps?q=2802%20Dairy%20Drive%20Madison,%20WI%2053718"
					}
					,"two" : {
						 "name" : "Feeding America Eastern Wisconsin"
						,"address" : "1700 W. Fond Du Lac Avenue"
						,"address2" : "Milwaukee, WI 53205"
						,"phone" : "414-931-7400"
						,"url" : "feedingamericawi.org/"
						,"facebook" : "http://www.facebook.com/FeedingAmericaEasternWisconsin"
						,"twitter" : "http://twitter.com/FeedAmericaWI"
						,"gmaps" : "http://maps.google.com/maps?q=1700%20W.%20Fond%20Du%20Lac%20Avenue%20Milwaukee,%20WI%2053205"
					}
			} 
	}
	,"wyoming" : {
			 "state" : "Wyoming"
			,"info" : "http://opop.cachefly.net/RobLum/Graphics/wyoming.png"
			,"shareImg" : "http://opop.cachefly.net/RobLum/Graphics/Share_Images/wyoming.jpg"
			,"fbCaption": "1 in 6"
			,"percent" : "18"
			,"foodBank" : {

			} 
	}

};