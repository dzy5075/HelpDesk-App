const logEmail = (email, subject, body) => {
  try {
    console.log("Inside logEmail function");
    console.log(`Email sent to: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${body}`);
  } catch (error) {
    console.error("Error in logEmail function:", error); // Log error details
  }
};

module.exports = logEmail;
