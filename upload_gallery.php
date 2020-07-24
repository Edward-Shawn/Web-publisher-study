<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>OneTel</title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/gallery.css">
    <link rel="stylesheet" href="css/media.css">
  </head>
  <body>
    <div class="wrap">

      <?php include "include/sub_header.php" ?>

      <div class="sub_img">
            <img src="img/contact-header.jpg" alt="">
            <div class="img_slogan">
                <h2>Share!!</h2>
                <p>Your Passinate and Creative Idea.</p>
            </div>
      </div>
      
      <section class="upload_section">
            <div class="center">
                    <div class="sub_page_title">
                        <h2>Upload Image</h2>
                    </div>
                <form action="php/img_insert.php" method="post" enctype="multipart/form-data" name="form_data" class="form_data clear">
                    <div class="upload_title clear">
                        <label for="title">Title</label>
                        <input type="text" id="title" name="title">
                    </div>
                    <div class="upload_category clear">
                        <em>Category</em>
                        <select name="" id="">
                            <option value="people">people</option>
                            <option value="animals">animals</option>
                            <option value="nature">nature</option>
                            <option value="plantes">plantes</option>
                            <option value="architects">architects</option>
                        </select>
                    </div>
                    <div class="upload_left">
                        <div class="thumb_img">
                            <input class="upload_name" value="thumb image">
                            <label for="thumbnail">UPLOAD</label>
                            <input type="file" id="thumbnail" class="upload_hidden" name="thumb">
                        </div>
                        <div class="thumbnail_box">
                            <img id="img1">
                        </div>
                    </div><!-- end of image upload left box -->
                    <div class="upload_right">
                    
                    </div><!-- end of image upload right box -->


                </form>
            </div>
      </section>

      <?php include "include/footer.php" ?>

    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/custom.js"></script>
  </body>
</html>
