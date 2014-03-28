<script>
	jQuery(document).ready(function(){
		var bitlyLink = '1lTtOIa';
	jQuery(function($) {
		var charity = {
			'redCross' : {
				'name' : 'American Red Cross'
				,'message' : 'raise money to alleviate and prevent human suffering during emergencies.'
				,'image' : 'https://opop.cachefly.net/bjs/logos/red-cross.jpg'
			}, 'americanHeart' : {
				'name' : 'American Heart Association'
				,'message' : 'raise money to build lives free of cardiovascular disease and stroke.'
				,'image' : 'https://opop.cachefly.net/bjs/logos/american-heart.jpg'
			}, 'actionHealthy' : {
				'name' : 'Action for Healthy Kids'
				,'message' : 'raise money to shape healthy schools.'
				,'image' : 'https://opop.cachefly.net/bjs/logos/action-kids.jpg'
			}, 'stJudes' : {
				'name' : 'St Jude Children\'s Research Hospital'
				,'message' : 'raise money to help treat and defend childhood cancer and other deadly diseases.'
				,'image' : 'https://opop.cachefly.net/bjs/logos/st-jude.jpg'
			}, 'feedingAmerica' : {
				'name' : 'Feeding America'
				,'message' : 'raise money to feed more than 37 million people in the fight against hunger.'
				,'image' : 'https://opop.cachefly.net/bjs/logos/feed-america.jpg'
			}, 'feedChildren' : {
				'name' : 'Feed The Children'
				,'message' : 'raise money to make sure that no family goes to bed hungry.'
				,'image' : 'https://opop.cachefly.net/bjs/logos/feed-children.jpg'
			}, 'actionHunger' : {
				'name' : 'Action Against Hunger'
				,'message' : 'raise money to aid malnourished children via sustainable hunger solutions.'
				,'image' : 'https://opop.cachefly.net/bjs/logos/action-hunger.jpg'
			}, 'mealsWheels' : {
				'name' : 'Meals on Wheels'
				,'message' : 'raise money to serve over one million meals a day to seniors in need.'
				,'image' : 'https://opop.cachefly.net/bjs/logos/meals-wheels.jpg'
			}, 'endHomelessness' : {
				'name' : 'National Alliance to End Homelessness'
				,'message' : 'raise money to prevent and end homelessness in the US.'
				,'image' : 'https://opop.cachefly.net/bjs/logos/homelessness.jpg'
			}, 'unitedWay' : {
				'name' : 'United Way'
				,'message' : 'raise money to improve lives around the world to advance the common good.'
				,'image' : 'https://opop.cachefly.net/bjs/logos/united.jpg'
			}, 'nationalDiaper' : {
				'name' : 'National Diaper Bank Network'
				,'message' : 'raise money to help families get diapers to keep babies clean, dry + healthy'
				,'image' : 'https://opop.cachefly.net/bjs/logos/diapers.jpg'
			}, 'domesticAbuse' : {
				'name' : 'National Coalition Against Domestic Violence'
				,'message' : 'raise money to end violence against women.'
				,'image' : 'https://opop.cachefly.net/bjs/logos/NCADV.jpg'
			}, 'jumpStart' : {
				'name' : 'Jumpstart'
				,'message' : 'raise money to make sure kids are ready to succeed the day they start kindergarten.'
				,'image' : 'https://opop.cachefly.net/bjs/logos/jumpstart.jpg'
			}, 'famiiesLearning' : {
				'name' : 'National Center for Families Learning'
				,'message' : 'raise money to engage families and  drive educational progress.'
				,'image' : 'https://opop.cachefly.net/bjs/logos/NCFI.jpg'
			}, 'bigBrothers' : {
				'name' : 'Big Brothers Big Sisters'
				,'message' : 'raise money to help kids facing adversity achieve success.'
				,'image' : 'https://opop.cachefly.net/bjs/logos/big-bro_big-sis.jpg'
			}, 'teachForAmerica' : {
				'name' : 'Teach for America'
				,'message' : 'raise money to recruit the best and brightest to teach at U.S. schools.'
				,'image' : 'https://opop.cachefly.net/bjs/logos/teach-america.jpg'
			}
		};

		jQuery('.charity-fb-share').click(function(){
			
			var charityName = this.id
				,shareImage = charity[charityName].image
				,charityMessage = charity[charityName].message
				,charityName = charity[charityName].name;

			FB.ui({
				method: 'feed',
				name: 'My Favorite Charity | BJ\'s Charity Championship',
				link: 'http://bit.ly/' + bitlyLink,
				// caption: ,
				description: 'Vote for ' + charityName + ' in BJ\'s Charity Championship. Your support could help ' + charityMessage,
				picture: shareImage
			});
		});

		jQuery('.large-fb').click(function(){
			

			FB.ui({
				method: 'feed',
				name: 'BJ\'s Charity Championship',
				link: 'http://bit.ly/' + bitlyLink,
				// caption: ,
				description: 'Join a different kind of madness this March. In our tournament, 16 charities go toe-to-toe to strengthen communities. We\'ll be giving out 45K in donations! Vote today and '
			});
		});

	});
	});
</script>