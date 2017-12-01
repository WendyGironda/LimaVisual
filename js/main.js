$(document).ready(function(){

	window.addEventListener("load",function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});

	var dato = Number(sessionStorage.getItem('dato'));
	//alert(dato);
	$(".masters-slider").cycle({
        'fx' : "scrollHorz",
        'slides' : "> li",
        'timeout': 0,
        'prev': "#prev",
        'next': "#next",
        'startingSlide': dato,
    });

	$(".inscribete__left, .inscribete__right").on("click", function(){
		$(this).parent().find(".inscribete__center").removeClass("inscribete__center--collapsed");
		$(this).parent().find(".inscribete__right").fadeOut();
	});
})