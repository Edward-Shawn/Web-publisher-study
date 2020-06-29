$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      $("section").stop().animate({
          left: -scroll
      },600);
    });
    
    $("article h2").click(function(e){
        e.preventDefault();

        var position = $(this).parent().index();
        var scrollPos = position * 200; 
        console.log(position);

        // a 태그의 href 속성 값 읽기
        var src = $(this).children("a").attr("href");
        console.log(src);

        //읽어온 a 태그의 href 값을 p 태그의 자식인 img 태그의 src 값으로 대체
        $("article p img").attr({"src":""});
        $(this).siblings("p").children("img").attr({"src":src});

        //선택한 article에 on 클래스 추가
        $("article").removeClass("on");
        $(this).parent().addClass('on');
        $("html,body").scrollTop(scrollPos);

    });
    
        //close 클릭 시 on 클래스 제거
        $("span").click(function(){

            $("article").removeClass('on');

        });

    //    $("#navi li").click(function(){
           
    //         $("li").removeClass();
    //         $(this).addClass("active");


    //         var position = $(this).index();
    //         console.log(position);
    //         var scrollPos = position * 1000;
    //         $("html,body").scrollTop(scrollPos);
            
    //    })

      
       $("#navi li").click(function(){
           
        $("#navi li").removeClass();
        $(this).addClass("active");

        var i = $(this).index();
        var naviPosition = i * 1000;
        $("html,body").scrollTop(naviPosition);
        
   })



});
