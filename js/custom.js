$(document).ready(function(){
    var mySlide = function(){
       var slideGroup = $(".slideshow-slides");
       var slides = slideGroup.find(".slide");

       slides.each(function(i){
           $(this).css({left: 100 * i + "i"});
       })
       
        function goToSlide(index){
            slideGroup.animate({"left": -100 * index + "%"});
        }

        goToSlide(1);
    }

    mySlide();

});

