          	/******************/
          	/* Touch to Share */
          	/******************/
			var startTime, endTime
			,$touchGif = $('#touch-gif img');

			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)){
				var eventStart = 'touchstart'
				,eventEnd = 'touchend';
			} else{
				var eventStart = 'mousedown'
				,eventEnd = 'mouseup';
			}

			    $touchGif.on(eventStart, function () {
			        var currentLink = $touchGif.attr('src');
			        if (currentLink.indexOf('x4VLtX') > -1){
			            return true;
			        } else{
			            $touchGif.attr('src','https://s3.amazonaws.com/com.offerpop.datastore/438279/kZkbxi.gif');
			            startTime = new Date().getTime();
			        }
			    });

			    $touchGif.on(eventEnd, function () {
			        endTime = new Date().getTime();
			        if (endTime - startTime < 1000) {
			            $touchGif.attr('src','https://s3.amazonaws.com/com.offerpop.datastore/438279/5msNih.png');
			        }
			        else if (endTime - startTime > 1000){
			            $touchGif.animate({'opacity':'0.6'}, 'fast');
			            $touchGif.attr('src','https://s3.amazonaws.com/com.offerpop.datastore/438279/x4VLtX.png');
						$('#social-container').fadeIn();
			       }
			    });