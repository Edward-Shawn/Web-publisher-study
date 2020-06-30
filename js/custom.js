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
   

});