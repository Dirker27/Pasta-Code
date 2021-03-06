function load_body(i) {
	$('fade_layer').style.opacity = $('content_layer').style.opacity;
	$('fade_layer').innerHTML = $('content_layer').innerHTML;

	$('content_layer').style.opacity = 0;
	$('content_layer').innerHTML = $(i).innerHTML;
}

function load_header(i) {
    $('page_header').style.backgroundImage = 'url("' + $g_assetMap['header_background'][i] + '")';
    $('quote_content').innerHTML = $g_assetMap['header_quote'][i][0];
    $('quote_source').innerHTML = $g_assetMap['header_quote'][i][1];
}

function load_tab(tab) {
	load_body(tab + '_content');
    load_header(tab);

	var content = $('content_layer');
	var fader = $('fade_layer');
	var body = $('page_body');

	// Opacity Fade-In/Out
	var op = 0;
	fader.style.display = 'block';
	var fadetimer = setInterval(function() {
		if (op > 0.95) {
			content.style.opacity = 1;
			fader.style.display = 'none';
			clearInterval(fadetimer);
		}

		content.style.opacity = op;
		fader.style.opacity = 1 - op;
		op += 0.05
		//op -= op * 0.1;
	}, 10);

	// Expand the body wrapper
	var dh = (content.offsetHeight - body.offsetHeight) / 20;
	var expandtimer = setInterval(function() {
		if ( Math.abs(content.offsetHeight - body.offsetHeight) < Math.abs(dh) ) {
			body.style.height = content.offsetHeight + 'px';
			clearInterval(expandtimer);
		} else {
			body.style.height = body.offsetHeight + dh + 'px';
		}

	}, 10);
}