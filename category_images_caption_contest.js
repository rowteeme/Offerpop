$('<img class="category-icon" src="">').prependTo('#essay-list .essay');

var updateCategoryImages = function(){
	var categoriesArray = ['Be Your Own Boss','Empower Your Career','Invest In Your Future','Your Money Smarts'];

	$('.essay .caption-body .byline').each(function(){
		var textCopy = $(this).text()
		,imageLink;
		for ( var i = 0; i <= categoriesArray.length; i++ ) {
			if ( textCopy.indexOf(categoriesArray[i] ) !== -1 ){
			var currentCategory = categoriesArray[i];
				switch(currentCategory){
				case categoriesArray[0]:
				imageLink = 'https://s3.amazonaws.com/com.offerpop.datastore/438279/KCDO_B.png';
				break;

				case categoriesArray[1]:
				imageLink = 'https://s3.amazonaws.com/com.offerpop.datastore/438279/0JMnNi.png';
				break;

				case categoriesArray[2]:
				imageLink = 'https://s3.amazonaws.com/com.offerpop.datastore/438279/cWcUhj.png';
				break;

				case categoriesArray[3]:
				imageLink = 'https://s3.amazonaws.com/com.offerpop.datastore/438279/6EqFMe.png';
				break;
				}
			$(this).closest('.essay').children('.category-icon').attr('src',imageLink);
			}
		}
	});
}

updateCategoryImages();