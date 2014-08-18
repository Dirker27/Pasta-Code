function page_init() {
	load_tab('home');
}

function load_body(i) {
	$('fade_layer').style.opacity = $('content_layer').style.opacity;
	$('fade_layer').innerHTML = $('content_layer').innerHTML;

	$('content_layer').style.opacity = 0;
	$('content_layer').innerHTML = $(i).innerHTML;
}

function load_tab(tab) {
	load_body(tab + '_content');

	var op = 0;
	$('fade_layer').style.display = 'block';
	var timer = setInterval(function() {
		if (op > 0.95) {
			$('content_layer').style.opacity = 1;
			$('fade_layer').style.display = 'none';
			//$('content_layer').style.filter = 'alpha(opacity=100)';
			clearInterval(timer);
		}
		$('content_layer').style.opacity = op;
		$('fade_layer').style.opacity = 1 - op;
		//$('content_layer').style.filter = 'alpha(opacity=' + op * 100 + ")";
		op += 0.05
		//op -= op * 0.1;
	}, 10);

	$('page_body').style.height = $('content_layer').style.height;
}