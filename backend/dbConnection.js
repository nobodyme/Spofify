const mongoose = require('mongoose');
const options = { useNewUrlParser: true, useCreateIndex: true };
const dbUrl = process.env.url || 'mongodb://127.0.0.1:27017/songs';

mongoose.connect(dbUrl, options);
mongoose.connection.on(
	'error',
	console.error.bind(console, 'connection error:')
);
