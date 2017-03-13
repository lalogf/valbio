
var ready = function (){
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

	$(".btn-concytec-filter").on('click',function(e){
		e.preventDefault();
		var filter = $(this).attr('id');
		if (filter === "all") {
			$(".thumbnail-aliados-container").each(function(){
				$(this).removeClass('filtered');
				$(this).addClass('visible');
			});
		} else {
			$(".thumbnail-aliados-container").each(function(){
				if (!($(this).hasClass(filter))){
					$(this).removeClass('visible');
					$(this).addClass('filtered');
				} else {
					$(this).removeClass('filtered');
					$(this).addClass('visible');
				}
			});
		};
	});
};

$(document).ready(ready)
$(document).on('page:load',ready)
