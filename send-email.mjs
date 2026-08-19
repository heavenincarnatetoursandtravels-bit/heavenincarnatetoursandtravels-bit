import { Resend } from 'resend';

const resend = new Resend('re_TNPDAmym_HmunsEdzNV9g3oB6gCSAwRAZ');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'heavenincarnatetoursandtravels@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
}).then((data) => {
    console.log("Email sent successfully:", data);
}).catch((error) => {
    console.error("Error sending email:", error);
});
