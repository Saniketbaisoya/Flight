const express = require('express');
const { serverConfig, loggerConfig } = require('./config');
const { router } = require('./routers/router');


const app = express(); // express ko call krke ek brand new express server object mila app variable mai....
app.use(express.urlencoded({extended: true}));
/**
 * http://localhost:1000/api
 */

app.use('/api',router);
// Now express server ke corressponding listen property ka use krke hmne PORT ko registered krdiya...
app.listen(serverConfig.PORT,()=>{ 
    console.log(`Successfully connected to the server : ${serverConfig.PORT}`);
    loggerConfig.logger.info(`SuccessFully connected to the server : ${serverConfig.PORT}`)
});
