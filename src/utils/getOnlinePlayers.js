const { apiURL, globalConfig } = require("../client.js");

/**
 * Get the online players
 * @returns {Promise<JSON>}
 */
module.exports = (token) => {
  return new Promise( async (resolve, reject) => {
    const r = await fetch(`${apiURL}/server/players`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Server-Key": globalConfig.token,
      },
    });
    if (r.status !== 200) return reject(new Error("[getOnlinePlayers] API Returned: " + r.status));
    else return resolve(r.json());
  });
};
