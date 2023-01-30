const db = require("../../DB");

const getAlbums = () => {
  return db.query("SELECT * FROM album");
};

const getAlbumById = (id) => {
  console.warn("lala");
  return db.query("SELECT * FROM album WHERE id_album = ?", [id]);
};

const postAlbum = (title, genre, picture, fkIdArtist) => {
  return db.query(
    "INSERT INTO album( title, genre, picture, fk_id_artist ) VALUES ( ?, ?, ?, ? )",
    [title, genre, picture, fkIdArtist]
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
      case "title":
        sql += " title = ";
        sql += `"${body.title}"`;
        break;
      case "genre":
        sql += " genre = ";
        sql += `"${body.genre}"`;
        break;
      case "picture":
        sql += " picture = ";
        sql += `"${body.picture}"`;
        break;
      case "fkIdArtist":
        sql += " fk_id_artist = ";
        sql += `"${body.fkIdArtist}"`;
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
