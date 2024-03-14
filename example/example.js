const client = require('../index.js')

const Client = new client.init({
    token: 'your-token-here'
})

// Lets try getting the bans from the server
Client.getServerBans().then(bans => {
    "Bans: " + console.log(bans)
}).catch(console.error)

// How about online players next
Client.getOnlinePlayers().then(players => {
    "Players: " + console.log(players)
}).catch(console.error)

// Lets now try the queue
Client.getPlayerQueue().then(queue => {
    "Queue: " + console.log(queue)
}).catch(console.error)

// Now how about Kill Logs
Client.getServerKL().then(killLogs => {
    "Kill Logs: " + console.log(killLogs)
}).catch(console.error)

// How about server info?
Client.getServerInfo().then(info => {
    "Server Info: " + console.log(info)
}).catch(console.error)

// Hey lets try getting the vehicles in the server
Client.getVehicles().then(vehicles => {
    "Vehicles: " + console.log(vehicles)
}).catch(console.error)

// Now lets try getting the mod calls
Client.getModCalls().then(calls => {
    "Mod Calls: " + console.log(calls)
}).catch(console.error)

// Okay thats all fine and dandy but what about command logs?
Client.getCommandLogs().then(logs => {
    "Command Logs: " + console.log(logs)
}).catch(console.error)

// Finally, lets run a command
Client.runCmd(':h Hello World!').then(response => {
    "Command: " + console.log(response)
}).catch(console.error)

/**
 * Now we are all done!
 */