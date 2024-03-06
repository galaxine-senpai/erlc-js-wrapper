const { apiURL, globalConfig } = require("../client.js");

/**
 * Gets the players in the queue
 * @returns {Promise<JSON>}
 */
module.exports = (token) => {
  return new Promise( async (resolve, reject) => {
    const r = await fetch(`${apiURL}/server/queue`, {
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
