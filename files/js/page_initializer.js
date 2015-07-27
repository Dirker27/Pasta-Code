// Tell JQuery to play nice with Prototype
var $j = jQuery.noConflict();

// Page start-up
function page_init() {
	load_tab('home');
	$j("#page_header").load("html/header.html");
    $j("#page_footer").load("html/footer.html");
}