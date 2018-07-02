require('dotenv').config({
  path: '../.env'
});
const { createProbot } = require('probot');

const app = require('../')

exports.handler = function(event, context, callback) {
    const probot = createProbot({
      id: process.env.APP_ID,
      secret: process.env.WEBHOOK_SECRET,
      cert: process.env.PRIVATE_KEY
    })

    app(probot)
}
