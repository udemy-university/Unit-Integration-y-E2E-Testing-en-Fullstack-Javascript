require('dotenv').config();
const app = require('./app');

const logger = require('pino')();

const port = process.env.PORT;

app.listen(port, () => {
  logger.info(`Listening on port ${port}`);
});
