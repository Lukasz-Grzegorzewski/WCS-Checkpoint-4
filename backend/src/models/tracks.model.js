const db = require("../../DB");

const getTracks = () => {
  return db.query(
    " SELECT * FROM track INNER JOIN album ON track.fk_id_album = album.id_album INNER JOIN artist ON album.fk_id_artist = artist.id_artist;"
  );
};

const getTrackById = (id) => {
  return db.query("SELECT * FROM track WHERE id_track = ?", [id]);
};

const postTrack = (titleTrack, youtubeUrl, fkIdAlbum) => {
  return db.query(
    "INSERT INTO track( title_track, youtube_url, fk_id_album ) VALUES ( ?, ?, ? )",
    [titleTrack, youtubeUrl, fkIdAlbum]
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
      case "title_track":
        sql += " title_track = ";
        sql += `"${body.titleTrack} "`;
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
