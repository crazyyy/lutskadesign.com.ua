
		function h100PercentHack() {
			// var headerHeight = (window.innerWidth>1023)? 88:78;
			document.getElementById("fullscreen").innerHTML = '.fullscreen{height:' + (window.innerHeight) + 'px}';
		}
		// "100% height class" hack for class .fullscreen
		var el = document.createElement('style');
		el.id = 'fullscreen';
		el.type = 'text/css';
		document.getElementsByTagName('head')[0].appendChild(el);
		h100PercentHack();

		// var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		var isMobile = navigator.userAgent.match( /(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i );
		if (isMobile) {
			window.addEventListener("orientationchange", function() {
				h100PercentHack();
			}, false);
		} else {
			window.onresize = h100PercentHack;
		}
	