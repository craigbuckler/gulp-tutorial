// scroll to an element
(function() {

	"use strict";

	var cfg = {
		scrollTime: 600
	};

	// click event
	document.body.addEventListener('click', scrollHandler, true);

	// click handler
	function scrollHandler(e) {

		// is a link?
		var t = e.target;
		if (t.nodeName !== 'A' || !t.hash || !window.requestAnimationFrame) return;

		// links to page element?
		var se = document.getElementById(t.hash.slice(1));
		if (!se) return;

		// initiate scroll animation
		console.log('initiate scrollto handler');

		e.preventDefault();
		var start = null, startY = window.pageYOffset, scrollBy = se.offsetTop - startY;

		function scrollToElement(timestamp) {
			if (!start) start = timestamp;
			var
				progress = Math.min(timestamp - start, cfg.scrollTime),
				t = progress / cfg.scrollTime,
				ease = (t < 0.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t);

			window.scrollTo(0, startY + (scrollBy * ease));
			if (progress < cfg.scrollTime) {
				requestAnimationFrame(scrollToElement);
			}
		}
		requestAnimationFrame(scrollToElement);

	}

})();
