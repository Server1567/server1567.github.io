// Uso de fullPage.JS

function fail() {
	Materialize.toast("Espera men, esto aún no ha terminado.", 1500, 'rounded');
}

$(document).ready(function(){

	$('#fullpage').hide();

	$('#letsgo').click(function(){
		$('body').removeAttr("id");
		$('#welcome').fadeOut(1000);
		$('#fullpage').fadeIn(1000);
	});

	$('#fullpage').fullpage({
		anchors:['Me', 'Portfolio', 'Contact'],
		sectionsColor: ['#CFCFCF', '#CFCFCF', '#CFCFCF']
	});
});