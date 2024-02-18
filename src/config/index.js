const dotenv = require('dotenv')

dotenv.config()

const globalConfig = {
    port: process.env.PORT
}

module.exports = globalConfig