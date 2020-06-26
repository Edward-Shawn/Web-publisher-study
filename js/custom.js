$(document).ready(function(){

   var imgs = '';

   for(i=0; i< 200; i++){
       //imgs = i;
       //console.log(imgs);
       imgs += '<img src="img/pic' + i + '.jpg">'
   }

//    $('section').html(imgs);

//    $("body").on("mousemove", function(e){
//         var posX = e.pageX;
//         var winWidth = $(window).width();
//         var calcWidth = Math.floor((posX/winWidth)* 200);
//         //floor() 함수는 소수점 이하를 버린다
//         //https://www.w3schools.com/js/js_math.asp
//         $("h3").text(calcWidth);
//         $("section>img").hide();
//         $("section>img").eq(calcWidth).show();
//    });

   $("body").jpreLoader({
       splashID:"#jSplash",
       loaderVPos: '48%',
       autoClass:true,
       closeBtnText:"let's Begin!"
   })

});