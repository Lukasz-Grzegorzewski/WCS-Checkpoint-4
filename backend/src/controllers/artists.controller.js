const artistsModel = require("../models/artists.model");

const getArtists = (req, res) => {
  artistsModel
    .getArtists()
    .then(([artists]) => res.status(200).send(artists))
    .catch((err) => console.error(err));
};

const getArtistById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  artistsModel
    .getArtistById(id)
    .then(([artist]) => res.status(200).send(artist[0]))
    .catch((err) => console.error(err));
};

const getAlbumsByIdArtist = (req, res) => {
  const id = parseInt(req.params.id, 10);
  artistsModel
    .getAlbumsByIdArtist(id)
    .then(([albums]) => res.status(200).send(albums))
    .catch((err) => console.error(err));
};

const getTracksOfAlbumsByIdArtist = (req, res) => {
  const idArtist = parseInt(req.params.idArtist, 10);
  const idAlbum = parseInt(req.params.idAlbum, 10);

  artistsModel
    .getTracksOfAlbumsByIdArtist(idArtist, idAlbum)
    .then(([tracks]) => res.status(200).send(tracks))
    .catch((err) => console.error(err));
};

const postArtist = (req, res) => {
  const { name, imageUrl } = req.body;

  artistsModel
    .postArtist(name, imageUrl)
    .then(() => {
      return (
        res
          // .location(`/artists/${result.insertId}`)
          .status(201)
          .send({ message: "artist added" })
      );
    })
    .catch((err) => console.warn(err));
};

const patchArtistById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { body } = req;

  const reqBodyKeysArr = Object.keys(req.body);

  artistsModel
    .patchArtistById(id, body, reqBodyKeysArr)
    .then(([result]) => {
      return result.affectedRows === 0
        ? res.status(404).send("artist Not Found")
        : res.sendStatus(204);
    })

    .catch((err) => {
      console.warn(err);
      return res.status(500).send("Error editing an artist");
    });
};

const deleteArtistById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  artistsModel
    .deleteArtistById(id)
    .then(([album]) => {
      return album.affectedRows === 0
        ? res.status(404).send("artist Not Found")
        : res.sendStatus(204);
    })

    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting an artist");
    });
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
