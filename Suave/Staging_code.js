<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.1/themes/ui-lightness/jquery-ui.css" />
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>
<script src="https://opop.cachefly.net/Rotimi/jquery.ui.touch-punch.min.js"></script>

<script>
jQuery(document).ready(function($) {

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
			snapMode: "inner", 
			snap: "#dropbox .QuizChoice", 
			snapTolerance: 40, 
			containment: ".QChoicesContainer", 
			revert: "invalid", 
			start: function(event, ui ) {
				$(this).css('z-index',1000); 
			} 
		});

		//Create the Dropbox container div for the five Dropboxes
		$('#question_choice_87674').after('<div id="dropbox"><div class="QuizChoice"></div></div>');

		//Create IDs for each Dropbox Location
		$('#dropbox .QuizChoice').attr('id', function(i) {
			return 'dropbox'+(i+1);
		});

		//Create variables for each Quiz choice. 
		qc1 = 'choice_87671';
		qc2 = 'choice_87672';
		qc3 = 'choice_87673';
		qc4 = 'choice_87674';

		//Create the bottom section and its buttons
		$('#dropbox').append('<div id="bottom"><a href="http://bit.ly/1j9tExV" target="_self"><div id="reset"></div></a><a href="javascript:void(0);"><div class="next"></div></a><a href="javascript:void(0);"><div id="skip"></div></a></div>');

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

                                        jQuery('.next').click( function() {
                                                jQuery('#'+ qc1 +' a').trigger('click');
                                        });
                        }
                }

	});

</script>
<style>