<li class="board_title clear">
   <span class="num">번호</span>
   <span class="tit">제목</span>
   <span class="id">아이디</span>
    <span class="hit">조회수</span>
</li>

<?php

    $page = $_REQUEST["page"];
    if($page == ""){
        $page = 1;
    }
    $from = ($page -1)*6;

    $con = mysqli_connect("localhost", "sbh3834", "qudgus110!", "sbh3834");
     $sql="select * from community_board order by num desc limit $from, 6";
     $result = mysqli_query($con,$sql);
     while($row=mysqli_fetch_array($result)){
         $num = $row['num'];
          $id = $row['id'];
          $title = $row['title'];
          $content = $row['content'];
           $hits = $row['hits'];
?>
   <li class="board_contents clear">
       <span class="num"><?=$num?></span>
       <span class="tit"><?=$title?></span>
       <span class="id"><?=$id?></span>
       <span class="hit"><?=$hits?></span>
   </li>
       
<?php
}
?>