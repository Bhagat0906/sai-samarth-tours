<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Receive form inputs
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $message = htmlspecialchars(trim($_POST['message']));

    // 2. Send Email
    $to = "bhagatgaurav0906@gmail.com"; // ✉️ Replace with your real email
    $subject = "New Contact Form Submission from $name";
    $email_message = "
        You have received a new message from Sai Samarth Tours and Travel website:
        
        Name: $name
        Email: $email
        Phone: $phone
        Message: $message
    ";

    $headers = "From: no-reply@saisamarthtravel.com\r\n"; // You can customize sender
    $headers .= "Reply-To: $email\r\n";

    $mail_sent = mail($to, $subject, $email_message, $headers);

    // 3. Send WhatsApp Message (by redirecting or creating a WhatsApp API link)
    $whatsappNumber = "8080682724"; // 📱 Your mobile number in international format (without +)
    $whatsappMessage = urlencode("New Inquiry:\nName: $name\nEmail: $email\nPhone: $phone\nMessage: $message");

    // Optional: You can automate using WhatsApp API if you have a paid WhatsApp API account
    // For now, just creating a simple WhatsApp link

    // 4. Return success or failure
    if ($mail_sent) {
        // Optionally you can also redirect automatically to WhatsApp
        echo "success";

        // Uncomment this line if you want auto-redirect after success
        // header("Location: https://wa.me/$whatsappNumber?text=$whatsappMessage");
    } else {
        echo "error";
    }
} else {
    // If accessed directly, deny
    echo "Access Denied";
}
