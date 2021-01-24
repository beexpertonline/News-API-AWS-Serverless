module.exports = {
    logLevel: process.env.LOG_LEVEL || 'info',
    mongodb: {
        uri: process.env.DB_URI,
        db: process.env.DB_NAME || `news`,
        option: {
            useNewUrlParser: true,
            // useCreateIndex: true,
            // autoIndex: false,
            // reconnectTries: 25000,
            // reconnectInterval: 500,
            // poolSize: 100,
            // bufferMaxEntries: 0,
            // connectTimeoutMS: 10000,
            // socketTimeoutMS: 45000,
            // family: 4
        }
    },
};