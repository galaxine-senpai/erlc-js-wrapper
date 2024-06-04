const { apiURL, globalConfig } = require("../client.js");
const errorHandler = require("./errorHandler.js");

/**
 * Get the server info
 * @returns {Promise<JSON>}
 */
module.exports = (token) => {
  return new Promise(async (resolve, reject) => {
    const r = await fetch(`${apiURL}/server/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Server-Key": globalConfig.token,
      },
    });
    if (r.status !== 200) return reject(new Error(errorHandler(r.status)));
    else return resolve(r.json());
  });
};
