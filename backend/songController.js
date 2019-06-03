const express = require("express");
const router = express.Router();
const songModel = require("./songSchema");

/*
 Its probably better practice to break out the individual functions incase you need reuse or
 you start creating common "middleware" to handle certain common things across endpoints.
 
 e.g error handling
 
 I also switched these to use async/await syntax to show you what that would look like in comparison.
 Its still a matter of preference to use promise chaining vs callbacks vs async/await but I think the ecosystem
 is moving towards async/await as the de facto.
 
 */
const getSongs = async (req, res) => {
  try {
    const songs = await songModel.find({ rank: { $lte: 50 } });
    res.json({ songs: songs });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const getDetail = async (req, res) => {
  try {
    const rank = req.query.rank;
    if (!rank) {
      return res.json({ error: "Data insufficient" });
    }
    const song = await songModel.find({ rank: rank });
    res.json({ song: song });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const searchQuery = query => {
  return {
    $or: [
      {
        name: { $regex: query, $options: "i" }
      },
      {
        artists: { $regex: query, $options: "i" }
      }
    ]
  };
};

const searchSong = async (req, res) => {
  try {
    const query = req.query.query;
    // if query is empty send all data
    if (!query) {
      return getSongs(req, res);
    }
    const songs = await songModel.find(searchQuery(query));
    res.json({ songs: songs });
  } catch (error) {
    res.status(500).json({ message: "Cannot query db" });
  }
};

/* Route definitions */

router.get("/list", getSongs);

router.get("/detail", getDetail);

router.get("/search", searchSong);

module.exports = router;
