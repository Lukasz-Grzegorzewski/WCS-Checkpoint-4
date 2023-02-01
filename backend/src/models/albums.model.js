const db = require("../../DB");

const getAlbums = () => {
  return db.query(
    "SELECT * FROM album INNER JOIN artist ON album.fk_id_artist = artist.id_artist;"
  );
};

const getAlbumById = (id) => {
  return db.query("SELECT * FROM album WHERE id_album = ?", [id]);
};

const postAlbum = (titleAlbum, genre, picture, fkIdArtist) => {
  return db.query(
    "INSERT INTO album( title_album, genre, picture, fk_id_artist ) VALUES ( ?, ?, ?, ? )",
    [titleAlbum, genre, picture, fkIdArtist]
  );
};

const patchAlbumById = (id, reqBodyKeysArr, body) => {
  let sql = "UPDATE album SET";

  if (!reqBodyKeysArr) return console.warn("no body to patch an album");

  reqBodyKeysArr.forEach((item, index) => {
    console.warn("item : ", item);
    if (index > 0) {
      sql += ",";
    }

    switch (item) {
      case "title_album":
        sql += ` title_album =  "${body.titleAlbum}"`;
        break;
      case "genre":
        sql += ` genre = "${body.genre}"`;
        break;
      case "picture":
        sql += ` picture = "${body.picture}"`;
        break;
      case "fkIdArtist":
        sql += ` fk_id_artist = "${body.fkIdArtist}"`;
        break;
      default:
        break;
    }
  });
  sql += " WHERE id_album = ?;";

  return db.query(sql, [id]);
};

const deleteAlbumById = (id) => {
  return db.query("DELETE FROM album WHERE id_album = ?", [id]);
};

module.exports = {
  getAlbums,
  getAlbumById,
  postAlbum,
  patchAlbumById,
  deleteAlbumById,
};
