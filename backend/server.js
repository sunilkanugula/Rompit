const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Verify environment variables on startup
console.log("Environment Verification:", {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS ? "***" + process.env.EMAIL_PASS.slice(-3) : "NOT FOUND"
});

// SMTP Configuration (Hostinger Specific)
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    minVersion: 'TLSv1.2',
    ciphers: 'ECDHE-RSA-AES128-GCM-SHA256'
  },
  logger: true,
  debug: true
});

// Connection verification
transporter.verify((error) => {
  if (error) {
    console.error("SMTP Connection Failed:", {
      errorCode: error.code,
      message: error.message,
      stack: error.stack
    });
  } else {
    console.log("SMTP Connection Verified ✅");
    console.log("Server Ready:", {
      host: transporter.options.host,
      port: transporter.options.port,
      secure: transporter.options.secure
    });
  }
});

// Email Endpoint
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  const errors = [];
  if (!name) errors.push("Name is required");
  if (!email) errors.push("Email is required");
  if (!message) errors.push("Message is required");
  
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      errors
    });
  }

  try {
    const mailOptions = {
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: "hello@launchmytech.com",
      replyTo: `"${name}" <${email}>`,
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #2c3e50;">Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px; vertical-align: top;"><strong>Message:</strong></td><td style="padding: 8px;">${message.replace(/\n/g, '<br>')}</td></tr>
          </table>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email successfully sent 📧", info.messageId);
    
    res.json({
      success: true,
      message: "Message sent successfully",
      messageId: info.messageId
    });

  } catch (error) {
    console.error("Email Error Details:", {
      code: error.code,
      command: error.command,
      response: error.response
    });
    
    res.status(500).json({
      success: false,
      message: "Failed to send message",
      error: {
        code: error.code || 'EUNKNOWN',
        response: error.response || 'No server response'
      }
    });
  }
});

// Health Check Endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    smtp: transporter.options.host,
    port: transporter.options.port,
    time: new Date().toISOString()
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n🚀 Server ready at http://localhost:${PORT}`);
  console.log(`📧 SMTP Configured for: ${process.env.EMAIL_USER}`);
  console.log(`🔒 Using secure connection: ${transporter.options.secure ? 'SSL' : 'STARTTLS'}\n`);
});