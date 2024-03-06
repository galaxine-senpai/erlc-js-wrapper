const client = require('../index.js')

const Client = new client.init({
    token: 'your-token-here'
})

// Update the config
Client.config()

// Now you should be able to use the client

// Lets try getting the bans from the server
client.getServerBans().then(bans => {
    "Bans: " + console.log(bans)
}).catch(console.error)

// How about online players next
client.getOnlinePlayers().then(players => {
    "Players: " + console.log(players)
}).catch(console.error)

// Lets now try the queue
client.getPlayerQueue().then(queue => {
    "Queue: " + console.log(queue)
}).catch(console.error)

// Now how about Kill Logs
client.getServerKL().then(killLogs => {
    "Kill Logs: " + console.log(killLogs)
}).catch(console.error)

// Finally, lets run a command
client.runCmd(':h Hello World!').then(response => {
    "Command: " + console.log(response)
}).catch(console.error)

console.log("All done!")