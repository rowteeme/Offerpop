  //	GA and Pageview tracking code
  //	Please include before the closing <body> tag
  
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-45562143-4', 'offerpop.com');
  ga('send', 'pageview');


//	Tracking wrapper
//	Please include in the global JS namespace BEFORE any attempts to use it
//	NOTE: Facebook's JS SDK (FB) also uses this so please place it carefully
//	"category" and "action" are REQUIRED
//	"label" and "value" are NOT REQUIRED
function _ga_track(category, action, label, value) {
if( label && value ) {
ga("send", "event", category, action, label, value);
} else if( label ) {
ga("send", "event", category, action, label);
} else {
ga("send", "event", category, action);
}
}



//	MODIFICATIONS TO EXISTING CODE TO IMPLEMENT TRACKING
//	Please include where appropriate
//	 the existing code is split into multiple <script> blocks

function popEmail(input_tug_num) {
tug_num = input_tug_num;
var adjustPopUp = function(currentPos) {
var yOffset = currentPos + 20;
resetErrorDisplay();
jQuery('#pop_email').css({ "top": yOffset + "px", "bottom": "auto" });
jQuery('#pop_email_wait').hide();
jQuery('#pop_email_submit').show();
jQuery('#pop_email').fadeIn();

//	track to GA
_ga_track("form", "display");
};

FB.Canvas.getPageInfo(function (info) {
adjustPopUp(info.scrollTop);
});
};

/*
NOT BEING USED
function submitEmail() {
resetErrorDisplay();
jQuery('#pop_email_submit').hide();
jQuery('#pop_email_wait').show();
coupon = '518259';
email = jQuery('#email').val();
name = jQuery('#name').val();
session = '810903901';

entryname = "";
if (votedfor == "left") {
entryname = 'Cheese Spread';
}
if (votedfor == "right") {
entryname = 'Buffalo Chicken Bites';
}
ob = {'name':name, 'email':email, 'coupon':coupon, 'session':session, 'entryname':entryname};
jQuery.post("https://offerpop.com/SendEmail.psp", ob, submitCallback);

//	track to GA
_ga_track("form", "submit", email, entryname);
}
*/

OP.FB.showShareDialog = function(options, opt_callback) {
var fbUiOptions = {
method: "feed",
name: options.name,
caption: options.caption,
description: options.description,
link: options.link,
picture: options.picture,
actions: options.actions,
user_message_prompt: options.user_message_prompt
};

if ("media" in options) {
fbUiOptions.attachment['media'] = options.media;
}

if ("userMessagePrompt" in options) {
fbUiOptions["user_message_prompt"] = options.userMessagePrompt;
}

if ("uid" in options) {
fbUiOptions["uid"] = options.uid;
}

if ("from" in options) {
fbUiOptions["from"] = options.from;
}

if ("to" in options) {
fbUiOptions["to"] = options.to;
}
if (typeof opt_callback === 'undefined') {
opt_callback = function(response){
//	track to GA
_ga_track("facebook", "share", options.name);
};
}

FB.ui(fbUiOptions, opt_callback);
};

function handle_vote_left(count) {
setCount1(count);
after_voting();

//	track to GA
_ga_track("vote", "left", jQuery("#Name1").text());
}

function handle_vote_right(count) {
setCount2(count);
after_voting();

//	track to GA
_ga_track("vote", "right", jQuery("#Name2").text());
}

function after_voting() {
enable_vote_buttons();

OP.Insights.saveUserAction({action: 'VT'});

//	track to GA
_ga_track("voting", "finished");
}


//	NEW FUNCTIONALITY

//	Needs to be within document.ready()
//	Also (obviously) needs to be after the _ga_track() function is available
//	Please include where appropriate
//	These functions were specifically NOT combined into one for clarity's sake
jQuery(document).ready(function() {
//	left box information link click
jQuery(".LBox a").click(function() {
//	track to GA
_ga_track("LeftInfoClick", "click", jQuery(this).text(), jQuery(this).attr("href"));
});

//	right box information link click
jQuery(".RBox a").click(function() {
//	track to GA
_ga_track("RightInfoClick", "click", jQuery(this).text(), jQuery(this).attr("href"));
});
});

//	Facebook events
//	Needs to be AFTER the Facebook JS SDK has been initiated
//	Also (obviously) needs to be after the _ga_track() function is available
//	and the variable FB is available

//	Facebook Like Widget
/*
CAN'T ATTACH TO FB ASYNC INIT
FB.Event.subscribe("edge.create", function(url, html_element) {
_ga_track("facebook", "like", url);
});
*/