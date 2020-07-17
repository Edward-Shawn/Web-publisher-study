<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>OneTel</title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/media.css">
    <link rel="stylesheet" href="css/project.css">

  </head>
  <body>
    <div class="wrap">

      <?php include "include/header.php" ?>

      <div class="sub_img">
            <img src="img/portfolio-img8.jpg" alt="">
            <div class="img_slogan">
                <h2>Experience!!</h2>
                <p>All Kind of Creative Technologies.</p>
            </div>
      </div>
      
      <section class="project_section">
        <div class="center">
            <div class="sub_page_title">
                <h2>Our Projects</h2>
            </div>

          <div class="contents_box clear">

            <?php
              $con=mysqli_connect("localhost", "root", "", "onetel");
              $sql = "select * from project";
              $result = mysqli_query($con, $sql);

              while($row=mysqli_fetch_array($result)){
                $img=$row["image"];
                $title=$row["title"];
                $text=$row["text"];
            ?>

              <div class="content">
                      <div>
                        <span>
                            <img src="img/<?=$img?>" alt="portfolio4">
                        </span>
                          <div class="con_txt_box">
                            <h3><?=$title?></h3>
                            <p><?=$text?></p>
                            <a href="project_detail.php">VIEW MORE</a>
                          </div>
                      </div>
              </div><!-- end of content(loop element) -->
            <?php
            }
            ?>
            </div>
        </div>
      </section>
      
      <?php include "include/footer.php" ?>

    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/custom.js"></script>
  </body>
</html>






<?php

?>