<!-- <meta charset="utf-8"> -->

<?php

    session_start();
    if(isset($_SESSION['userid'])){
        $userid=$_SESSION['userid'];
    }else{
        $userid='';
    }

    $title = $_POST['title'];
    $content = $_POST['content'];

    // echo $userid;
    // echo $title; 
    // echo $content;

    $con = mysqli_connect("localhost", "sbh3834", "qudgus110!", "sbh3834");
    $sql="insert into community_board(id, title, content, hits) values('$userid','$title','$content','0')";
    mysqli_query($con, $sql);

    $sql="select * from community_board order by num desc";
    $result = mysqli_query($con, $sql);

    $res = array();

    while($row=mysqli_fetch_array($result)){
        array_push($res, array(
            'id'=>$row['id'],
            'title'=>$row['title'],
            'content'=>$row['content']
        ));
    }

    //json 파일 생성 및 데이터 json 인코딩
    file_put_contents("../data/write_contents.json", json_encode($res, JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE));

    mysqli_close($con);

?>