$(document).ready(function(){
    // tab button click and panel show
    $(".tab_box button").click(function(){
        var index = $(this).index();
        $(".tab_box button").removeClass("on");
        $(this).addClass("on");
        $(".panel").hide();
        $(".panel").eq(index).show();
    });

    $(".tab_box button").eq(0).trigger("click");


    //cutting long text
    var cuttingText = function(){
        for(var i = 0; i < $("li.list_content").length; i++){
        var txt_length = $("li.list_content").eq(i).find("span.list4").text();
        
        if(txt_length.length > 20){
            $("li.list_content").eq(i).find("span.list4>p").text(txt_length.substr(0, 20)+"...");
        }else{
            txt_length;
        }
      }
    }
    
    cuttingText();

    $("span.list4 b").click(function(){
        // alert("abc");
        $(this).toggleClass("on");
        if($(this).hasClass("on")){
            $(this).parent().siblings(".list6").slideDown("fast");
            $(this).find("i").attr("class", "fa fa-angle-up");
        }else{
            $(this).parent().siblings(".list6").slideUp("fast");
            $(this).find("i").attr("class", "fa fa-angle-down");
        }
    });

});