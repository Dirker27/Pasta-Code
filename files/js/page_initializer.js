// Tell JQuery to play nice with Prototype
var $j = jQuery.noConflict();

//- Define Asset Map -------------------------------------=
//
var $g_assetMap = {};
// Header Background
$g_assetMap['header_background'] = {};
$g_assetMap['header_background']['home'] = 'img/background/in_flames.jpg';
$g_assetMap['header_background']['music'] = 'img/background/periphery.jpg';
$g_assetMap['header_background']['gaming'] = 'img/background/kmfdm.jpg';
$g_assetMap['header_background']['about'] = 'img/badge/silhouette.jpg';
// Header Quote
$g_assetMap['header_quote'] = {};
$g_assetMap['header_quote']['home'] = new Array();
$g_assetMap['header_quote']['home'][0] = "Don't Panic.";
$g_assetMap['header_quote']['home'][1] = "- Douglas Adams";
$g_assetMap['header_quote']['music'] = new Array();
$g_assetMap['header_quote']['music'][0] = "I did a thing!";
$g_assetMap['header_quote']['music'][1] = "- God";
$g_assetMap['header_quote']['gaming'] = new Array();
$g_assetMap['header_quote']['gaming'][0] = "I'm too drunk to taste this chicken.";
$g_assetMap['header_quote']['gaming'][1] = "- Colonel Sanders";
$g_assetMap['header_quote']['about'] = new Array();
$g_assetMap['header_quote']['about'][0] = "Why does this bacon taste like people?";
$g_assetMap['header_quote']['about'][1] = "- Dirk Hortensius";
// Page Background
$g_assetMap['page_background'] = {};
$g_assetMap['header_background']['home'] = 'img/background/10.jpg';
$g_assetMap['header_background']['music'] = 'img/background/periphery.jpg';
$g_assetMap['header_background']['gaming'] = 'img/background/kmfdm.jpg';
$g_assetMap['header_background']['about'] = 'img/badge/silhouette.jpg';

// Page start-up
function page_init() {
	$j('#page_header').load('html/header.html');
    //$j("#page_footer").load("html/footer.html");
    
    $j('#home_content').load('html/home.html', function() {
            load_tab('home');
        });
    $j('#music_content').load('html/music.html');
    $j('#gaming_content').load('html/gaming.html');
    $j('#about_content').load('html/about.html');
}