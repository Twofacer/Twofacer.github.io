var $btnTop = $('.scrollTopBtn')

$(window).on('scroll', function(){
    if ($(window).scrollTop() >= 100) {
        $btnTop.fadeIn();
    } else {
        $btnTop.fadeOut();
    }
});

$btnTop.on('click', function () {
    $('html,body').animate({scrollTop:0}, 1000)
});

$(".hamburger").click(function() {
	$(this).toggleClass('is-active').next().slideToggle(200)
});