$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        $("section").stop().animate({
            left: -scroll
        });
    })

    $("#navi li").click(function(){

        $("#navi li").removeClass();
        $(this).addClass("active");


        var i = $(this).index();
        //변수 i 에   #navi li의 index 값을 저장

        var naviPosition = i * 1000;
        $("html,body").scrollTop(naviPosition);

    })





})