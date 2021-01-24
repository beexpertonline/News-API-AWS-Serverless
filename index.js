
'use strict';
//to do highlight
const awsServerlessExpress = require('aws-serverless-express')
const DBConnection = require('./models/mongoConnection');
const app = require('./app')
const server = awsServerlessExpress.createServer(app)

DBConnection.startConnectToDB()
    .then(() => {
        console.log(`start connect To DB From Lambda at ${new Date()}`)
    }).catch(err => {
        console.log(`cannot connect to DB in lambda at  ${new Date()} and error is :`, JSON.stringify(err, null, 2))
    })
exports.handler = (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    awsServerlessExpress.proxy(server, event, context);
}