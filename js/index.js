$(document).ready(function(){

    $('.tabs>button').click(function(){
      $(".panels").hide();
      var index = $(this).index();
      var panelindex = $(".panels").eq(index);
      $(panelindex).show();

      $(".tabs>button").removeClass("active");
      $(this).addClass("active");
    });

    $(".tabs>button:nth-child(1)").trigger("click");


    $(".hamberger").click(function(){

        $(this).toggleClass("on");

        if($(this).hasClass("on")){
            //console.log("true");
            $(".hamberger>.fa").attr("class","fa fa-times");
            $(".gnb").slideDown("fast");
        } else {
            //console.log("false");
            $(".hamberger>.fa").attr("class","fa fa-bars");
            $(".gnb").slideUp("fast");
        }

    });




  });