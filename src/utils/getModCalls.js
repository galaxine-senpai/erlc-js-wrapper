const { globalConfig, apiURL } = require('../client.js')

module.exports = (token) => {
    return new Promise(async (resolve, reject) => {
        const r = await fetch(`${apiURL}/server/killlogs`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Server-Key': globalConfig.token
            }
        })
        if (r.status !== 200) return reject(new Error('[getServerKL] API Returned: ' + r.status))
        else return resolve(r.json())
    })
}