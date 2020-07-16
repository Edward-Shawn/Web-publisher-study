<?php

    $id=$_POST["id"];
    $name=$_POST["name"];
    $pass=$_POST["pass"];
    $email1=$_POST["email1"];
    $email2=$_POST["email2"];

    $email = $email1."@".$email2;
    $regist_day = date("Y-m-d (H:i)");
    $level = 9;
    $point = 0;

    $con = mysqli_connect("localhost", "root", "", "onetel");
    $sql = "insert into members1(id, name, pass, email, regist_day, level, point) values('$id','$name','$pass','$email','$regist_day','$level','$point')";


    mysqli_query($con,$sql);
    mysqli_close($con);

    echo "
        <script>
            location.href='../index.php'
        </script>
    ";
?>