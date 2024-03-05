const { apiURL, globalConfig } = require("../client.js");

/**
 * Gets the kill logs from the server
 * @returns {Promise<JSON>}
 */
module.exports = (token) => {
  return new Promise((resolve, reject) => {
    const r = fetch(`${apiURL}/server/killlogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Server-Key": globalConfig.token,
      },
    });
    if (r.status !== 200) return reject("API Returned: " + r.status);
    else return resolve(r.json());
  });
};
