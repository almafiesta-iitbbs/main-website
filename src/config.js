require("dotenv").config({ path: "./.env" });

let REACT_APP_PORT = process.env.REACT_APP_PORT;
let REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
let REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

module.exports = {
  REACT_APP_PORT,
  REACT_APP_CLIENT_ID,
  REACT_APP_BASE_URL
};
