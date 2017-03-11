
$(".welcome-scroll").on('click',function(event){
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $("#welcome").offset().top
	}, 800);
});
$(".mobile-hb").on("click",function(e){
	e.preventDefault();
	$(".menu-mobile").toggle();
});
