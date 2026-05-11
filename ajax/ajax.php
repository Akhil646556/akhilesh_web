<?php
require_once '../include/functions.php';
$source = new source();

$action = $_POST['action'] ?? '';
$response = ['status' => 'error', 'message' => 'Invalid Request'];

if ($action == 'contact_submit') {
    // Basic logic for contact form submission
    // In a real scenario, you'd save to DB or send an email
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    if (!empty($name) && !empty($email)) {
        $response = [
            'status' => 'success',
            'message' => 'Thank you ' . htmlspecialchars($name) . ', your message has been received!'
        ];
    } else {
        $response['message'] = 'Please fill in all required fields.';
    }
}

echo json_encode($response);
exit;
