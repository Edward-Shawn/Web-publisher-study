<?php

    $name=$_POST["msg_name"];
    $email=$_POST["msg_email"];
    $msg=$_POST["message"];

    $msg=htmlspecialchars($msg, ENT_QUOTES);

    $con=mysqli_connect("localhost", "root", "", "onetel");
    $sql="insert into msg_table(name, email, message) values('$name', '$email', '$msg')";
    mysqli_query($con, $sql);
    mysqli_close($con);

    echo "
    <script>
    alert('메시지가 전송 되었습니다!!');
        location.href='../index.php';
    </script>
    ";


?>