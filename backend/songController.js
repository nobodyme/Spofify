const songModel = require('./songSchema');

const getSongs = async (req, res) => {
	try {
		const songs = await songModel.find({ rank: { $lte: 50 } });
		return res.json({ songs: songs });
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
};

const getSongDetail = async (req, res) => {
	try {
		const rank = req.query.rank;
		if (!rank) {
			return res.json({ error: 'Data insufficient' });
		}
		const song = await songModel.find({ rank: rank });
		return res.json({ song: song });
	} catch (err) {
		return res.json({ err: err.message });
	}
};

const searchQuery = query => {
	return {
		$or: [
			{
				name: { $regex: query, $options: 'i' }
			},
			{
				artists: { $regex: query, $options: 'i' }
			}
		]
	};
};

const searchSong = async (req, res) => {
	try {
		const query = req.query.query;
		if (!query) {
			return getSongs(req, res);
		} else {
			const songs = await songModel.find(searchQuery(query));
			return res.json({ songs: songs });
		}
	} catch (err) {
		return res.json({ err: err.message });
	}
};

module.exports = { searchSong, getSongDetail, getSongs };
