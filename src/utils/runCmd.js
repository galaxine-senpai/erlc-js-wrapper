const { apiURL, globalConfig } = require("../client.js");

/**
 * Run a command on the server
 * @param {string} cmd 
 * @returns 
 */
module.exports = (token, cmd) => {
  return new Promise( async (resolve, reject) => {
    const r = await fetch(`${apiURL}/server/command`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Server-Key": globalConfig.token,
      },
      body: JSON.stringify({
        command: cmd,
      }),
    });
    if (r.status !== 200) return reject("API Returned: " + r.status);
    else return resolve(r.json());
  });
};
