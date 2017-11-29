$(document).ready(function(){
	// $('.cycle-slideshow').cycle({
	// 	slides:"> li",
 //    	speed: 600,
 //    	manualSpeed: 100,
 //    	prev:"#prev",
	// 	next:"#next",
	// 	fx:"scrollHorz",
	// 	startingSlide:"2"
	// });

	$(".inscribete__left, .inscribete__right").on("click", function(){
		$(this).parent().find(".inscribete__center").removeClass("inscribete__center--collapsed");
		$(this).parent().find(".inscribete__right").fadeOut();
	});
})