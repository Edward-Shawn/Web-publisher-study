$(document).ready(function () {

 
    
    $('.tabs>button').click(function(){
        $(".panels").hide();
        var index = $(this).index();
        var panelindex = $(".panels").eq(index);
        $(panelindex).show();
  
        $(".tabs>button").removeClass("active");
        $(this).addClass("active");
      });
  
      $(".tabs>button:nth-child(1)").trigger("click");


    var mySlide = function () {

        var $container = $(".slideContainer");
        var $slideBox = $(".slideBox");
        var $slides = $(".slide");

        var currentIndex = 0;
        var timer;

        for (var i = 0; i < $slides.length; i++) {
            $slides.eq(i).css({ left: 100 * i + "%" });
        }

        function startSlide(index) {
            $slideBox.animate({ left: -100 * index + "%" });
            currentIndex = index;
            $(".numbering").removeClass("on");
            $(".numbering").eq(currentIndex).addClass("on");
        }

        function startTimer() {
            timer = setInterval(function () {
                var nextIndex = (currentIndex + 1) % $slides.length;
                startSlide(nextIndex);
            }, 4000);
        }

        function stopTimer() {
            clearInterval(timer);
        }

        $(".pause").click(function () {
            $(this).toggleClass("on");
            if ($(this).hasClass("on")) {
                $(this).find("i").attr("class", "fa fa-play");
                $(this).addClass("on");
                stopTimer();
            } else {
                $(this).find("i").attr("class", "fa fa-pause");
                startTimer();
                $(this).removeClass("on");
            }
        });

        $(".numbering").click(function () {
            var numTxt = $(this).text();
            $(this).addClass("on");
            //alert(numTxt);
            startSlide(numTxt - 1);
        });

        $(".controlls a").click(function () {
            if ($(this).hasClass("prev")) {
                if (currentIndex === 0) {
                    return false;
                } else {
                    startSlide(currentIndex - 1);
                }
            } else {
                if (currentIndex === 2) {
                    return false;
                } else {
                    startSlide(currentIndex + 1);
                }
            }
        });

        startTimer();
        startSlide(currentIndex);

    }

    mySlide();

    var stickyHeader = function () {

        var headerTop = $("header").offset().top;
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            //console.log(headerTop);
            if (scroll >= headerTop) {
                $("header").css({ "position": "fixed", "top": 0 });
            } else {
                $("header").css({ "position": "relative" });
            }
        });
    }

    stickyHeader();

    var pageMove = function () {
        $(".gnb li").click(function () {
            var t = $(this).index();
            var movePosition = $(".movePage").eq(t).offset().top;
            //var scroll = $(window).scrollTop();
            var headerHeight = $("header").height();

            $("html,body").animate({ scrollTop: movePosition - headerHeight }, 500);

            //alert(movePosition);
        });
    }

    pageMove();

    var mobileMenu = function () {
        $(".mobile_menu").click(function () {
            $(this).toggleClass("change");
            if ($(this).hasClass("change")) {
                $(this).find("i").attr("class", "fa fa-times");
                $(".gnb").slideDown(200);
            } else {
                $(this).find("i").attr("class", "fa fa-bars");
                $(".gnb").slideUp(200);
            }
        });
    }

    mobileMenu();

    var resizeNav = function () {
        $(window).resize(function () {
            var winWidth = $(window).width();
            if (winWidth < 700) {
                $(".gnb").hide();
            } else {
                $(".gnb").show();
            }
        })
    }

    resizeNav();

});