<script>

jQuery(function($) {

	var legal = $('.legal');

	// Insert custom submit button
	$('.SSubmit').append('<button class="uploadable" id="custom-submit" type="submit" value="Submit"></button>');

	$(legal).insertAfter('.SSubmit');
});

</script>

<style>