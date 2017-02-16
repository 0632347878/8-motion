<?

if ( isset($_POST['name']) ){

    if(isset($_POST['name'])){
        $name = 'Имя: '.$_POST['name']."\n";
    }else{
        $name = "Имя: (не указано) \n";
    }

    if(isset($_POST['phone'])){
        $phone = 'Телефон: '.$_POST['phone']."\n";
    }else{
        $phone = "Телефон: (не указан) \n";
    }

    if(isset($_POST['email'])){
        $email = 'E-mail: '.$_POST['email']."\n";
    }else{
        $email = "E-mail: (не указано) \n";
    }

    if(isset($_POST['message'])){
        $comment = 'Комментарий: '.$_POST['message']."\n";
    }else{
        $comment = "Комментарий: (не указано) \n";
    }

    $message = '<!DOCTYPE HTML>'.
        '<head>'.
        '<meta http-equiv="content-type" content="text/html">'.
        '<title>Письмо с сайта 8-motion.com</title>'.
        '</head>'.
        '<body>'.
        '<div id="outer" style="width: 90%;margin: 0 auto;margin-top: 10px;">'.
        '<div id="inner" style="width: 100%;margin: 0 auto;background-color: #fff;font-family: Tahoma, Arial,sans-serif;font-size: 15px;font-weight: normal;line-height: 1.4em;color: #444;margin-top: 10px;">'.
        '<p><b>Письмо с сайта 8-motion.com</b></p>'.
        '<p>'.$name.'</p>'.
        '<p>'.$phone.'</p>'.
        '<p>'.$email.'</p>'.
        '<p>'.$comment.'</p>'.
        '</div>'.
        '</div>'.
        '<div id="footer" style="width: 100%;height: 40px;margin: 0 auto;text-align: center;padding: 10px;font-family: Verdana;background-color: #E2E2E2;font-size: 13px;">'.
        '© 2015 www.8-motion.com'.
        '</div>'.
        '</body>';


    $subject = "Письмо с сайта 8-motion.com";
    $header = "From: \"8-motion.com\" <djmansys@narod.ru>\n";
    $header .= 'MIME-Version: 1.0'."\r\n";
    $header .= "Content-type: text/html; charset=\"utf-8\"";
    $to = "djmansys@narod.ru";

    mail($to,$subject,$message,$header);

    echo 1;
}
else{
    echo 2;
}

	
       



