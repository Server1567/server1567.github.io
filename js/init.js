// Uso de fullPage.JS

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
		sectionsColor: ['#CFCFCF', '#E3E3E3', '#CFCFCF']
	});
});