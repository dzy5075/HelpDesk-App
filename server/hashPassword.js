// tool to hash password
const bcrypt = require("bcryptjs");

const password = "password"; // Replace with your desired password
bcrypt.hash(password, 10, (err, hash) => {
  if (err) throw err;
  console.log(`Hashed password: ${hash}`);
});
