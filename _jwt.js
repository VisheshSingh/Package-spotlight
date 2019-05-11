const jwt = require("jwt-simple");
const config = require("config");

function generateToken() {
  const payload = { id: 1, name: config.get("jwtSecret") };

  const token = jwt.encode(payload, config.get("jwtSecret"));
  return { token };
}

// console.log(generateToken());

function validateToken(token) {
  const decoded = jwt.decode(token, config.get("jwtSecret"));
  console.log(config.get("apiKey"));
  return decoded;
}

console.log(
  validateToken(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6InNlY3JldEtleSJ9.pbqsJZSeBYO6jMkg5NgyvUB158pKxPK29yu3Od4fFao",
    "secret"
  )
);
