$(document).ready(function(){
	$(".inscribete__left, .inscribete__right").on("click", function(){
		$(this).parent().find(".inscribete__center").removeClass("inscribete__center--collapsed");
		$(this).parent().find(".inscribete__right").fadeOut();
	})
})