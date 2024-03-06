const main = require("../client.js");

/**
 * @author galaxine-senpai
 * @description A client for the PoliceRoleplay API
 * @version 1.0.0
 * @license MIT
 */

/**
 * @class client
 * @property {string} Token - The token provided in your server settings
 */

class erlcClient {
  /**
   * @constructor Initialize the client
   * @param {string} token - The token provided in your server settings
   */
  constructor(token) {
    if (!token) throw new Error("You must provide a token to the client!");
    this.token = token;
    main.globalConfig = this.token;
  }

  /**
   * Return the globalConfig
   * @returns {globalConfig} - The globalConfig
   */
  getConfig() {
    console.log(main.globalConfig); // This is just for debugging purposes and really shouldn't be used in prod
  }

  /**
   * Get the online players
   * @returns {Promise<JSON>}
   */
  getOnlinePlayers() {
    return main.getOnlinePlayers();
  }

  /**
   * Get the server info
   * @returns {Promise<JSON>}
   */
  getServerInfo() {
    return main.getServerInfo();
  }

  /**
   * Get the server bans
   * @returns {Promise<JSON>}
   */
  getServerBans() {
    return main.getServerBans();
  }

  /**
   * Get the player queue
   * @returns {Promise<JSON>}
   */
  getPlayerQueue() {
    return main.getPlayerQueue();
  }

  /**
   * Get the server kill logs
   * @returns {Promise<JSON>}
   */
  getServerKL() {
    return main.getServerKL();
  }

  /**
   * Run a command
   * @param {string} command - The command to run
   * @returns {Promise<JSON>}
   */
  runCmd(command) {
    return main.runCmd(command);
  }
}

module.exports = erlcClient;
