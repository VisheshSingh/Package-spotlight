const jwt = require("jwt-simple");
const config = require("config");
const uuid = require("uuid");

function generateToken() {
  const payload = { id: uuid.v4(), name: config.get("jwtSecret") };

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
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE3NWExMTkwLWY0NGUtNDMwYi1iM2ZiLTJhOGVmY2Y5YmUwZiIsIm5hbWUiOiJzZWNyZXRLZXkifQ.HWIUifUsPKF2ik7WySLlgP0POKbiEZALWVDJyv5Xkas",
    "secret"
  )
);
