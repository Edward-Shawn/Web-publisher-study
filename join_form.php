<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>OneTel</title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/join.css">
    <link rel="stylesheet" href="css/media.css">
  </head>
  <body>
    <div class="wrap">

      <?php include "include/header.php" ?>

      <div class="sub_img">
        <img src="img/home-bg.jpg" alt="">
        <div class="img_slogan">
          <h2>Welcome!!</h2>
          <p>To Be Our Passinate Memvers.</p>
       
        </div>
      </div>
      
      <section class="join_section">
            <div class="sub_page_title">
                <h2>JOIN US</h2>
            </div>
            <div class="join_box">
                <form action="">
                    <p class="clear input_box">
                        <span class="col_con">ID</span>
                        <input type="text" name="id" class="col_con" placeholder="Your ID">
                        <button type="button" name="button" id="check" class="col_con">ID Check</button>
                    </p>
                    <p class="clear name_box">
                        <span class="col_con">NAME</span>
                        <input type="text" name="name" class="col_con" placeholder="Your Name">
                    </p>
                    <p class="clear pass_box">
                    <span class="col_con">PASSWORD</span>
                        <input type="password" name="pass" class="col_con" placeholder="Your Pass Word">
                    </p>
                    <p class="clear email_box">
                        <span class="col_con">E-MAIL</span>
                        <input type="text" class="col_con "placeholder="your Email Site">
                        <span class="col_con">@</span>
                        <input type="text" class="col_con" placeholder="your Email Site">
                    </p>
                    <div class="join_btns clear">
                        <button>SEND</button>
                        <button>RESET</button>
                    </div>
                </form>
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