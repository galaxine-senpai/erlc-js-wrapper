const { globalConfig, apiURL } = require('../client.js')
const errorHandler = require('./errorHandler.js')

module.exports = (token) => {
    return new Promise(async (resolve, reject) => {
        const r = await fetch(`${apiURL}/server/vehicles`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Server-Key': globalConfig.token
            }
        })
        if (r.status !== 200) return reject(new Error(new Error(errorHandler(r.status))))
        else return resolve(r.json())
    })
}