<script>

jQuery(function($) {

    var legal = $('.legal');

    // Insert custom submit button
    $('.SSubmit').append('<button class="uploadable" id="custom-submit" type="submit" value="Submit"></button>');

    $('#sfield_email').insertAfter('#sfield_zip');
    $('#sfield_birthday').insertAfter('#sfield_email');

    $(legal).insertAfter('.SSubmit');

    if ($('#After').length > 0) {
        $('#After').css('background','url("https://opop.cachefly.net/Matrix/bg-aftersignup-english.png")');
    }
});

</script>