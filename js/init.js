// Uso de fullPage.JS

function down(){
	$.fn.fullpage.moveSectionDown();
}

function contact() {
	$.fn.fullpage.moveTo('Contact');
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
		anchors:['Me', 'Portfolio', 'Contact'],
		sectionsColor: ['#CFCFCF', '#ECECEC', '#CFCFCF'],
		showActiveTooltip: true,
		slidesNavigation: true,
		responsiveSlides: true,
		parallax: true,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom
		slideSelector: '.slide',
	});
});