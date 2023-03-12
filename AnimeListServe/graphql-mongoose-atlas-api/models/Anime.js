const { mongoose, Types } = require('mongoose');

const AnimeSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  studio: {
    type: String,
  },
  episodes: {
    type: Number,
  },
  genres: {
    type: Types.Array(),
  },
  characters: {
    type: [{ name: String, age: Number, gender: String }],
  },
});

module.exports = mongoose.model('Anime', AnimeSchema);
