exports.globalConfig = {}

exports.apiURL = "https://api.policeroleplay.community/v1"

exports.runCmd = require('./utils/runCmd.js')
exports.getPlayerQueue = require('./utils/getPlayerQueue.js')
exports.getOnlinePlayers = require('./utils/getOnlinePlayers.js')
exports.getServerBans = require('./utils/getServerBans.js')
exports.getServerInfo = require('./utils/getServerInfo.js')
exports.getServerKL = require('./utils/getServerKL.js')
exports.getVehicles = require('./utils/getVehicles.js')
exports.getModCalls = require('./utils/getModCalls.js')
exports.getCommandLogs = require('./utils/getCommandLogs.js')

exports.init = require('./classes/client.js')
