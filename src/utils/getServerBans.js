const { apiURL, globalConfig } = require("../client.js");
const errorHandler = require('./errorHandler.js')

/**
 * Get the server bans
 * @returns {Promise<JSON>}
 */
module.exports = async (token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const r = await fetch(`${apiURL}/server/bans`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Server-Key": globalConfig.token,
        },
      });
      if (r.status !== 200) return reject(new Error(new Error(errorHandler(r.status))));
      else return resolve(r.json());
    } catch (error) {
      return reject("API Error: " + error.message);
    }
  });
};
