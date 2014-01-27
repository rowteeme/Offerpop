jQuery(function($) {
$('#frmSignUp').unbind('submit').submit(function(event) {

  var errors = [];
        var $link = null;


        // Must be a valid Email
        $link = $('#email');
        var email = $link.val();
        if(!email || !email.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+/)) {
            errors.push('<div>Enter valid email</div><br>Invalid fields highlighted in red');
	    $link.addClass("Invalid");
	} else {
            $link.removeClass("Invalid");
        }
  
      // First name must not have digits.
        $link = $('#firstname');
        var firstname = $link.val();
        if(!firstname || firstname.match(/\d/)) {
            errors.push('<div>Enter valid first name</div><br>Invalid fields highlighted in red');
	    $link.addClass("Invalid");
	} else {
            $link.removeClass("Invalid");
        }

        // Last name must not have digits.
        $link = $('#lastname');
        var lastname = $link.val();
        if(!lastname || lastname.match(/\d/)) {
            errors.push('<div>Enter valid last name</div><br>Invalid fields highlighted in red');
	    $link.addClass("Invalid");
	} else {
            $link.removeClass("Invalid");
        }


        // Address must start out with digits, then one space.
        $link = $('#address');
        if(!$link.val().match(/^\d+ .+$/)) {
            errors.push('<div>Enter valid address</div><br>Invalid fields highlighted in red');
            $link.addClass("Invalid");
        } else {
            $link.removeClass("Invalid");
        }

        // City must not have digits.
        $link = $('#city');
        var city = $link.val();
        if(!city || city.match(/\d/)) {
            errors.push('<div>Enter valid city</div><br>Invalid fields highlighted in red');
            $link.addClass("Invalid");
        } else {
            $link.removeClass("Invalid");
        }

        
        // Zip code must be one or more digits.
        $link = $('#zip');
        if(!$link.val().match(/^\d+$/)) {
            errors.push('<div>Enter valid zip code</div><br>Invalid fields highlighted in red');
            $link.addClass("Invalid");
        } else {
            $link.removeClass("Invalid");
        }


        /******************
         * Error handling *
         ******************/

//This part sets up the error message used when we validate the fields - no need to edit  

        if(errors.length) {
            event.preventDefault();
            $('.datePickerSignUp').prop('disabled', false);

            var $userMessage = $('#UserMessage');
            if(!$userMessage.length)
                $userMessage = $('<div style="width:400px" id="UserMessage" class="CMessage"></div>').prependTo(
                    $('<div style="width:520px" class="TabContainer"></div>').prependTo('#sfield_email')
                );

//            $userMessage.html(errors.join('<br>')).show();
            $userMessage.html(errors[0]).show();
            setTimeout(function() { $userMessage.fadeOut(); }, 10000);
               FB.Canvas.scrollTo(0,400);
               window.scrollTo(0,400);
        } else {



$(".datePickerSignUp").each(
                    function() {
                      var mobile=false;
                        $picker = $(this);
			var name = $picker.name;
			if (mobile) {
			    var d = $picker.val().split('-');
			    //$picker.remove();  // don't submit the main value. we use the submitted components created above
			    $("input[name='" + this.name + "_year']").val(d[0] ? d[0] : "");
			    $("input[name='" + this.name + "_month']").val(d[1] ? d[1] : "");
			    $("input[name='" + this.name + "_day']").val(d[2] ? d[2] : "");
			} else {
			    var d = $picker.datepicker("getDate");
			    //$picker.remove();  // don't submit the main value. we use the submitted components created above
			    $("input[name='" + this.name + "_year']").val(d ? d.getFullYear() : "");
			    $("input[name='" + this.name + "_month']").val(d ? d.getMonth() + 1 : "");
			    $("input[name='" + this.name + "_day']").val(d ? d.getDate() : "");
			}
                    }
                );
}
    });
});

jQuery(document).ready(function(){
jQuery(function($){
	$('<div id="invalidBday">Must be 18+</div>').insertBefore('#birthday');

	var validation = function(){
		var cValue = $('#birthday').val();
		cValue = cValue.replace(/\D/g,'');
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)){
						var bmonth = cValue.slice(4,6)-1
	        			,bdate = cValue.slice(6,8)
	        			,byear = cValue.slice(0,4)
	        			,formButton = '#form-submit-button';
	        			//console.log('mobile' + bmonth + '' + bdate + '' + byear + '' + formButton);
			} else{
			var bmonth = cValue.slice(0,2)-1
	        ,bdate = cValue.slice(2,4)
	        ,byear = cValue.slice(4,8)
	        ,formButton = '#form_submit_button';
	        //console.log('desktop' + bmonth + '' + bdate + '' + byear + '' + formButton);
	    		}
 
        		var convertDate = new Date(byear, bmonth, bdate)
        		,compareDate = convertDate.getTime();
        		//console.log(cValue);
        		//console.log('Month is: ' + bmonth + ';date is: ' + bdate + ';year is: ' + byear);
        		//console.log('convertDate:' + convertDate + 'compareDate:' + compareDate);

		        var dayInMilliseconds = 1000 * 60 * 60 * 24;
		        if(!cValue || Date.now() - compareDate < dayInMilliseconds * 365.25 * 18 + dayInMilliseconds || cValue.length !== 8) {
					$('#invalidBday').fadeIn();
					$('#birthday').addClass('invalidBdayBox');
					$(formButton).attr('disabled','disabled');
		            return false;
		        } else{
		        	$('#invalidBday').fadeOut();
		        	$('#birthday').removeClass('invalidBdayBox');
		        	$(formButton).removeAttr('disabled');
		        }
		}
	
	$('#birthday').change(function(){
		validation()
	});

	$('#frmSignUp').unbind('submit').submit(function(event) {
		validation()
	});

});
});