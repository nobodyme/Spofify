const mongoose = require('mongoose');

var songSchema = mongoose.Schema({
	name: {
		type: String
	},
	artists: {
		type: String
	},
	danceability: {
		type: Number
	},
	energy: {
		type: Number
	},
	key: {
		type: Number
	},
	loudness: {
		type: Number
	},
	mode: {
		type: Number
	},
	speechiness: {
		type: Number
	},
	acousticness: {
		type: Number
	},
	instrumentalness: {
		type: Number
	},
	liveness: {
		type: Number
	},
	valence: {
		type: Number
	},
	tempo: {
		type: Number
	},
	duration_ms: {
		type: Number
	},
	time_signature: {
		type: Number
	},
	rank: {
		type: Number,
		unique: true
	}
});

var songModel = mongoose.model('songlists', songSchema);
module.exports = songModel;
