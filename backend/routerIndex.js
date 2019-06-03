const express = require('express');
const router = express.Router();
const { getSongs, getSongDetail, searchSong } = require('./songController');

router.get('/list', getSongs);
router.get('/detail', getSongDetail);
router.get('/search', searchSong);

module.exports = router;
