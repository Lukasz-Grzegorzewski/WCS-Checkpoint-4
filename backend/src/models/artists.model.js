const db = require("../../DB");

const getArtists = () => {
  return db.query("SELECT * FROM artist");
};

const getArtistById = (id) => {
  return db.query("SELECT * FROM artist WHERE id_artist = ?", [id]);
};

const getAlbumsByIdArtist = (id) => {
  return db.query(
    "SELECT * FROM album INNER JOIN artist ON album.fk_id_artist = artist.id_artist WHERE artist.id_artist = ?;",
    [id]
  );
};

const getTracksOfAlbumsByIdArtist = (idArtist, idAlbum) => {
  return db.query(
    "SELECT * FROM track INNER JOIN album ON track.fk_id_album = album.id_album INNER JOIN artist ON album.fk_id_artist = artist.id_artist WHERE artist.id_artist = ? AND album.id_album = ?",
    [idArtist, idAlbum]
  );
};

const postArtist = (name, imageUrl) => {
  return db.query("INSERT INTO artist( name, image_url ) VALUES ( ?, ? )", [
    name,
    imageUrl,
  ]);
};

const patchArtistById = (id, body, reqBodyKeysArr) => {
  if (!reqBodyKeysArr) return console.warn("no body to patch an artist");

  let sql = "UPDATE artist SET";

  reqBodyKeysArr.forEach((item, index) => {
    if (index > 0) {
      sql += ",";
    }
    switch (item) {
      case "name":
        sql += ` name = '${body.name}'`;
        break;
      case "imageUrl":
        sql += ` image_url = '${body.imageUrl}'`;
        break;
      default:
        break;
    }
  });
  sql += " WHERE id_artist = ?;";
  return db.query(sql, [id]);
};

const deleteArtistById = (id) => {
  return db.query("DELETE FROM artist WHERE id_artist = ?", [id]);
};

module.exports = {
  getArtists,
  getArtistById,
  getAlbumsByIdArtist,
  getTracksOfAlbumsByIdArtist,
  postArtist,
  patchArtistById,
  deleteArtistById,
};
