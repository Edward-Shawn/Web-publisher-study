<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>OneTel</title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/admin.css">
    <link rel="stylesheet" href="css/media.css">
  </head>
  <body>
    <div class="wrap">

      <?php include "include/sub_header.php" ?>
      <?php
        if(!$userid || $userlevel !=1){
            echo "<p style='text-align:center; width:100%; margin-top:150px;'>관리자 페이지 입니다. 권한이 있는 관리자만이 접근 가능합니다.</p>";
        } else {
      ?>
      <section class="admin_box">
            <div class="center">
                <div class="tab_box">
                    <button type="button" class="on">메시지 관리</button>
                    <button type="button">회원관리</button>
                    <button type="button">상품관리</button>
                    <button type="button">게시판 관리</button>
                </div>
                <div class="panel_box">
                    <div class="panel msg_panel">
                        <ul class="msg_list_box">
                            <li class="msg_list title clear">
                                <span class="list1">번호</span>
                                <span class="list2">이름</span>
                                <span class="list3">이메일</span>
                                <span class="list4">내용</span>
                                <span class="list5">작성시간</span>
                                <span class="list6"></span>
                            </li>

                            <?php
                                $con = mysqli_connect("localhost", "sbh3834", "qudgus110!", "sbh3834");
                                $sql="select * from msg_table order by num desc";
                                $result=mysqli_query($con, $sql);

                                while($row=mysqli_fetch_array($result)){
                                    $num=$row['num'];
                                    $name=$row['name'];
                                    $email=$row['email'];
                                    $message=$row['message'];
                                    $regist_day=$row['regist_day'];
                            ?>


                            <li class="msg_list list_content clear">
                                <span class="list1"><?=$num?></span>
                                <span class="list2"><?=$name?></span>
                                <span class="list3"><?=$email?></span>
                                <span class="list4"><p><?=$message?></p><b><i class="fa fa-angle-down"></b></i></span>
                                <span class="list5"><?=$regist_day?></span>
                                <span class="list6"><?=$message?></span>
                            </li>

                            <?php
                            }
                            ?>

                        </ul>

                    </div>
                    <div class="panel member_panel"></div>
                    <div class="panel project_panel"></div>
                    <div class="panel board_panel"></div>
                </div>
            </div>
      </section>
      
      <?php
        }
      ?>

      <?php include "include/footer.php" ?>

    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/custom.js"></script>
    <script type="text/javascript" src="js/admin.js"></script>
    <script>
      
    </script>
  </body>
</html>
