<script>

jQuery(function($) {

    var legal = $('.legal');

    // Insert custom submit button
    $('.SSubmit').append('<button class="uploadable" id="custom-submit" type="submit" value="Submit"></button>');

    $('#sfield_email').insertAfter('#sfield_zip');
    $('#sfield_birthday').insertAfter('#sfield_email');

    $(legal).insertAfter('.SSubmit');

    if ($('#After').length > 0) {
        $('#After').css('background','url("https://opop.cachefly.net/Matrix/bg-aftersignup-english2.png")');
    }

    $('.fb-button').click(function(e){
        e.preventDefault();
        FB.ui({
            method: 'feed',
            name: 'Matrix Canada',
            link: 'http://bit.ly/QeQ8SA',
            caption: 'http://bit.ly/QeQ8SA',
            description: 'I just claimed my free MatrixCanada Biolage samples. Claim yours too: http://bit.ly/QeQ8SA'
        });
    });
});
</script>