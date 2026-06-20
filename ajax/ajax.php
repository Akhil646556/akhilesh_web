<?php
require_once '../include/functions.php';
$original_dir = getcwd();
chdir(__DIR__ . '/../email');
require_once 'home.php';
chdir($original_dir);

$source = new source();

$action = $_POST['action'] ?? '';
$response = ['status' => 'error', 'message' => 'Invalid Request'];

if ($action == 'contact_submit') {
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $mobile = trim($_POST['mobile'] ?? '');
    $message = trim($_POST['message'] ?? '');

    if (empty($name) || empty($email) || empty($mobile) || empty($message)) {
        $response['message'] = 'Please fill in all required fields.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['message'] = 'Please enter a valid email address.';
    } else {
        // Build base URL dynamically (works on localhost & InfinityFree automatically)
        $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? "https" : "http";
        $host = $_SERVER['HTTP_HOST'];
        $script = $_SERVER['SCRIPT_NAME'];
        $base_dir = str_replace('/ajax/ajax.php', '', $script);
        $base_url = rtrim($protocol . "://" . $host . $base_dir, '/');

        // 1. Notification Email to Owner (Akhilesh) - Administrative Clean Tech style
        $owner_subject = "New Inquiry: " . $name;
        $owner_msg = <<<HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #090d16; color: #cbd5e1; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 30px auto; background-color: #111827; border-radius: 8px; border: 1px solid #1f2937; overflow: hidden; }
        .header { background-color: #1e40af; padding: 20px; border-bottom: 2px solid #3b82f6; }
        .header h2 { margin: 0; color: #ffffff; font-size: 18px; font-weight: 600; letter-spacing: 0.5px; }
        .content { padding: 30px 25px; }
        .data-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        .data-table th, .data-table td { padding: 12px 10px; border-bottom: 1px solid #1f2937; text-align: left; }
        .data-table th { color: #9ca3af; font-size: 11px; text-transform: uppercase; width: 30%; }
        .data-table td { color: #f3f4f6; font-size: 14px; font-weight: 500; }
        .msg-title { font-size: 11px; text-transform: uppercase; color: #9ca3af; margin-bottom: 10px; font-weight: bold; }
        .msg-body { background-color: #030712; border: 1px solid #1f2937; padding: 15px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #e5e7eb; white-space: pre-wrap; }
        .footer { background-color: #0b0f19; padding: 15px; text-align: center; font-size: 11px; color: #4b5563; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Portfolio Contact Form Alert</h2>
        </div>
        <div class="content">
            <table class="data-table">
                <tr>
                    <th>Sender Name</th>
                    <td>{$name}</td>
                </tr>
                <tr>
                    <th>Email Address</th>
                    <td>{$email}</td>
                </tr>
                <tr>
                    <th>Mobile Number</th>
                    <td>{$mobile}</td>
                </tr>
            </table>
            <div class="msg-title">Message Details</div>
            <div class="msg-body">{$message}</div>
        </div>
        <div class="footer">
            System Notification - Akhilesh Kumar Portfolio
        </div>
    </div>
</body>
</html>
HTML;

        // 2. Auto-responder Email to Guest - Warm Personal Modern Indigo Card style
        $guest_subject = "Thanks for connecting, " . $name . "!";
        $guest_msg = <<<HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #0f172a; color: #cbd5e1; margin: 0; padding: 0; }
        .container { max-width: 580px; margin: 40px auto; background-color: #1e293b; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
        .hero-banner { background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%); padding: 40px 30px; text-align: center; }
        .hero-banner h1 { margin: 0; color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: 0.5px; text-shadow: 0 2px 4px rgba(0,0,0,0.2); }
        .body-card { padding: 40px 35px; }
        .greeting { font-size: 18px; font-weight: 700; color: #ffffff; margin-bottom: 15px; }
        .message-text { font-size: 15px; line-height: 1.8; color: #cbd5e1; margin-bottom: 30px; }
        .details-box { background-color: rgba(15, 23, 42, 0.4); border-left: 4px solid #6366f1; padding: 15px 20px; border-radius: 0 8px 8px 0; margin-bottom: 30px; }
        .details-title { font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 700; margin-bottom: 8px; letter-spacing: 0.5px; }
        .details-content { font-size: 13.5px; line-height: 1.6; color: #f8fafc; font-style: italic; }
        .btn-wrapper { text-align: center; margin-bottom: 10px; }
        .btn-action { display: inline-block; background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%); color: #ffffff !important; text-decoration: none; padding: 12px 35px; border-radius: 50px; font-weight: 600; font-size: 14px; box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3); transition: all 0.3s ease; }
        .footer { background-color: #0f172a; padding: 25px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid rgba(255,255,255,0.05); }
        .social-links { margin-top: 10px; }
        .social-links a { color: #94a3b8; text-decoration: none; margin: 0 8px; font-size: 11px; }
        .social-links a:hover { color: #ffffff; }
    </style>
</head>
<body>
    <div class="container">
        <div class="hero-banner">
            <h1>Thank You!</h1>
        </div>
        <div class="body-card">
            <div class="greeting">Hello {$name},</div>
            <div class="message-text">
                Thank you for visiting my portfolio website and getting in touch! I have successfully received your inquiry and will review it shortly. I typically respond to all professional queries within 24 hours.
            </div>
            <div class="details-box">
                <div class="details-title">Message Transmitted</div>
                <div class="details-content">"{$message}"</div>
            </div>
            <div class="btn-wrapper">
                <a href="{$base_url}/#projects" class="btn-action">Explore My Work</a>
            </div>
        </div>
        <div class="footer">
            <strong>Akhilesh Kumar Prajapati</strong><br>
            Web Developer & Data Integration Expert
            <div class="social-links">
                <a href="{$base_url}/#about">About Me</a> | 
                <a href="{$base_url}/#skills">Skills</a> | 
                <a href="{$base_url}/#contact">Contact</a>
            </div>
        </div>
    </div>
</body>
</html>
HTML;

        // Send notification to owner
        $send_owner = emailsend('akp41998@gmail.com', $owner_subject, $owner_msg, '', '', '');

        // Send auto-responder to guest
        $send_guest = emailsend($email, $guest_subject, $guest_msg, '', '', '');

        if ($send_owner) {
            $response = [
                'status' => 'success',
                'message' => 'Thank you ' . htmlspecialchars($name) . ', your message has been sent successfully!'
            ];
        } else {
            $response['message'] = 'Mailer Error: Could not send email.';
        }
    }
}

echo json_encode($response);
exit;
