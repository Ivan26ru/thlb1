$(document).ready(function() {
	//отмена перехода по ссылке
	$('.tab-ul li a').click(function(e){
		e.preventDefault();
	})
// переключение табов
	$('#tab-1').click(function(e){
		$('.panel').addClass('dn');
		$('#tab-div-1').removeClass('dn');
	})

	$('#tab-2').click(function(e){
		$('.panel').addClass('dn');
		$('#tab-div-2').removeClass('dn');
	})

	$('#tab-3').click(function(e){
		$('.panel').addClass('dn');
		$('#tab-div-3').removeClass('dn');
	})


});	