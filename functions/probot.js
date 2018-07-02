require('dotenv').config({
  path: '../.env'
});
const { createProbot } = require('probot');

const app = require('../')

exports.handler = async function(event, context) {
  const name = event.queryStringParameters.name || "World";
  const probot = createProbot({
    id: process.env.APP_ID,
    secret: process.env.WEBHOOK_SECRET,
    cert: process.env.PRIVATE_KEY
  })

  await app(probot)
  return {
    statusCode: 200,
    body: `Hello, ${name}`
  };
}
