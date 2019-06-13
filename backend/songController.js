const songModel = require('./songSchema');

const getSongs = async (req, res) => {
	try {
		const songs = await songModel.find({ rank: { $lte: 50 } });
		return res.status(200).json({ songs: songs });
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
};

const getSongDetail = async (req, res) => {
	try {
		const rank = req.query.rank;
		if (!rank) {
			return res.status(400).json({ error: 'Data insufficient' });
		}
		const song = await songModel.find({ rank: rank });
		return res.status(200).json({ song: song });
	} catch (err) {
		return res.status(500).json({ err: err.message });
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
			return res.status(200).json({ songs: songs });
		}
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
};

module.exports = { searchSong, getSongDetail, getSongs };
