// sendForm.js
const nodemailer = require("nodemailer");

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "bhagatgaurav0906@gmail.com", // Your Gmail address
    pass: "mrwlcqfcctymfajq" // App Password without spaces
  }
});

// Function to send email
const sendForm = async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "bhagatgaurav0906@gmail.com", // Where you want to receive form submissions
    subject: "New Contact Form Submission",
    text: `
Name: ${name}
Email: ${email}
Message: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending message", error });
  }
};

module.exports = sendForm;
