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

// Finally, lets run a command
Client.runCmd(':h Hello World!').then(response => {
    "Command: " + console.log(response)
}).catch(console.error)

/**
 * Now we are all done!
 */