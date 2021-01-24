const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const responseTime = require('response-time');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const middleware = require('./middleware/http-response');
const { logger } = require('./helpers/index');
const router = require('./routes/index');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(responseTime());
app.use(awsServerlessExpressMiddleware.eventContext());

app.use(middleware.init);
app.use(middleware.logger);

//set responce 
app.use(middleware.response);

//set headre responce
app.use(middleware.responceHeader);

app.get('/', function (req, res) {
    try {
        logger.info('inside get');
        res.Ok({
        });
    } catch (error) {
        logger.error(`requestID ${req.requestId} error in /req`, error);
        return res.InternalServerError();
    }
});

app.use(router.news)

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;