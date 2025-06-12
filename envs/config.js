const dotenv = require("dotenv");

const env = process.env.ENV || "development";
dotenv.config({ path: `envs/.env.${env}` });
console.log(env);

// Validate required variables
const requiredVars = [
  "BASE_URL",
  "VALID_EMAIL",
  "VALID_PASSWORD",
  "INVALID_EMAIL",
  "INVALID_PASSWORD"
];
requiredVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

module.exports = {
  baseURL: process.env.BASE_URL,
  valid_email: process.env.VALID_EMAIL,
  valid_psswd: process.env.VALID_PASSWORD,
  invalid_email: process.env.INVALID_EMAIL,
  invalid_psswd: process.env.INVALID_PASSWORD
};