<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.1/themes/ui-lightness/jquery-ui.css" />
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>
<script src="https://opop.cachefly.net/Rotimi/jquery.ui.touch-punch.min.js"></script>
<script src="https://opop.cachefly.net/RobLum/Suave/Form_Validation_v3.js"></script>

<script>
jQuery(document).ready(function($) {

		//Insert Form Instruction Text
		$('<div id="formInstructions">Complete the entry form below for a chance to win a coupon for a full-sized Suave Professionals<sup>®</sup> Natural Infusion product</div>').prependTo('.SBox');

		//Include Privacy Text in sign up form
		$('<div id="privacyText">Helping you with your everyday needs is important to us. Therefore, from time to time, we may wish to send you information, samples or special offers that we feel may be of interest to you regarding Suave<sup>®</sup>, or other complementary brands from Unilever or other carefully selected companies. If you would rather not opt-in to receive such information, please uncheck the box below. For more information or to remove yourself from future contact, please visit our <a href="http://www.unileverprivacypolicy.com/en_us/policy.aspx" target="_blank">Privacy Policy</a>.</div>').insertBefore('#sfield_optin1');

		//Replace Share copy on Thank you page
		$('#QuizShareAfterSubmission').html('<a onclick="popShare();return false;" class="requestbutton" title="Share with Friends"><img src="https://s3.amazonaws.com/com.offerpop.datastore/438279/urF3KK.png"></a>');

		//Create the Dropbox container div for the five Dropboxes
		$('#question_choice_89699').after('<div id="dropbox"><div class="QuizChoice"></div></div>');

		//Create the bottom section and its buttons
		$('#dropbox').append('<div id="bottom"><a href="http://opop.cachefly.net/Suave%20Whats%20Your%20Hair%20Resolution%20SS%20FINAL_Final.pdf" target="_blank"><div id="reset">OFFICIAL RULES</div></a><a href="javascript:void(0);"><div class="next"></div></a><a href="javascript:void(0);"><div id="skip"></div></a></div>');

		$('<div id="thankYouText">Visit <a href="http://www.suave.com/" target="_blank">Suave.com</a> for more information on the NEW Suave Professionals<sup>®</sup> Natural Infusion collection.</div>').appendTo('#QuizShareAfterSubmission');

		$('<div id="officialRules">No purchase necessary. Void where prohibited. Suave Professionals<sup>®</sup> Natural Infusion Sweepstakes is sponsored by Conopco, Inc., d/b/a Unilever. Open to legal residents of the 50 U.S. & D.C., 18 or older. Begins 1/27/14 at 10:00 a.m. ET & ends 2/12/14 at 11:59 p.m. ET. For official rules, click <a href="http://opop.cachefly.net/Suave%20Whats%20Your%20Hair%20Resolution%20SS%20FINAL_Final.pdf" target="_blank">here</a>.</div>').insertAfter('.CFooterDivider');

		$('#sfield_gender').insertBefore('#sfield_city');

		//Unilever Opt-ins (Mutually Exclusive)
		$('#optin1').prop('checked', true);
		try { $('#optin1').checkboxradio("refresh"); } catch(e) { }

		$('#optin1').change(function(event) {
       		$('#optin2').prop('checked', false);
			try { $('#optin2').checkboxradio("refresh"); } catch(e) { }
   		});
   
   		$('#optin2').change(function(event) {
       		$('#optin1').prop('checked', false);
			try { $('#optin1').checkboxradio("refresh"); } catch(e) { }
   		});
		//$('#optin2').prop('checked', true);
		//$('#optin3').prop('checked', true);

		//Droppable function that assigns a drop event to any dropbox ID taken as a parameter.
		function _droppable_(dropbox_element_id) {
			$(dropbox_element_id).droppable( {

				//On Drop function: changes DOM position of QuizChoice2 when it is dropped,
				//changes the Quiz Choice to static, and stores Quiz Choice in dropbox#1 as variable
				drop: function( event, ui) {
					$(this).droppable('option', 'accept', ui.draggable);
					$(ui.draggable).appendTo(dropbox_element_id);
					// console.log('The selected Quiz Choice has moved positions in the DOM, and is now a child of dropbox');
					$(ui.draggable).css('position', 'static');
					$(ui.draggable).css('cursor', 'default');
					// console.log('The Quiz Choice is now static');

					if (dropbox_element_id === '#dropbox1'){
						dropboxChoice = $(ui.draggable);
					}
					checkdrop();
				}
			});
		}

		//Create IDs for each Quiz Choice
		$('.QuizChoice img').attr('id', function(i) {
			return 'QuizChoice'+(i+1);
		});


		//Enable Draggable QuizChoices
		$('.QuizChoice img').draggable({
			 snapMode: "inner" 
			,snap: "#dropbox .QuizChoice"
			,snapTolerance: 40
			,containment: ".QChoicesContainer"
			,revert: "invalid"
			,start: function(event, ui ) {
				$(this).css('z-index',1000); 
			} 
		});


		//Create IDs for each Dropbox Location
		$('#dropbox .QuizChoice').attr('id', function(i) {
			return 'dropbox'+(i+1);
		});

		//Create variables for each Quiz choice. 
		qc1 = 'choice_89696';
		qc2 = 'choice_89697';
		qc3 = 'choice_89698';
		qc4 = 'choice_89699';

		//Applies our droppable function to all the dropboxes. 
		_droppable_('#dropbox1');

				jQuery('#skip').click( function () {
		                jQuery('#' + qc4 +' a').trigger('click');
		                //console.log('User skipped the Drag & Drop Section');
		        });


                var checkdrop = function() {
                        if ($('#dropbox .QuizChoice img').length === 1) {
                                //Disables draggables once 5 images have been dropped. Makes sure the opacity is 100%
                                $('.QuizChoice img').draggable('disable');
                                $('#dropbox .QuizChoice img').css('opacity', 1);
                                var choice = $('#dropbox img').attr('id');
                                switch (choice){
                                	case 'QuizChoice1':
                                	choice = qc1;
                                	break;

                                	case 'QuizChoice2':
                                	choice = qc2;
                                	break;

                                	case 'QuizChoice3':
                                	choice = qc3;
                                	break;
                                }

                                jQuery('.next').click( function() {
                                    jQuery('#'+ choice +' a').trigger('click');
                                });
                        }
                }

	});

</script>
<![if !IE]>
<script>
jQuery(function($){
	//Placeholders for Submit Form
	$("#email").attr('placeholder', 'Email');
	$("#firstname").attr('placeholder', 'First name');
	$("#lastname").attr('placeholder', 'Last name');
	$("#address").attr('placeholder', 'Street address');
	$('#city').attr('placeholder', 'City');
	$('#zip').attr('placeholder', 'Zip code');
	$("#birthday").attr('placeholder', 'Date of Birth');
	//Fix Placeholders
	$('[placeholder]').parents('form').submit(function() {
	  $(this).find('[placeholder]').each(function() {
	    var input = $(this);
	    if (input.val() == input.attr('placeholder')) {
	      input.val('');
	    }
	  })
	});
	$('[placeholder]').focus(function() {
	  var input = $(this);
	  if (input.val() == input.attr('placeholder')) {
	    input.val('');
	    input.removeClass('placeholder');
	  }
	}).blur(function() {
	  var input = $(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
	    input.addClass('placeholder');
	    input.val(input.attr('placeholder'));
	  }
	}).blur();
});
</script>
<![endif]>
<style>