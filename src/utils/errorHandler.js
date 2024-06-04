// WIP TO GET BETTER ERROR HANDLING FOR MORE INFO
const { globalConfig } = require("../client.js");

function errorHandler(input) {
  //? Changed to use input for better error handling
  // Array for error messages
  const errorMessages = {
    400: "Bad Request (Report this to the developer)",
    403: "Forbidden (Did you forget the token or input it incorrectly?)",
    404: "Not Found (Report this to the developer)",
    422: "Unprocessable Entity (No users in server)",
    429: "Too Many Requests (You are being ratelimited **MESURING RATELIMITS TO PREVENT THIS IS PLANNED**)",
    500: "Internal Server Error (Is roblox down?)",
    0: "Unknown Error (Report this to the developer)",
    1001: "Error contacting the game server/Roblox",
    1002: "Internal Error",
    2000: "No api key provided",
    2001: "Invalid API key (incorrect format)",
    2002: "Invalid API key (invalid or expired)",
    2003: "Invalid Global Key",
    2004: "Cannot access API (Banned from API)",
    3001: "Invalid command",
    3002: "No users in server",
    4001: "Being ratelimited",
    4002: "Restricted command",
    9998: "Restricted resource",
    9999: "Server out of date (run kick all and try again)",
  };

  // Return the error message based on the status code given
  return errorMessages[input] + " (Error Code: " + input + ")";
}

module.exports = errorHandler;
