<?php

// Вставляем токен, который прислал @botFather
$token = "ВАШ_ТОКЕН_ТЕЛЕГРАМ_БОТА";

// Указываем chat_id, куда будет отправлено сообщение
$chat_id = "ВАШ_CHAT_ID";

// Получаем данные из POST-запроса
$data = json_decode(file_get_contents("php://input"), true);

// Проверяем, что данные были получены
if (!$data) {
    echo json_encode(['status' => 'error', 'message' => 'Нет данных для обработки']);
    exit;
}

// Извлекаем информацию о клиенте и заказе
$name = $data['customerInfo']['name'] ?? 'Не указано';
$phone = $data['customerInfo']['phone'] ?? 'Не указано';
$email = $data['customerInfo']['email'] ?? 'Не указано'; // Получаем email
$cartItems = $data['cartItems'] ?? [];
$totalPrice = $data['totalPrice'] ?? 0;

// Собираем данные для отправки в Telegram
$site = "Пневмоторг";
$arr = array(
    'Заявка с сайта' => $site,
    'Имя:' => $name,
    'Телефон:' => $phone,
    'Email:' => $email, // Включаем email в сообщение
    'Товары:' => ''
);

// Добавляем каждый товар в сообщение
foreach ($cartItems as $item) {
    $itemName = $item['name'];
    $itemQuantity = $item['quantity'];
    $itemPrice = $item['price'];

    $arr['Товары:'] .= "\n- Товар: $itemName, Количество: $itemQuantity, Цена: $itemPrice ₽";
}

$arr['Общая сумма'] = $totalPrice . ' ₽';

// Формируем текст сообщения для Telegram
$txt = "";
foreach ($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
}

// Отправляем данные в Telegram
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// Проверяем результат и возвращаем ответ
if ($sendToTelegram) {
    echo json_encode(['status' => 'success', 'message' => 'Заказ успешно отправлен в Telegram']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Ошибка при отправке заказа в Telegram']);
}
?>
