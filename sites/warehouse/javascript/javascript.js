$(document).ready(function(){
  //	$('.slider-sol').slick();
	$('.header_bot').slick({
    asNavFor: '#bb',
    draggable: false,
    prevArrow: ".header-btn--prev",
    nextArrow: ".header-btn--next"
  });


	$('#bb').slick({
    infinite: true,
    arrows: false,
    speed: 500,
    fade: true,
    asNavFor: '.header_bot',
    cssEase: 'ease-in'
  });

  
  $('.header_nav_btn').on('click',function(e) {
    $('.header_nav').addClass('_open')
  })
  $('.header_nav_close .btn').on('click',function(e) {
    $('.header_nav').removeClass('_open')
  })

	$(".header_nav_btn").on("click", (function(e){
		$(".header_nav_btn").removeClass("active").removeAttr("disabled");
  		$(this).addClass("active").prop("disabled",true);
  		$(".header_nav_category").children().hide()
  		let b = $(this).attr("data-nav");
  		$(".header_nav_category-" + b).show() 

}))
});

