const express = require('express');
const db = require('./dbConnection');
const app = express();
const cors = require('cors');
global.__root = __dirname + '/';

app.use(cors());

const port = process.env.PORT || 3001;

const routerIndex = require('./routerIndex');
app.use('/api/songs', routerIndex);

app.listen(port, () => console.log('starting app'));
