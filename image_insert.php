<?php

    $title = $_POST['title'];
    $select = $_POST['category_select'];
    $upload_dir = '../img/gallery/';

    //thumb image
    $thumb_name = $_FILES['thumb']['name'];
    $thumb_tmp_name = $_FILES['thumb']['tmp_name'];
    $thumb_error = $_FILES['thumb']['error'];

    //large image
    $large_name = $_FILES['large']['name'];
    $large_tmp_name = $_FILES['large']['tmp_name'];
    $large_error = $_FILES['large']['error'];

    if($thumb_name && !$thumb_error){
        $uploaded_thumb_file = $upload_dir.$thumb_name;
        if(!move_uploaded_file($thumb_tmp_name, $uploaded_thumb_file)){
            echo "
                <script>
                    alert('upload fail!!');
                </script>
            ";
            exit;
        }
    }

    if($large_name && !$large_error){
        $uploaded_large_file = $upload_dir.$large_name;
        if(!move_uploaded_file($large_tmp_name, $uploaded_large_file)){
            echo "
                <script>
                    alert('upload fail!!');
                </script>
            ";
            exit;
        }
    }


    $con = mysqli_connect("localhost", "root", "", "onetel");
    $sql="insert into gallery_items(title, category, thumb_img, large_img) values('$title', '$select','$thumb_name','$large_name')";
    mysqli_query($con,$sql);

?>



