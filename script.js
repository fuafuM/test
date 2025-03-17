$(document).ready(function() { 

$('.header span').click(function(e){
    e.stopPropagation();
    $('.mobile-view').toggleClass('active');
    $(this).toggleClass('active');
    $('.d-lg-none i').toggleClass('fa-bars fa-x');

});

$(document).click(function() {
    $('.mobile-view').removeClass('active');
    $('.d-lg-none').removeClass('active');
    $('.d-lg-none i').removeClass('fa-x');
    $('.d-lg-none i').addClass('fa-bars');
  });
  $('.mobile-view ul li').click(function() {
    $('.mobile-view').removeClass('active');
    $('.d-lg-none i').removeClass('fa-x');
    $('.d-lg-none i').addClass('fa-bars');
    $('.mobile-view ul li').removeClass('active');
    $(this).addClass('active');
    
  });

  $('.header ul li').click(function(){
    $('.header ul li').removeClass('active');
    $(this).addClass('active');
  })

  const sections = $('section');
  const navLinks = $('.header ul li');

  $(window).on('scroll', function() {
    const scrollPosition = $(this).scrollTop() + 100;
    
    sections.each(function() {
      const section = $(this);
      const sectionTop = section.offset().top;
      const sectionHeight = section.outerHeight();
      const sectionId = section.attr('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.removeClass('active');
        $(`.header a[href="#${sectionId}"]`).parent().addClass('active');
      }
    });
  });
})