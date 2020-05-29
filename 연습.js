$(document).ready(function(){
    $(".hamberger").click(function(){
        $(this).toggleClass("on");

        if($(this).hasClass("on")){
            // console.log("ture");
            $(".hamberger>.fa").attr("class","fa fa-times");

        }else{
            // console.log("false");
            $(".hamberger>.fa").attr("class","fa fa-bars");
            
        }

    });
});
