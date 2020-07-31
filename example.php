<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>OneTel</title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/media.css">
  </head>
  <body>
    <div class="wrap">

      <?php include "include/header.php" ?>

      
      
      <?php include "include/footer.php" ?>

    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/custom.js"></script>
    <script>
        $(document).ready(function(){

            $.getJSON("/onetel/data/write_contents.json", function(data){
                var items = [];
                $.each(data, function (i, item) {
                    var inHTML = "<p>" + item.id + "</p>";
                    items.push($(inHTML).get(0));
                });
                $(".json").append(items);
        });
    </script>
  </body>
</html>
