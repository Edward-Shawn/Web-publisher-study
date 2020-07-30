<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <title>OneTel</title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/media.css">
    <link rel="stylesheet" href="css/community.css">
</head>

<body>
    <div class="wrap">

        <?php include "include/sub_header.php"?>

        <div class="sub_img">
            <img src="img/community_img.jpg" alt="">
            <div class="img_slogan">
                <h2>Give Us!!</h2>
                <p>Your Valuable Opinions.</p>
            </div>
        </div>

        <section class="community_section">
            <div class="contents_center">
                <div class="sub_page_title">
                    <h2>community</h2>
                </div>

                <div class="board_table">
                    <ul class="board_list" id="board_list">
                        <li class="board_title clear">
                            <span class="num">번호</span>
                            <span class="tit">제목</span>
                            <span class="id">아이디</span>
                            <span class="hit">조회수</span>
                        </li>
                        <li class="board_contents clear">
                            <span class="num">1</span>
                            <span class="tit">첫 게시글 입니다.</span>
                            <span class="id">Shawn</span>
                            <span class="hit">12</span>
                        </li>
                        <li class="board_contents clear">
                            <span class="num">2</span>
                            <span class="tit">두번째 게시글 입니다.</span>
                            <span class="id">Shawn</span>
                            <span class="hit">22</span>
                        </li>
                        <li class="board_contents clear">
                            <span class="num">3</span>
                            <span class="tit">세번째 게시글 입니다.</span>
                            <span class="id">Shawn</span>
                            <span class="hit">32</span>
                        </li>
                    </ul>
                    <a href="write_form.php">글쓰기</a>
                </div> <!--end of board table tag-->
            </div>
        </section>


        <?php include "include/footer.php" ?>

    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/custom.js"></script>
</body>

</html>