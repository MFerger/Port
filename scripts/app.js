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
    $('#landingPage').slideUp('slow', 'swing')
		$('#body').removeClass('stop-scrolling')
});

}());
