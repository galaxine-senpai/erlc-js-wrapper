const main = require("../client.js");

/**
 * @class Client
 * @property {string} Token - The token provided in your server settings
 */

class Client {
  /**
   * @constructor
   * @param {Client}
   */
  constructor(token) {
    if (!token) throw new Error("You must provide a token to the client!");
    this.token = token;
  }

  /**
   * Update the globalConfig
   * @returns {globalConfig} - The globalConfig
   */
  config() {
    main.globalConfig = this.token;
    return main.globalConfig;
  }
}

module.exports = Client;
