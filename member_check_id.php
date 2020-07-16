<?php
    $id=$_GET["id"];

    // echo $id;
    if(!$id){
        echo "아이디를 입력해 주세요.";
        echo "
            <script>
                self.close();
            </script>
        ";
    }else{
        $con = mysqli_connect("localhost", "root", "", "onetel");
        $sql="select * from members1 where id='$id'";
        $result=mysqli_query($con,$sql);
        $num_record=mysqli_num_rows($result);
        if($num_record){
            echo $id."는(은) 존재하는 아이디 입니다.";
            echo "다른 아이디를 사용해 주세요.";
        }else{
            echo $id."는(은) 사용 가능한 아이디 입니다.";
        }

        mysqli_close($con);
    }
?>