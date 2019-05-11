const jwt = require("jwt-simple");

function generateToken() {
  const payload = { id: 1, name: "ninja" };

  const token = jwt.encode(payload, "secret");
  return { token };
}

console.log(generateToken());

function validateToken(token) {
  const decoded = jwt.decode(token, "secret");

  return decoded;
}

console.log(
  validateToken(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Im5pbmphIn0.kowHlX7Jf63D966GNGbm89oP1x0SjhfhOxwKKeQUo6M",
    "secret"
  )
);
