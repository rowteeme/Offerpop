jQuery(function($){
	//Form Validation 02_14_14
	//Comment out each field not being used
	var v = {
		firstname: 	$('#firstname')
		,lastname: 	$('#lastname')
		,address: 	$('#address')
		//,state: 	$('#state')
		,state2:    $('#gender')
		,city: 		$('#city')
		,email: 	$('#email')
		,zip: 		$('#zip')
		,birthday: 	$('#post') //NOT USING STANDARD BIRTHDAY FIELD
	}

	//Pre-check first opt-in which should always be the Unilever-wide opt-in
	//Make opt-ins mutually exclusive - the lines starting with “try” make sure they work on mobile (optimized apps only)
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

	//Mask Birthday field (Using Post) - Disable if no birthday validation
	if ('birthday' in v){
		$(v.birthday).attr('placeholder','MM/DD/YYYY');
		$(v.birthday).mask('99/99/9999');
	}

	//Fix Date.now on IE8
	Date.now = Date.now || function() { return +new Date; };

	//Add Error Message
	$('<div id="errorMessage">Please fill in the red highlighted boxes: <span id="s-firstname"></span> <span id="s-lastname"></span> <span id="s-email"></span> <span id="s-address"></span> <span id="s-state"></span> <span id="s-city"></span> <span id="s-zip"></span> <span id="s-birthday"></span></div>').appendTo('.SFields, .submit-fields');

var generalMethods = {
	//Validate Alpha
	validateAlphaFields : function(field){
				var currentValue = $(v[field]).val();
					if (!currentValue || !currentValue.match(/^[\sA-z]+$/)){
						$(v[field]).addClass('Invalid');
						$('#s-'+ field).html(eval(field + 'Object.labelName'));
					} else{
						$(v[field]).removeClass('Invalid');
						$('#s-'+ field).empty();
					}
				return generalMethods.testSubmit();
	}
	//Enable submit button if parameter === 'enable', else disable submit button
	,disableEnable : function(condition){
				if (condition === 'enable'){
					//Enable submit button
					$('#form_submit_button, #form-submit-button').removeAttr('disabled');
				}
			}
	//Test all fields to enable Submit Button
	,testSubmit : function(){
				var invalidCount = 0;
				$('#errorMessage span').each(function(){
					if ($.trim($(this).text()).length){
						invalidCount++;
					}
				});
					//Disable submit if any invalid fields
					if (invalidCount < 1){
						generalMethods.disableEnable('enable');
						$('#errorMessage').css('display','none');
						return true;
					} else{
						$('#errorMessage').css('display','block');
						return false;
					}
				}
}
			
//Validate Fields Objects
//=====================================================
if ('firstname' in v){
	var firstnameObject = {
				labelName : $.trim($('#sfield_firstname label').text())
				,validate : generalMethods.validateAlphaFields
	}
}
if ('lastname' in v){
	var lastnameObject = {
				labelName : $.trim($('#sfield_lastname label').text())
				,validate : generalMethods.validateAlphaFields
	}
}
if ('address' in v){
	var addressObject = {
				labelName : $.trim($('#sfield_address label').text())
				,validate : function(){
						var addressVal = v.address.val();
							if (!addressVal || addressVal.length <= 2 ){
								$(v.address).addClass('Invalid');
								$('#s-address').html(addressObject.labelName);
							}else{
								$(v.address).removeClass('Invalid');
								$('#s-address').empty();
							}
						return generalMethods.testSubmit();
				}
	}
}
if ('state' in v){
	var stateObject = {
				labelName : $.trim($('#sfield_state label').text())
				,validate : generalMethods.validateAlphaFields
	}
}
if ('state2' in v){
	var state2Object = {
				labelName : $.trim($('#sfield_gender label').text())
				,validate : function(){
							var genderVal = v.state2.val();
								if (!genderVal){
									$(v.state2).addClass('Invalid');
									$('#s-state').html(state2Object.labelName);
								} else{
									$(v.state2).removeClass('Invalid');
									$('#s-state').empty();
								}
								return generalMethods.testSubmit();
				}
	}
}
if ('city' in v){
	var cityObject = {
				labelName : $.trim($('#sfield_city label').text())
				,validate : generalMethods.validateAlphaFields
	}
}
if ('email' in v){
	var emailObject = {
				labelName : $.trim($('#sfield_email label').text())
				,validate : function(){
							var emailVal = v.email.val();
								if(!emailVal || !emailVal.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+/)) {
									$(v.email).addClass('Invalid');
									$('#s-email').html(emailObject.labelName);
								} else{
									$(v.email).removeClass('Invalid');
									$('#s-email').empty();
								}
								return generalMethods.testSubmit();
							}
	}
}
if ('zip' in v){
	var zipObject = {
			labelName : $.trim($('#sfield_zip label').text())
			,validate : function(){
						var zipVal = v.zip.val();
							if(!zipVal || !zipVal.match(/^[0-9]+$/)){
								$(v.zip).addClass('Invalid');
								$('#s-zip').html(zipObject.labelName);
							} else{
								$(v.zip).removeClass('Invalid');
								$('#s-zip').empty();
							}
								return generalMethods.testSubmit();
						}
	}
}
if ('birthday' in v){
	var birthdayObject = {
			labelName : $.trim($('#sfield_' + v.birthday.attr('id') + ' label').text())
			,validate : function(){
						var birthdayValue = $(v.birthday).val().replace(/\D/g,'')
							,bmonth = birthdayValue.slice(0,2)
					        ,bdate = birthdayValue.slice(2,4)
					        ,byear = birthdayValue.slice(4,8)
					        ,convertDate = new Date(byear, bmonth, bdate)
				        	,compareDate = convertDate.getTime()
							,dayInMilliseconds = 1000 * 60 * 60 * 24;

						if(!birthdayValue || Date.now() - compareDate < dayInMilliseconds * 365.25 * 18 + dayInMilliseconds || birthdayValue.length !== 8 || parseInt(bmonth) < 1 || parseInt(bmonth) > 12 || parseInt(bdate) < 1 || parseInt(bdate) > 31 || parseInt(byear) < 1900) {
						    $(v.birthday).addClass('Invalid');
						    $('#s-birthday').html(birthdayObject.labelName + ' (18+)');
						} else{
						    $(v.birthday).removeClass('Invalid');
						    $('#s-birthday').empty();
						}
						return generalMethods.testSubmit();
					}
	}
}
//EVENT HANDLERS - DO NOT CHANGE
//=====================================================

	//First Name, Last Name, State, and City must not have digits
	if (/Android/i.test(navigator.userAgent)){
			$(v.firstname).add(v.lastname).add(v.state).add(v.city).bind('keyup', function(){
				eval(this.id + 'Object.validate(' + JSON.stringify(this.id) + ')');
			});
	} else{
			$(v.firstname).add(v.lastname).add(v.state).add(v.city).bind('keyup', function(){
				this.value = this.value.replace(/\d|[\.,<>-?\/#!@$%\^&\*;:{}=+\-_`'"~()\\\[\]\|]/g,'');
				eval(this.id + 'Object.validate(' + JSON.stringify(this.id) + ')');
			});
	}

		//This state event handler is for the #gender select
		$(v.state2).change(function(){
			state2Object.validate();
		});

			//Email must match correct format
			$(v.email).bind('keyup',function(){
				emailObject.validate();
			});

					//Zip Code must be numbers
					$(v.zip).bind('keyup', function(){
				  		this.value = this.value.replace(/[^0-9]/g,'');
				  		zipObject.validate();
					});

							//Address must start out with digits, then one space
							$(v.address).bind('keyup',function(){
								addressObject.validate();
							});

									//Birthday must be 18 or older
									$(v.birthday).bind('keyup',function(){
										birthdayObject.validate();
									});

				//Auto Complete Check
				$('#facebook-connect-link').click(function(){
					setTimeout(function(){
						for (p in v){
							eval(p + 'Object.validate('+ JSON.stringify(p) +')')
						}
					},1000);
				});

//Validate all fields when Submit button is clicked
//=====================================================
		$('#frmSignUp').submit(function(event){
				var failures = 0;
				for (x in v){
					if (!eval(x + 'Object.validate('+ JSON.stringify(x) +')')){
						failures++;
					}
				}
				if (!failures) {return true;}else{return false;}
		});
});