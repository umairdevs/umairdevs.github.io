$('.hamburger').on('click', function() {

	$(this).toggleClass('active');
	$('.main-menu').slideToggle();
	return false;
})

if ($('.listings').length && $(window).width() > 600) {
	
	$('.listings').masonry({
	    itemSelector: 'li'
	});
}