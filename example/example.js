const client = require('../index.js')

const Client = new client.init({
    token: 'your-token-here'
})

// Update the config
client.config()

// Now you should be able to use the client

// Lets try getting the bans from the server
client.getServerBans().then(bans => {
    console.log(bans)
}).catch(console.error)