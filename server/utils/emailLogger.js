const logEmail = (email, subject, body) => {
  console.log("Inside logEmail function");
  console.log(`Email sent to: ${email}`);
  console.log(`Subject: ${subject}`);
  console.log(`Body: ${body}`);
};

module.exports = logEmail;
