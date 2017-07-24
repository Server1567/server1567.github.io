// Uso de fullPage.JS

$(document).ready(function(){

	$('#letsgo').click(function(){
		$('body').removeAttr("id");
		$('#welcome').attr("class", "hide");
		$('#fullpage').removeAttr("class");
	});

	$('#fullpage').fullpage({
		sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE']
	});
});