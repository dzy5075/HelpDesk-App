const logEmail = (to, subject, body) => {
  console.log(`Would normally send email here with body: 
    To: ${to}
    Subject: ${subject}
    Body: ${body}`);
};

module.exports = logEmail;
