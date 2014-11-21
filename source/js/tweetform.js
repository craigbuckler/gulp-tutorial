// handles tweet form pop-up
(function() {

	"use strict";

	// configuration
	var cfg = {
		formID: 'tweetform',
		width: 500,			// optimal popup width
		height: 500,		// optimal popup height
		minmargin: 10,	// mimimum margin around popup
	};

	// submit event
	var form = document.getElementById(cfg.formID);
	if (form) {
		form.addEventListener('submit', formHander, true);
	}

	// tweet form handler
	function formHander(e) {

		console.log('tweet form submitted');

		var
			sw = screen.availWidth || 1024,
			sh = screen.availHeight || 700,
			pw = Math.min(cfg.width, (sw - cfg.minmargin * 2)),
			ph = Math.min(cfg.height, (sh - cfg.minmargin * 2)),
			px = Math.floor((sw - pw) / 2),
			py = Math.floor((sh - ph) / 2),
			popup = window.open('about:blank', 'tweet',
				'width=' + pw +
				',height='+ph+
				',left=' + px +
				',top=' + py +
				',location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1'
			);

		if (popup) {
			e.preventDefault();
			form.setAttribute('target', 'tweet');
			form.submit();
			popup.focus();
		}

	}

})();
