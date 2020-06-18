$(document).ready(function(){
    // var winWidth = $(window).width() * 0.35;
        $(".main_img").height($(window).width() * 0.35);

    $(window).resize(function(){
        var winWidth = $(window).width() * 0.35;
        $(".main_img").height(winWidth);
        // 윈도우의 길이 값을  winWidth에 대입한다.
    });

    //menu icon click event
    $(".nav_icon").click(function(){
        $(this).toggleClass("on");
        $("header .gnb")

        if($(this).hasClass("on")){
            $(".gnb").slideDown();
        } else {
            $(".gnb").slideUp();
        }
    });


    // header stick when mouse scrolling down
    let hedTop = $("header").offset().top;
    $(window).scroll(function(){
       let scroll = $(window).scrollTop();

       // $("h4").text(scroll);
       if(scroll>=hedTop){
        $("header").addClass("scroll");
       }else{
           $("header").removeClass("scroll");
       }
    });

    $(".gnb li a").click(function(){
        let secPosition = $(this).attr("value");
       
        // alert(moveScreen);
    });


});