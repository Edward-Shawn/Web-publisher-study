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

  });