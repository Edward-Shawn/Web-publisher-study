<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/7b3294b62f.js" crossorigin="anonymous"></script>
    <title>OneTel</title>
    
    <!-- main style -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/media.css">
    <link rel="stylesheet" href="css/login.css">
</head>
<body>
    
    <div class="wrap">

    <?php include "include/header.php" ?>

    <div class="sub_img">
        <img src="img/home-bg.jpg" alt="">
        <div class="img_slogan">
            <h2>Join Us</h2>
            <p>To Experience Creative World!!</p>
            <a href="#" class="join_btn">JOIN</a>
        </div>
    </div>
        
    <section class="login_section">
        <!-- <div class="login_icon">
            <i class="fa fa-user" aria-hidden="true"></i>
        </div> -->
        <div class="sub_page_title">
            <h2>LOGIN</h2>
        </div>
        <div class="login_box">
            <form action="login.php" method="post" name="login_form">
                <p class="input_id">
                    <input type="text" name="id" placeholder="Your ID">
                </p>
                <p class="input_pass">
                    <input type="password" name="pass"placeholder="Your Password">
                </p>
                <p class="login_btns clear">
                   <a href="php/login.php" onclick="login_submit()">LOGIN</a>
                   <a href="#">JOIN US</a>
                </p>
            <form>
        </div>
    </section>

    <?php include "include/footer.php" ?>

    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/custom.js"></script>
    <script>
        function login_submit(){
           documet.login_form.submit();
        }
    </script>
</body>