<?php

header('Content-Type: application/json; charset=utf-8');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

// Получаем JSON
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(['status' => 'error', 'message' => 'Нет данных']);
    exit;
}

// Данные клиента
$name = $data['customerInfo']['name'] ?? 'Не указано';
$phone = $data['customerInfo']['phone'] ?? 'Не указано';
$email = $data['customerInfo']['email'] ?? 'Не указано';

// Товары
$cartItems = $data['cartItems'] ?? [];
$totalPrice = $data['totalPrice'] ?? 0;


// Формируем HTML письмо
$message = "
<h2>Новая заявка с сайта Пневмоторг</h2>

<p><b>Имя:</b> {$name}</p>
<p><b>Телефон:</b> {$phone}</p>
<p><b>Email:</b> {$email}</p>

<h3>Заказ:</h3>
<table border='1' cellpadding='5' cellspacing='0'>
<tr>
    <th>Товар</th>
    <th>Количество</th>
    <th>Цена</th>
</tr>
";

foreach ($cartItems as $item) {
    $message .= "
    <tr>
        <td>{$item['name']}</td>
        <td>{$item['quantity']}</td>
        <td>{$item['price']} ₽</td>
    </tr>
    ";
}

$message .= "</table>";
$message .= "<h3>Итого: {$totalPrice} ₽</h3>";


// SMTP отправка
$mail = new PHPMailer(true);

try {

    $mail->isSMTP();
    $mail->Host       = 'smtp.yandex.ru';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'dss8282@yandex.ru';
    $mail->Password   = 'hqdttzjevqwgxqsy';

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    $mail->CharSet = 'UTF-8';

    $mail->setFrom(
        'dss8282@yandex.ru',
        'Пневмоторг'
    );

    // Кому (2 адреса)
    $mail->addAddress('info@pnevmo-torg.ru');
    $mail->addAddress('pnevmotorg9@mail.ru');

    // Ответ клиенту (удобно)
    if ($email !== 'Не указано') {
        $mail->addReplyTo($email, $name);
    }

    $mail->isHTML(true);
    $mail->Subject = 'Новая заявка с сайта Пневмоторг';
    $mail->Body    = $message;

    $mail->send();

    echo json_encode([
        'status' => 'success',
        'message' => 'Заказ отправлен'
    ]);

} catch (Exception $e) {

    echo json_encode([
        'status' => 'error',
        'message' => 'Ошибка отправки: ' . $mail->ErrorInfo
    ]);

}