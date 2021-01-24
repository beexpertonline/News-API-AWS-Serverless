
const mongoose = require('mongoose');
const config = require('../config/config');
const { logger } = require('../helpers/index');

exports.startConnectToDB = async () => {
    logger.info(`start connect to DB in ${config.mongodb.uri}, with DB name ${config.mongodb.db}`);
    return await mongoose.connect(config.mongodb.uri, config.mongodb.option);
}