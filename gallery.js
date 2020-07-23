$(document).ready(function(){

    var count = 10;
    var addData = 0;

    // masonry library function
    $('.gallery_box').masonry({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.gallery_item',
        
        // use element for option
        columnWidth: '.grid-sizer',
        percentPosition: true,
        
    });
    

   

    $.getJSON("/onetel/data/content.json", function (data){

        function addItems(){           
        

        var items = [];
        var sliced = data.slice(addData, addData + count);
        $.each(sliced, function(i, item){
            var itemHTML = 
            
            '<div class="gallery_item ' + item.category + '">'+
                '<img src="'+item.images.thumb+'" alt="">'+
                '<span>'+
                   '<a href="'+item.images.large+'" class="venobox" data-gall="myGallery">'
                    +'+'+'</a>'+
                '</span>'+
            '</div>';



            items.push($(itemHTML).get(0));
        });

        $(".gallery_box").append(items);

        $(".gallery_box").imagesLoaded(function(){
            $(items).removeClass('is-loading');
            $(".gallery_box").masonry('appended',items);
        });

        count = count + 8;
        console.log(data.length);
        var imgs_len = data.length;
        if(count > imgs_len){
            $("#load_more").hide();
        }else{
            $("#load_more").show();
        }

        // venobox effect
        // venobox libray lightbox funtion
        $('.venobox').venobox();

        //isotope filtering effect
         // filter button active function
        $(".filtering>button").click(function(e){
            e.preventDefault();
            $(".filtering>button").removeClass();
            $(this).addClass("on");
        });

        


        // init Isotope
        var $grid = $('.gallery_box').isotope({
            // options
        });
        // filter items on button click
        $('.filtering').on( 'click', 'button', function() {
            
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        // addData += sliced.length;
        // if(addData > data.length){
        //     $("#load_more").show();
        // }else{
        //     $("#load_more").hide();
        // }


      }

      addItems();

      $("#load_more").on("click", addItems);
    //   $("#load_more").on("click", function(){
    //       var bottom = $(".gallery_box").height();
    //       $("html,body").animate({scrollTop:bottom}, 300);
    //   });

    });
});