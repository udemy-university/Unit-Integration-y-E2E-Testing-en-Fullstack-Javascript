require('dotenv').config()
const app = require('./app')
const { connectDb } = require('./db/mongo')

const logger = require('pino')()

const port = process.env.PORT
const uri = process.env.URI

if (require.main === module) {
  connectDb({ uri }).then(() => {
    logger.info('Db Connected')
    app.listen(port, () => {
      logger.info(`server listening on port ${port}`)
    })
  })
}

module.exports = app

// i     "mongoose": "^5.13.15",
// i -D  "mongodb-memory-server": "^6.9.6",
