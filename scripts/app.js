(function() {
	'use strict';
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
	$('#landingPage').on('click', function() {
		$('html, body').animate({
			scrollTop: '0px'
		}, 0);
		$('#landingPage').slideUp({duration: 2000});
		// $('#body').removeClass('stop-scrolling')
	});
	$('#aboutMe').click(function() {
		$('html, body').animate({
			scrollTop: '1500px'
		}, 2500);
		return false;
	});
	$('#projects').click(function() {
		$('html, body').animate({
			scrollTop: '0px'
		}, 2000);
		return false;
	});

}());
