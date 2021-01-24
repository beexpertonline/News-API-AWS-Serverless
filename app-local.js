const DBConnection = require('./models/mongoConnection');

DBConnection.startConnectToDB()
    .then(() => {
        const app = require('./app');
        const port = 4000
        app.listen(port)
        console.log(`listening on http://localhost:${port}`)
    }).catch(err => {
        console.log(`cannot connect to DB`, err)
    })
