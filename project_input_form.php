<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Input</title>
</head>
<body>
    <form action="php/project_input.php" method="post" name = "project_data" enctype="multipart/form-data">
        <p>
            이미지 경로 : <input type="file" name="image">
        </p>
        <p>
            제목 : <input type="text" name="title">
        </p>
        <p>
            설명 : <textarea name="desc"></textarea>
        </p>
        <p>
            코드 : <input type="text" name="code">
        </p>
        <p>
            언어 : <input type="text" name="lan">
        </p>
        <p>
            가격 : <input type="text" name="price">
        </p>
        <button type="submit">올리기</button>
    </form>
</body>
</html>