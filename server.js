// Simple Express backend for contact form (ESM version)
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// /api/send-email route (Contact page)
app.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact: ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<div><h2>New Contact Form Submission</h2><p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p><strong>Subject:</strong> ${subject}</p><div>${message.replace(/\n/g, '<br>')}</div></div>`
    });
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email. Please try again later.' });
  }
});

// /api/contact route (Services inquiry)
app.post('/api/contact', async (req, res) => {
  const { name, email, message, subject } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });

  try {
    // Send email to business
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: subject || 'New Contact Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'Not specified'}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f9fafb; border-radius: 5px;">
            ${message || 'No message provided'}
          </div>
        </div>
      `,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'Not specified'}\n\nMessage:\n${message || 'No message provided'}`
    });

    // Send confirmation to user if email exists
    if (email) {
      await transporter.sendMail({
        from: `"Your Business" <${process.env.SMTP_USER}>`,
        to: email,
        subject: 'Thank you for your inquiry',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4f46e5;">Thank you for reaching out!</h2>
            <p>We've received your message regarding <strong>${subject || 'your inquiry'}</strong> and will get back to you shortly.</p>
            <p>For urgent matters, please contact us at ${process.env.CONTACT_PHONE || 'our support number'}.</p>
          </div>
        `,
        text: `Thank you for your message regarding ${subject || 'your inquiry'}. We'll contact you soon.`
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    let msg = 'Failed to send message. Please try again later.';
    if (error && error.message) {
      msg += `\n${error.message}`;
    }
    return res.status(500).json({ 
      success: false,
      message: msg
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
