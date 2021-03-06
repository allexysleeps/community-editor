const express = require('express');
const bodyParser = require('body-parser');
const serverPort = require('./src/config').serverPort;
const Routes = require('./src/routes');

const app = express();
const reactApp = `${__dirname}/client/prod`;

app
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended: false}))
	.use('/fb/', express.static(reactApp))
	.use('/fb/result', express.static(reactApp))
	.use(Routes)
	.listen(serverPort);

console.log(`it's alive on localhost/${serverPort}`);