const bcrypt = require("bcryptjs");

async function hashpassword(plaintext) {
  const user = {
    id: 1,
    email: "brad@netninja.co.uk",
    password: plaintext
  };

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(plaintext, salt);

  console.log(user);
}

// hashpassword("123456");

async function checkPassword(plaintext, hash) {
  const isMatch = await bcrypt.compare(plaintext, hash);

  isMatch ? console.log("Matched") : console.log("Match not found");
}

checkPassword(
  "123456",
  "$2a$10$/a5B6B17RtUSTOOh9Qu3geu/EvAPIgbvlFZ3E9AjcLYIqkZmal3PC"
);
