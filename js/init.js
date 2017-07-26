// Uso de fullPage.JS

function fail() {
	Materialize.toast("Espera men, esto aún no ha terminado.", 1500, 'rounded');
}

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