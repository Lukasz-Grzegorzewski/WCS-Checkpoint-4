const tracksModel = require("../models/tracks.model");

const getTracks = (req, res) => {
  tracksModel
    .getTracks()
    .then(([tracks]) => res.status(200).send(tracks))
    .catch((err) => console.error(err));
};

const getTrackById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  tracksModel
    .getTrackById(id)
    .then(([track]) => res.status(200).send(track[0]))
    .catch((err) => console.error(err));
};

const postTrack = (req, res) => {
  const { titleTrack, youtubeUrl, fkIdAlbum } = req.body;

  tracksModel
    .postTrack(titleTrack, youtubeUrl, fkIdAlbum)
    .then(([result]) => {
      return res
        .location(`/tracks/${result.insertId}`)
        .status(201)
        .send({ message: "track added" });
    })
    .catch((err) => console.warn(err));
};

const patchTrackById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  const { body } = req;

  const reqBodyKeysArr = Object.keys(req.body);

  tracksModel
    .patchTrackById(id, reqBodyKeysArr, body)
    .then(([result]) => {
      return result.affectedRows === 0
        ? res.status(404).send("track Not Found")
        : res.sendStatus(204);
    })

    .catch((err) => {
      console.warn(err);
      return res.status(500).send("Error editing a track");
    });
};

const deleteTrackById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  tracksModel
    .deleteTrackById(id)
    .then(([result]) => {
      return result.affectedRows === 0
        ? res.status(404).send("track Not Found")
        : res.sendStatus(204);
    })

    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting a track");
    });
};

module.exports = {
  getTracks,
  getTrackById,
  postTrack,
  patchTrackById,
  deleteTrackById,
};
