<link rel="stylesheet" href="https://opop.cachefly.net/Clear/clear-styles.css" type="text/css" charset="utf-8" />
<script>

jQuery(function($) {

    var back = jQuery('<div id="back"><a href="/Contest.psp?c=565408&u=54823&a=281603285304794&p=643783498974952&rest=0&v=Home">Go back to learn more about the contest!</a></div>');

    var shareButtons = '<div class="share-buttons"><span>Share This:&nbsp&nbsp</span><a class="fb-share" href="#" target="_parent"><img src="https://opop.cachefly.net/Clear/fb-share.png" /></a><a class="twitter-share" href="https://twitter.com/intent/tweet?text=Win%20an%20express%20pass%20to%20a%20casting%20audition%20for%20%40NBCTheVoice.%20Upload%20a%20video%20for%20a%20chance!%20http%3A%2F%2Fbit.ly%2FOq3Tfu" data-lang="en" data-related="NBCTheVoice,clearhair" target="_blank"><img src="https://opop.cachefly.net/Clear/twitter-share.png" /></a><a class="email-share" href="mailto:?subject=%23TeamCLEAR%20-%20Sing%20Your%20Way%20To%20The%20Stage&body=Want%20to%20show%20the%20world%20that%20you%E2%80%99ve%20got%20what%20it%20takes%20to%20make%20it%20on%20THE%20VOICE%3F%20Upload%20a%20video%20that%20shows%20off%20your%20strong%20singing%20voice%20and%20show-stopping%20hair%20on%20the%20CLEAR%20Facebook%20page%20and%20you%20could%20be%20on%20your%20way%20to%20an%20express%20pass%20to%20a%20casting%20audition%20for%20an%20upcoming%20season%20of%20THE%20VOICE.%20Enter%20now%3A%20http%3A%2F%2Fbit.ly%2F1kBLK9l" target="_blank"><img src="https://opop.cachefly.net/Clear/email-share.png" /></a><a class="insta-share" href="http://instagram.com/clearhaircare" target="_blank" ><img src="https://opop.cachefly.net/Clear/instagram-off.png" /></a></div>';

    // var footer = jQuery('<div id="clear-footer">' + shareButtons + '<p class="legal">No purchase necessary. Void where prohibited. The #TeamCLEAR Contest is sponsored by Conopco, Inc., d/b/a Unilever. Open to legal residents of the 50 U.S. & D.C., 18 or older. Begins 4/7/14 at 4:00 p.m. ET & ends 4/27/14 at 11:59 p.m. ET. For official rules, <a href="https://opop.cachefly.net/Clear/the-voice-contest-rules.pdf">click here</a>.</p><p class="legal">NBCUniversal Media, LLC is not a Sponsor of the Contest and is not associated with the administration of the Contest in any way.</p></div>');

    var footer = jQuery('<div id="clear-footer">' + shareButtons + '<p class="legal">No purchase necessary. Void where prohibited. The #TeamCLEAR Contest is sponsored by Conopco, Inc., d/b/a Unilever. Open to legal residents of the 50 U.S. & D.C., 18 or older. Begins 4/7/14 at 4:00 p.m. ET & ends 4/27/14 at 11:59 p.m. ET. See <a href="https://opop.cachefly.net/Clear/the-voice-contest-rules2.pdf">official rules</a> to learn how to win a year supply of CLEAR Scalp & Hair<sup>&#8482;</sup> products without submitting a video.</p><p class="legal">NBCUniversal Media, LLC is not a Sponsor of the Contest and is not associated with the administration of the Contest in any way.</p></div>');



    // var footer = jQuery('<div id="clear-footer">' + shareButtons + '<p class="legal">No purchase necessary. Void where prohibited. The #TeamCLEAR Contest is sponsored by Conopco, Inc., d/b/a Unilever. Open to legal residents of the 50 U.S. & D.C., 18 or older. Begins 4/7/14 at 4:00 p.m. ET & ends 4/27/14 at 11:59 p.m. ET. See <a href="https://opop.cachefly.net/Clear/the-voice-contest-rules1.pdf">official rules</a> to learn how to win a year supply of CLEAR Scalp & Hair<sup>™</sup> products without submitting a video.</p><p class="legal">NBCUniversal Media, LLC is not a Sponsor of the Contest and is not associated with the administration of the Contest in any way.</p></div>');




    //  Navigation Bar

    $('#cnav_submit').html('<img src="https://opop.cachefly.net/Clear/new-enter-active.png"/>');
    $('#cnav_about').html('<img src="https://opop.cachefly.net/Clear/new-enter-active.png"/>');
    $('#cnav_view').html('<img src="https://opop.cachefly.net/Clear/new-vote-default.png" />');
    $('#cnav_winners').html('<img src="https://opop.cachefly.net/Clear/new-reveal-default.png" />');

    //  Images for Future Phases
    $('#gallery-content-wrapper').html('<img src="https://opop.cachefly.net/Clear/reveal-phase1.png" />');
    $('.CResults').html('<img src="https://opop.cachefly.net/Clear/vote-phase1.png" />');

    //  Toggle Styles based on Page

    if ($('#cnav_view').hasClass('Sel')) {
        $('#cnav_view').html('<img src="https://opop.cachefly.net/Clear/new-vote-active.png" />');
        $('#cnav_about').html('<img src="https://opop.cachefly.net/Clear/new-enter-default.png" />');
        $('#cnav_submit').html('<img src="https://opop.cachefly.net/Clear/new-enter-default.png" />');
        $('#cnav_winners').html('<img src="https://opop.cachefly.net/Clear/new-reveal-default.png" />');
        $('.CNav').css('margin-top', '-21px');
        $(footer).insertAfter('.CSub');
        $('#clear-footer').css('margin-top', '0');
    }

    if ($('#cnav_winners').hasClass('Sel')) {
        $('#cnav_winners').html('<img src="https://opop.cachefly.net/Clear/new-reveal-active.png" />');
        $('#cnav_view').html('<img src="https://opop.cachefly.net/Clear/new-vote-default.png" />');
        $('#cnav_about').html('<img src="https://opop.cachefly.net/Clear/new-enter-default.png" />');
        $('#cnav_submit').html('<img src="https://opop.cachefly.net/Clear/new-enter-default.png" />');
        $('.CNav').css('margin-top', '-21px');
        $(footer).insertAfter('.CSub');
        $('#clear-footer').css('margin-top', '0');
    }

    if ($('#cnav_submit').hasClass('Sel')) {
        $('.CSub').css('height', '2060px');
        $('.CSub').css('margin-top', '82px');
        $('.CNav').css('margin-bottom', '-52px');
        $('.CNav').css('margin-top', '-21px');
        $('#clear-footer').css('margin-top', '-42px');

    }

    if ($('.CAfterSubmitPrompt').length > 0) {
        $('.CSub').html('<img src="https://opop.cachefly.net/Clear/confirmation.png" />');
        $('.CNav').css('margin-top', '-21px');
        $('.CSub').css('margin-top', '106px');
    }

    if ($('.CDescription').length > 0) {
        $('.CNav').css('margin-top', '-21px');
        $('.CSub').css('margin-top', '53px');
        $('.CSub').css('height', '1310px');
    }

    $('#sfield_address').insertAfter('#sfield_lastname');
    $('#sfield_address2').insertAfter('#sfield_address');
    $('#sfield_gender').insertAfter('#sfield_address2');
    $('#sfield_city').insertAfter('#sfield_gender');
    $('#sfield_email').insertAfter('#sfield_zip');
    $('#sfield_cell').insertAfter('#sfield_email');
    $('#sfield_post').insertAfter('#sfield_cell');
    $('#caption').val('Clear - the Voice');

    //Include Privacy Text in sign up form
    $('<div id="privacyText">Helping you with your everyday needs is important to us. Therefore, from time to time, we may wish to send you information, samples or special offers that we feel may be of interest to you regarding CLEAR SCALP & HAIR THERAPY<sup>&#8482;</sup>, or other complementary brands from Unilever or other carefully selected companies. If you would rather not opt-in to receive such information, please uncheck the box below. For more information or to remove yourself from future contact, please visit our <a href="http://www.unileverprivacypolicy.com/en_us/policy.aspx" target="_blank">Privacy Policy</a>.</div>').insertBefore('#sfield_optin1');
    //Insert Submit button
    $('#form_submit_button').html('<img src="https://opop.cachefly.net/Clear/submit-entry.png" />');



    $(back).appendTo('.SSubmit');

    $(footer).insertAfter('.SBox');
    $(footer).insertAfter('#tune-in');
        // Load share buttons in header of each page
    $(shareButtons).appendTo( '.CHeader' );
});

jQuery(function($){
    $('.fb-share').click(function(e){

        // var bitly = 'http://bit.ly/1sr656M'; 
        var bitly = 'http://bit.ly/OtampX';
        e.preventDefault();

        FB.ui({
            method: 'feed',
            name: '#TeamCLEAR - Sing Your Way To The Stage',
            link: 'http://bit.ly/NxrESI',
            caption: 'THE VOICE Contest',
            description: 'Want to show the world that you’ve got what it takes to make it on THE VOICE? Upload a video that shows off your strong singing voice and show-stopping hair here on Facebook and you could be on your way to an express pass to a casting audition for an upcoming season of THE VOICE.',
            picture: 'https://opop.cachefly.net/Clear/fb-share.png'
        });
    });
});

</script>

<script type="text/javascript" src="https://opop.cachefly.net/RobLum/Validation/Form_Validation_MI_v1.js"></script>
<script type="text/javascript" src="https://opop.cachefly.net/RobLum/Validation/Form_Validation_Unilever.js"></script>
<style>