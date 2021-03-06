$(document).ready(function(){

  //var winWidth = $(window).width() * 0.35;
  $(".main_img").height($(window).width() * 0.35);
  $(".sub_img").height($(window).width() * 0.25);

  var wrapHeight = $(window).height();
  var windowWid = $(window).width();
  var topHeight = $(".top_line").outerHeight();
  var footerHeight = $("footer").outerHeight();
  var totalMinus = topHeight + footerHeight;
  if (windowWid < 700){
    $(".sub_section").outerHeight(wrapHeight - totalMinus);
  }



  $(window).resize(function(){
    var winWidth = $(window).width() * 0.35;
    var sub_img=$(window).width() * 0.25;
    $(".main_img").height(winWidth);
    $(".sub_img").height(sub_img);
    //alert(winWidth);
  });

  //menu icon click event
  $(".nav_icon").click(function(){
    $(this).toggleClass("on");

    if($(this).hasClass("on")){
      $(".gnb").slideDown();
    } else {
      $(".gnb").slideUp();
    }
  });

  //header stick when mouse scrolling down
  let hedTop = $("header").offset().top;
  $(window).scroll(function(){   
    let scroll = $(window).scrollTop();
    if(scroll >= hedTop){
      $("header").addClass("scroll");
    } else {
      $("header").removeClass("scroll");
    }
  });

  $(".gnb li").click(function(){
    let valuePos = $(this).find("a").attr("value");
    let offsetTop = $("#"+valuePos).offset().top;
    //alert(offsetTop);
    $("html,body").animate({scrollTop:offsetTop-70}, 500);
  });


  //cutting long text
  var cuttingText = function(){
    for(var i = 0; i < $(".content, .port_con").length; i++){
      var txt_length = $(".content, .port_con").eq(i).find("p").text();
      
      if(txt_length.length > 80){
        $(".content, .port_con").eq(i).find("p").text(txt_length.substr(0, 80)+"...");
      }else{
        text_length
      }
    }
  }

  cuttingText();

  //project load more

  var loadMore = function(){
      $(".content").hide();
      $(".content").slice(0, 3).show();
      
      $(".load_more").on("click",function(){
          $(".content:hidden").slice(0, 3).show();
          // console.log($(".content:hidden").length);    
          if($(".content:hidden").length == 0){
              // alert("더 이상 프로젝트가 없습니다.");
            $(".more").hide();
            $(".fold").show();
          } 
      });

      $(".fold").click(function(){
        var contentLen = $(".content").length;
        $(".content").slice(6, contentLen).slideUp("fast");
        
        $(".more").show();
        $(".fold").hide();
      })

      
  }

  loadMore();

});
