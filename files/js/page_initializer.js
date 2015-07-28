// Tell JQuery to play nice with Prototype
var $j = jQuery.noConflict();

// Page start-up
function page_init() {
	$j("#page_header").load("html/header.html");
    $j("#page_footer").load("html/footer.html");
    
    $j("#home_content").load("html/home.html", function() {
            load_tab('home');
        });
    $j("#music_content").load("html/music.html");
    $j("#gaming_content").load("html/gaming.html");
    $j("#about_content").load("html/about.html");
    
    load_tab('home');
}