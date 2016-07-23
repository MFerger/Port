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
		setTimeout(function(){
				$(".fadeOut").remove();
				$('#body').removeClass('stop-scrolling')
    }, 3200);
		setTimeout(function(){
			$('html, body').animate({
			 		scrollTop: '0px'}, 0);
    }, 2000);

	// $('#aboutMe').click(function() {
	// 	console.log('it got here');
	// 	$('html, body').animate({
	// 		scrollTop: $("#aboutMeSection").offset().top - 80
	// 	}, 2000);
	// 	return false;
	// });
	//
	// $('#projects').click(function() {
	// 	$('html, body').animate({
	// 		scrollTop: '0px'
	// 	}, 2000);
	// 	return false;
	// });

}());
