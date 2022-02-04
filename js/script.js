const gridItems = document.querySelectorAll('.process-parent__item');
const processSticky = document.querySelector('.process-sticky');
const visionContainer = document.querySelector('.vision-container');
const visionSticky = document.querySelector('.vision-sticky');
window.addEventListener('scroll', function () {
    const sticky = document.querySelector('.process-parent'),
        scroll = window.pageYOffset - sticky.offsetTop,
        height = sticky.scrollHeight;
        
    let i = 0;

    scroll < (1 * (height / 6)) ? i = 0 :
    scroll < (2 * (height / 6)) ? i = 1 :
    scroll < (3 * (height / 6)) ? i = 2 :
    scroll < (4 * (height / 6)) ? i = 3 :
    scroll < (5 * (height / 6)) ? i = 4 : i = 5;


    for (let j = 0; j < gridItems.length; j++){
        gridItems[j].classList.remove('view');
        gridItems[j].classList.remove('active');
        if (j <= i) {
            gridItems[j].classList.add('view');
        }
    }
    gridItems[i].classList.add('active');

    // if(gridItems[i] == gridItems[0]) {
    //     processSticky.classList.remove('scroll-stop');
    // }
});




function reScroll(num, e){
    const sticky = document.querySelector('.process-parent'),
        scroll = window.pageYOffset + sticky.offsetTop,
        height = sticky.scrollHeight,
        targ = e.target;
        
    window.scrollTo(0, sticky.offsetTop + (num * (height / 6) - (height / 6 / 2)))    
}




const gridItemsVision = document.querySelectorAll('.vision-parent__stick .vision-parent__item');
const visionNumber = document.querySelectorAll('.vision-parent__stick .theme-f span');

    window.addEventListener('scroll', function () {
    const sticky = document.querySelector('.vision-parent'),
        scroll = window.pageYOffset - sticky.offsetTop,
        height = sticky.scrollHeight;
        
    let i = 0;

    scroll < (1 * (height / 8)) ? i = 0 : 
    scroll < (2 * (height / 8)) ? i = 1 : 
    scroll < (3 * (height / 8)) ? i = 2 : 
    scroll < (4 * (height / 8)) ? i = 3 : 
    scroll < (5 * (height / 8)) ? i = 4 : 
    scroll < (6 * (height / 8)) ? i = 5 : 
    scroll < (7 * (height / 8)) ? i = 6 : i = 7;


    for (let j = 0; j < gridItemsVision.length; j++){
      gridItemsVision[j].classList.remove('active');
      visionNumber[j].classList.remove('number');
    }
  
    gridItemsVision[i].classList.add('active');
    visionNumber[i].classList.add('number');
     

    if(gridItems[i] == gridItems[0]) {
        visionNumber[0].classList.remove('number');
    }

    var currentNumber = $('.number').data('max');
    var start = 0;

        $({numberValue: start}).animate({numberValue: currentNumber}, {
            duration: 2500,
            easing: 'linear',
            "animation": "none",
            step: function() { 
                $('.number').text(Math.ceil(this.numberValue)); 
            }
        });
    
    });

  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function nextSlide() {
      showSlides(slideIndex += 1);
  
      var i;
  
      var dots = document.getElementsByClassName("slider-dot");
  
      var slides = document.getElementsByClassName("grand-parent");
      
      for (i = 0; i < slides.length; i++) {
          slides[i].className = slides[i].className.replace(" slide-right", "");
      }
  
      slides[slideIndex - 1].classList.add('slide-right');
  
      
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-p", "");
        dots[i].className = dots[i].className.replace(" active-n", "");
        dots[i].className = dots[i].className.replace(" not-active-p", "");
        
        if(dots[i].classList.contains('not-active-n')){
          dots[i].className = dots[i].className.replace(" not-active-n", "");
        }
      }
  
      dots[slideIndex - 1].className += " active-n";
  
      if(slideIndex  != 1) {
        dots[slideIndex - 2].className += " not-active-n";
      }
  }
  
  function previousSlide() {
      showSlides(slideIndex -= 1);  
  
      var i;
  
      var dots = document.getElementsByClassName("slider-dot");
      var slides = document.getElementsByClassName("grand-parent");
      
      for (i = 0; i < slides.length; i++) {
          slides[i].className = slides[i].className.replace(" slide-left", "");
      }
  
      slides[slideIndex - 1].classList.add('slide-left');
  
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-p", "");
        dots[i].className = dots[i].className.replace(" active-n", "");
        dots[i].className = dots[i].className.replace(" not-active-n", "");
        
        if(dots[i].classList.contains('not-active-p')){
          dots[i].className = dots[i].className.replace(" not-active-p", "");
        }     
      }
  
      dots[slideIndex - 1].className += " not-active-p";
  
      if(slideIndex  != 1) {
        dots[slideIndex - 2].className += " active-p";
      }
  }
  
  function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("grand-parent");
      
      if (n > slides.length) {
        slideIndex = 1
      }
      if (n < 1) {
          slideIndex = slides.length
      }
      
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
  
      slides[slideIndex - 1].style.display = "block";
  }
  


  var position = $('#process').offset().top,
  height = $('.process-parent').height(),
  positionVision = $('#vision').offset().top,
  heightVision = $('.vision-parent').height();

$(document).on('scroll', function (){
var scroll = $(document).scrollTop();
 if(scroll  > position && scroll < (position + height) ) {

  $('body').addClass('scroll-x');
  processSticky.classList.add('scroll-stop');
  }

});




//mobile-menu 

$(document).on('click', '.open-menu', function(){
    $('.header-menu').stop().toggleClass('active');
    $(this).toggleClass('active')
    $('.header-content').toggleClass('active')
    $('body').toggleClass('no-scroll');
})

$(document).on('click', '.mobile-btn', function(){
    $('.header-menu').stop().toggleClass('show')
    $(this).toggleClass('active')
    $('body').toggleClass('no-scroll');

    
})


$(document).click(function (e) {
    var menu = $('.menu-group')

    if ( !menu.is(e.target) && menu.has(e.target).length === 0) {
        $('.mobile-menu').fadeOut('show').removeClass('active')
    }
})

$('.process-slider').slick({
    infinite: false,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 2000, 
    arrows: false,
    dots: false,
    responsive: [
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
          }
        },
        {
            breakpoint: 520,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
            }
          },
      ]
});

$('.vision-slider').slick({
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    ariaControls: false,
    autoplaySpeed: 2000, 
    fade: true,
    speed: 500,
    cssEase: 'ease-in-out',
    arrows: false,
    dots: false,
    centerMode: false,
    responsive: [
        {
          breakpoint: 646,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        }
      ]
});


$('.feature-slider').slick({
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000, 
    arrows: false,
    dots: true,
    responsive: [
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
          }
        },
        {
            breakpoint: 520,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
            }
          },
      ]
});


$(function () {

    var activeIndex = $('.active-dot').index(),
        $contentlis = $('.slider-item'),
        $dots = $('.dots-dn div');
        $contentlis.eq(activeIndex).show();
  
    $('.dots-dn').on('click', '.dot-dn', function (e) {
      var $current = $(e.currentTarget),
          index = $current.index();
        
        $contentlis.addClass('dot-anim')
        $dots.removeClass('active-dot');
        $dots.removeClass('active-n');
        $current.addClass('active-dot');
        $contentlis.hide().eq(index).show();
     });
  });




  //anchor

$('a[href^="#"]').on('click', function(event) {
    event.preventDefault()
    $('body').removeClass('no-scroll');
    $('.header-menu').removeClass('active');
    $('.header-menu').removeClass('show');
    $('.header-content').removeClass('active')
    $('.open-menu').removeClass('active')
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top - $('header.site-header').height()
    $('html, body').animate({scrollTop: dn}, 700)
});


    $('.vision-slider').on('beforeChange', function(event, slick, currentSlide){
          $('.theme-f span ').addClass('numb');
      });


    var currentNumber = $('.numb').data('max');
var start = 0;

    $({numberValue: start}).animate({numberValue: currentNumber}, {
        duration: 2500,
        easing: 'linear',
        "animation": "none",
        step: function() { 
            $('.numb').text(Math.ceil(this.numberValue)); 
        }
    });     