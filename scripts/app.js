$('.carousel').carousel();
$('#myModal').modal()
function toggleC(){
		$('.toggleCaption').hide()
		var caption = carouselContainer.find('.active').find('.toggleCaption').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function (){
			$(this).removeClass('animated fadeInUp')
	});
	caption.slideToggle();
	}
