const db = require("../../DB");

const getTracks = () => {
  return db.query("SELECT * FROM track");
};

const getTrackById = (id) => {
  console.warn("lala");
  return db.query("SELECT * FROM track WHERE id_track = ?", [id]);
};

const postTrack = (title, youtubeUrl, fkIdAlbum) => {
  return db.query(
    "INSERT INTO track( title, youtube_url, fk_id_album ) VALUES ( ?, ?, ? )",
    [title, youtubeUrl, fkIdAlbum]
  );
};

const patchTrackById = (id, reqBodyKeysArr, body) => {
  let sql = "UPDATE track SET";

  if (!reqBodyKeysArr) return console.warn("no body to patch a track");

  reqBodyKeysArr.forEach((item, index) => {
    if (index > 0) {
      sql += ",";
    }

    switch (item) {
      case "title":
        sql += " title = ";
        sql += `"${body.title} "`;
        break;
      case "youtubeUrl":
        sql += " youtube_url = ";
        sql += `"${body.youtubeUrl} "`;
        break;
      case "fkIdArtist":
        sql += " fk_id_album = ";
        sql += `"${body.fkIdAlbum} "`;
        break;
      default:
        break;
    }
  });
  sql += " WHERE id_track = ?;";

  return db.query(sql, [id]);
};

const deleteTrackById = (id) => {
  return db.query("DELETE FROM track WHERE id_track = ?", [id]);
};

module.exports = {
  getTracks,
  getTrackById,
  postTrack,
  patchTrackById,
  deleteTrackById,
};
