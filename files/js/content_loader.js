function page_init() {
	load_tab('home');
}

function load_body(i) {
	$('page_body').innerHTML = $(i).innerHTML;
}

function load_tab(tab) {
	load_body(tab + '_content');
}