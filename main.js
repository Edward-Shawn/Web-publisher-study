$(document).ready(function () {
    

    // scrolling up to top when clicking button
    var backToTOP = function(){
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if(scroll > 100){
                $(".back-to-top").fadeIn();
            }else{
                $(".back-to-top").fadeOut();
            }
        });
        $(".back-to-top").click(function(){
            $("html,body").stop().animate({scrollTop:0},800)
        });
    }

    backToTOP();

    var activateMenu = function(){
        var sections = $("section");
        var nav = $(".nav-menu");
        
        //섹션 위치에 따른 li 의 active 적용 기능
        $(window).scroll(function(){
            var scroll = $(window).scrollTop()+200;
            sections.each(function(){
                var top = $(this).offset().top;
                var bottom = top + $(this).outerHeight();
                var now_section = $(this).attr("id");
                console.log(now_section);
                if(scroll >= top && scroll < bottom){
                    nav.find("li").removeClass("menu-active");
                    nav.find("a[href='#"+ now_section +"']").parent
                    ("li").addClass("menu-active"); // services 양쪽에 +를 넣음으로써 자바스크립트 언어로 변경
                }
                if(scroll < 300){
                    $(".nav-menu li:first-child").addClass("menu-active");
                }
            });
        });
    }
    activateMenu(); //함수호출



    // function goTop(){
    //     $('html, body').scrollTop(0);
    //     // scrollTop 메서드에 0 을 넣어서 실행하면 끝 !!
    //     // 간혹 이 소스가 동작하지 않는다면
    //     // $('html, body') 로 해보세요~
    // }
    

    // header sticky when scrolling down
    // scroll move to each section when clicking menu
    $(".nav-menu li").click(function(){
        var target = $(this).find("a").attr("href");

        var offsetTop = $(target).offset().top;
        var headHeight = $("#header").outerHeight() -1;   //outerHeight은 패딩값을 포함하여 높이를 잡음 -1은 추가 높이값
        $("html,body").stop().animate({scrollTop:offsetTop - headHeight},500);
    });
    


    $("#header").sticky({
        topSpacing:0,
        zIndex:'999',
    });

    //using hard coding
    // var stickyheader = function(){
    //     var headTop = $("#header").offset().top; //지역변수말고 전역 변수로 적용해야한다.
    //     $(window).scroll(function(){
    //     var scroll = $(window).scrollTop();
                
    //     if(scroll >= headTop){
    //         $("#header").addClass("sticky");
    //     }else{
    //         $("#header").removeClass("sticky");
    //     }
            
    //     });
    // }
    // stickyheader();

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