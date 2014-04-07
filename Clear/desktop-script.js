<link rel="stylesheet" href="https://opop.cachefly.net/Clear/clear-styles.css" type="text/css" charset="utf-8" />
<script>
jQuery(function($) {

var back = jQuery('<div id="back"><a href="/Contest.psp?c=565408&u=54823&a=281603285304794&p=643783498974952&rest=0&v=Home">Go back to learn more about the contest!</a></div>');

var footer = jQuery('<div id="clear-footer"><div id="share-buttons"></div><p class="legal">No purchase necessary. Void where prohibited. The #TeamCLEAR Contest is sponsored by Conopco, Inc., d/b/a Unilever. Open to legal residents of the 50 U.S. & D.C., 18 or older. Begins 4/7/14 at 4:00 p.m. ET & ends 4/27/14 at 11:59 p.m. ET. For official rules, <a href="https://opop.cachefly.net/Clear/Clear%20Studio%20Clear%20Contest%20FINAL.pdf">click here</a>.</p><p class="legal">NBCUniversal Media, LLC is not a Sponsor of the Contest and is not associated with the administration of the Contest in any way.</p></div>');


$('#cnav_submit').html('<img src="https://opop.cachefly.net/Clear/new-enter-active.png"/>');
$('#cnav_about').html('<img src="https://opop.cachefly.net/Clear/new-enter-active.png"/>');
$('#cnav_view').html('<img src="https://opop.cachefly.net/Clear/new-vote-default.png" />');
$('#cnav_winners').html('<img src="https://opop.cachefly.net/Clear/new-reveal-default.png" />');
$('#gallery-content-wrapper').html('<img src="https://opop.cachefly.net/Clear/reveal-phase1.png" />');
$('.CResults').html('<img src="https://opop.cachefly.net/Clear/vote-phase1.png" />');



if (jQuery('#cnav_view').hasClass('Sel')) {
    jQuery('#cnav_view').html('<img src="https://opop.cachefly.net/Clear/new-vote-active.png" />');
    jQuery('#cnav_about').html('<img src="https://opop.cachefly.net/Clear/new-enter-default.png" />');
    jQuery('#cnav_submit').html('<img src="https://opop.cachefly.net/Clear/new-enter-default.png" />');
    jQuery('#cnav_winners').html('<img src="https://opop.cachefly.net/Clear/new-reveal-default.png" />');
    jQuery('.CNav').css('margin-top', '-21px');
    jQuery(footer).insertAfter('.CSub');
    jQuery('#clear-footer').css('margin-top', '0');
}

if (jQuery('#cnav_winners').hasClass('Sel')) {
    jQuery('#cnav_winners').html('<img src="https://opop.cachefly.net/Clear/new-reveal-active.png" />');
    jQuery('#cnav_view').html('<img src="https://opop.cachefly.net/Clear/new-vote-default.png" />');
    jQuery('#cnav_about').html('<img src="https://opop.cachefly.net/Clear/new-enter-default.png" />');
    jQuery('#cnav_submit').html('<img src="https://opop.cachefly.net/Clear/new-enter-default.png" />');
    jQuery('.CNav').css('margin-top', '-21px');
    jQuery(footer).insertAfter('.CSub');
    jQuery('#clear-footer').css('margin-top', '0');
}

if (jQuery('#cnav_submit').hasClass('Sel')) {
	// jQuery('.CSub').css('background', 'url(https://opop.cachefly.net/Clear/description-bg.png) no-repeat');
	// jQuery('.CSub').css('margin-top', '-18px');
	// jQuery('.CSub').css('margin-left', '0');
	// jQuery('.CSub').css('margin-right', '0');
	// jQuery('.CSub').css('margin-bottom', '-88px');
	jQuery('.CSub').css('height', '2060px');
    jQuery('.CSub').css('margin-top', '82px');
	jQuery('.CNav').css('margin-bottom', '-52px');
    jQuery('.CNav').css('margin-top', '-21px');
    jQuery('#clear-footer').css('margin-top', '-42px');
}

if (jQuery('.CAfterSubmitPrompt').length > 0) {
    jQuery('.CSub').html('<img src="https://opop.cachefly.net/Clear/confirmation.png" />');
    jQuery('.CNav').css('margin-top', '-21px');
    jQuery('.CSub').css('margin-top', '106px');
}

if (jQuery('.CDescription').length > 0) {
    jQuery('.CNav').css('margin-top', '-21px');
    jQuery('.CSub').css('margin-top', '53px');

}

// jQuery('#enter').click(function(e) {
// 	e.preventDefault();
// 	jQuery('#prizes').hide();
// 	jQuery('#select-entrants').hide();
// 	jQuery('#tune-in').hide();
// 	jQuery('#submit-instructions').show();
// 	jQuery('#entry_submit').show();
// 	jQuery('.SBox').show();
// })

jQuery('#sfield_address').insertAfter('#sfield_lastname');
jQuery('#sfield_address2').insertAfter('#sfield_address');
jQuery('#sfield_gender').insertAfter('#sfield_address2');
jQuery('#sfield_city').insertAfter('#sfield_gender');
jQuery('#sfield_email').insertAfter('#sfield_zip');
jQuery('#sfield_cell').insertAfter('#sfield_email');
jQuery('#sfield_post').insertAfter('#sfield_cell');
jQuery('#caption').val('Clear - the Voice');

//Include Privacy Text in sign up form
        jQuery('<div id="privacyText">Helping you with your everyday needs is important to us. Therefore, from time to time, we may wish to send you information, samples or special offers that we feel may be of interest to you regarding CLEAR SCALP & HAIR THERAPY<sup>&#8482;</sup>, or other complementary brands from Unilever or other carefully selected companies. If you would rather not opt-in to receive such information, please uncheck the box below. For more information or to remove yourself from future contact, please visit our <a href="http://www.unileverprivacypolicy.com/en_us/policy.aspx" target="_blank">Privacy Policy</a>.</div>').insertBefore('#sfield_optin1');
//Insert Submit button
jQuery('#form_submit_button').html('<img src="https://opop.cachefly.net/Clear/submit-entry.png" />');



jQuery(back).appendTo('.SSubmit');

jQuery(footer).insertAfter('.SBox');
jQuery(footer).insertAfter('#tune-in');



});

</script>
<script type="text/javascript" src="https://opop.cachefly.net/RobLum/Validation/Form_Validation_MI_v1.js"></script>
<script type="text/javascript" src="https://opop.cachefly.net/RobLum/Validation/Form_Validation_Unilever.js"></script>
<style>