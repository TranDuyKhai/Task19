$(function(){
	/*$(window).on('scroll', function(){
		if($(window).scrollTop() > 0){
			$('.header').css({'height': '80px', 'overflow': 'hidden'});
		}else{
			$('.header').css('height', 'auto');
		}
	});*/
	$('.header__hamburger').on('click', function(){
		$(this).is('.expand')?$(this).removeClass('expand'):$(this).addClass('expand');
	});
	$('.person-and-job__candidate').slick({
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		cssEase: 'linear',
		autoplay: false,
		autoplaySpeed: 2000,
		prevArrow: false,
		nextArrow:'<a href="#nextArrow" class="btn-arrow btn-arrow-right"><i class="fas fa-chevron-right"></i></a>',
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				}
			}
		]
	});
	$('.special__full-info').slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: 'linear',
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: false,
		asNavFor: '.special__mini-info',
	});
	$('.special__mini-info').slick({
		dots: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		cssEase: 'linear',
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: false,
		asNavFor: '.special__full-info',
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			}
		]
	});
	$('.special__mini-info').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.special__mini-info__child').removeClass('active');
		$('.slick-current').addClass('active');
	});

	$('#backTop').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 'slow');
	});
});