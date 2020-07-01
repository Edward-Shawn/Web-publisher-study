$(document).ready(function(){
    //--------------------------------
    //browser's height fix in all kind of browsers
    

    // saving window's heght
    var ht = $(window).height();
    //section's height to 'ht'
    $("section").height(ht);

    $(window).on("resize", function(){
        //saving window's height
        var ht = $(window).height();
        //section's height to 'ht'
        $("section").height(ht);
    })

    $("#menu li").click(function (event){

        event.preventDefault();

        $("#menu li").removeClass();
        $(this).addClass("on");

        var i = $(this).index();
        var ht = $(window).height();
        var secHeight = ht*i;

        $("html").animate({"scrollTop":secHeight},500);
    });


    //mousewheel plugin control
    $("section").on("mousewheel", function (event, delta){
        if(delta > 0){    // 델타값
            //console.log("up")
            var prev = $(this).prev().offset().top;
            $("html,body").stop().animate({"scrollTop": prev},1000,"easeOutBounce");
        }else if(delta < 0){
            //console.log("down")
            var next = $(this).next().offset().top;
            $("html,body").stop().animate({"scrollTop": next},1000,"easeOutBounce");
        }
    });
   
    // navigation activate in browser's position
    $(window).on("scroll",function(){
        //height of browser
        var ht = $(window).height();
        //window scroll value
        var scroll = $(window).scrollTop();

        // if(scroll >= 0*ht && scroll < 1*ht){
        //     // 0 이냐  1000보다 작은 999냐 라는 의미
        //     $("#menu li").removeClass();
        //     $("#menu li").eq(0).addClass("on");
            
        //     // menu li 에 eq가 있으면 맨윗 하나만 선택되고 없으면 전부다 선택됨
        //     //eq() 메서드는 선택한 요소에 인덱스 번호에 해당하는 요소를 찾음
        // }
        // if(scroll >= 1*ht && scroll < 2*ht){
        //     // 0 이냐  1000보다 작은 999냐 라는 의미
        //     $("#menu li").removeClass();
        //     $("#menu li").eq(1).addClass("on");
        // }
        // if(scroll >= 2*ht && scroll < 3*ht){
        //     // 0 이냐  1000보다 작은 999냐 라는 의미
        //     $("#menu li").removeClass();
        //     $("#menu li").eq(2).addClass("on");
        // }
        // if(scroll >= 3*ht && scroll < 4*ht){
        //     // 0 이냐  1000보다 작은 999냐 라는 의미
        //     $("#menu li").removeClass();
        //     $("#menu li").eq(3).addClass("on");
        // }
        for(var i = 0; i < 4; i++){
            if(scroll >= i * ht && scroll < (i+1)*ht){
                // 0 이냐  1000보다 작은 999냐 라는 의미
                $("#menu li").removeClass();
                $("#menu li").eq(i).addClass("on");
            }
        }

    });

    //images are moving when mouse move
    $("section").on("mousemove", function(e){
        var posX = e.pageX;
        var posY = e.pageY;
        

        //spring section images moving
        $(".p11").css({
            "bottom": 20 - (posY / 30),
            "right": 20 - (posX / 30)
        });
        $(".p12").css({
            "bottom": -40 +(posY / 30),
            "right": 130 + (posX / 30)
        });
        $(".p13").css({
            "top": 180 +(posY / 20),
            "right": 60 + (posX / 20)
        });

        //summer section images moving
        $(".p21").css({
            "bottom": -480 - (posY / 30),
            "right": -180 - (posX / 30)
        });

        $(".p22").css({
            "bottom": -40 + (posY / 50),
            "right": -130 + (posX / 50)
        });

        //fall section images moving
        $(".p31").css({"bottom": 50 + (posY / 50),"right": 180 + (posX / 50)});
        $(".p32").css({"bottom": -180 + (posY / 20),"right": 110 + (posX / 20)});
        $(".p33").css({"bottom": -130 + (posY / 50),"right": -70 + (posX / 50)});


        //winter section images moving
        $(".p41").css({"right": 20 - (posX / 30), "bottom": -120 + (posY / 30)});
        $(".p42").css({"right": 0 + (posX / 20), "bottom": -180 + (posY / 20)});

    });

    
});