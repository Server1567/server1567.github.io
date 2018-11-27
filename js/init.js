/*
 * Description: © Server1567 Website, imagina, aprende y crea.
 * Author: Junior Jimenez - Server1567
 * Author URL: https://server1567.com (PENDING)
 * Description: This is my Website Portfolio, you can hire me anytime.
*/

// Uso de fullPage.JS

// function down(){
// 	$.fn.fullpage.moveSectionDown();
// }

function contact() {
	$.fn.fullpage.moveSectionDown();
}

$(document).ready(function(){

	$('#fullpage').hide();

	$('#letsgo').click(function(){
		$('body').removeAttr("id");
		$('#welcome').fadeOut(1000);
		$('#fullpage').removeAttr("class");
		$('#fullpage').fadeIn(1000);
	});

	$('#fullpage').fullpage({
		anchors:['Me', 'Contact'],
		sectionsColor: ['#CFCFCF', '#ECECEC', '#ECECEC'],
		showActiveTooltip: true,
		slidesNavigation: true,
		responsiveSlides: true,
		parallax: true,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
		slideSelector: '.slide',
	});

});