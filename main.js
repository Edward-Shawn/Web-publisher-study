$(document).ready(function () {
    
    //intro maun slide carousel
    $("#intro-carousel").owlCarousel({
        autoplay: true,
        loop: true,
        dots: false,
        items: 1,
        autoplayTimeout: 4000,
        animateOut: 'fadeOut'
    });
    //initiate wow framework
    //https://animate.style/ <-- 참조사이트
    new WOW().init();

    //Clients carousel using owl carousel library
    $(".clients-carousel").owlCarousel({
        responsive:{
            0:{
                items:2
            },
            768:{
                items:4
            },
            900:{
                items:6
            }
        },
        
        autoplay:true,
        loop:true,
        autoplayTimeout:2000,
        dots:true,
    });

    //portfolio section filtering imanges using isotope library
    var filterItems = function(){
        var filterOpt = $(".portfolio-container").isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows',
          });

        $('#portfolio-filters li').on('click',function(){
          var filterValue = $(this).attr('data-filter');
          filterOpt.isotope({ filter: filterValue });// 필터에 연결되는 값
          $('#portfolio-filters li').removeClass("filter-active");
          $(this).addClass("filter-active");
        });
    }
    filterItems();

    //portfolio lightbox effect using venobox library
    $(".venobox").venobox(); //함수만 실행키면 바로 켜짐

    //testimonial carousel slide effect using owl-carousel library
    $(".testimonials-carousel").owlCarousel({
        autoplay:true,
        dots:true,
        loop:true,
        autoplayTimeout:3000,
        responsive:{
            0:{items:1},
            768:{items:2},
            900:{items:3}
        }
    })

});