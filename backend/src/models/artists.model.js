const db = require("../../DB");

const getArtists = () => {
  return db.query("SELECT * FROM artist");
};

const getArtistById = (id) => {
  return db.query("SELECT * FROM artist WHERE id_artist = ?", [id]);
};

const postArtist = (name) => {
  return db.query("INSERT INTO artist( name ) VALUES ( ? )", [name]);
};

const patchArtistById = (id, name) => {
  return db.query("UPDATE artist SET name = ? WHERE id_artist = ?", [name, id]);
};

const deleteArtistById = (id) => {
  return db.query("DELETE FROM artist WHERE id_artist = ?", [id]);
};

module.exports = {
  getArtists,
  getArtistById,
  postArtist,
  patchArtistById,
  deleteArtistById,
};
