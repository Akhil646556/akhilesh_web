<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
//Load Composer's autoloader
require 'vendor/autoload.php';
//Create an instance; passing `true` enables exceptions
function emailsend($to, $sub, $msg, $attachment, $cc, $bcc){
   $mail = new PHPMailer(true);
try {
    //Server settings
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'admissions@khalsauniversity.ac.in';                     //SMTP username
    $mail->Password   = 'wbbo wsee ezpi guwg';                              //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    //Recipients
    $mail->setFrom('admissions@khalsauniversity.ac.in', 'Khalsa College');
    $mail->addAddress($to);     //Add a recipient
   //  $mail->addAddress('galaxy.rajnish@gmail.com','Rajnish Gupta');               //Name is optional
   //  $mail->addAddress('d.preet@singer.co.nz','Dariya Preet');               //Name is optional
   //  $mail->addAddress('yaigesh@gmail.com','Yaigesh Mehra');               //Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
     // Handle multiple CCs
     if (!empty($cc)) {
      $ccAddresses = explode(",", $cc);  // Split multiple emails
      foreach ($ccAddresses as $ccEmail) {
          $ccEmail = trim($ccEmail); // Trim whitespace
          if (!empty($ccEmail)) {
              $mail->addCC($ccEmail);
          }
      }
  }

  // Handle multiple BCCs
  if (!empty($bcc)) {
      $bccAddresses = explode(",", $bcc);
      foreach ($bccAddresses as $bccEmail) {
          $bccEmail = trim($bccEmail);
          if (!empty($bccEmail)) {
              $mail->addBCC($bccEmail);
          }
      }
  }

    //Attachments
   if($attachment != ""){
      $attmt = explode(",", $attachment);
      foreach($attmt as $row){
         $mail->addAttachment($row);  
      }
      
   }
             //Add attachments
    
       //Optional name
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg'); 
    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $sub;
    $mail->Body    = $msg;
    // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    $mail->send();
    // echo json_encode('Message has been sent');
    return true;
} catch (Exception $e) {
    // echo json_encode("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
   return false;
}
}
$sent = emailsend("delta00764@gmail.com","test","test","","","");
if($sent){
    echo "sent";
}else{
    echo "not sent";
}