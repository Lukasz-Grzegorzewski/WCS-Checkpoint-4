const albumsModel = require("../models/albums.model");

const getAlbums = (req, res) => {
  albumsModel
    .getAlbums()
    .then(([albums]) => res.status(200).send(albums))
    .catch((err) => console.error(err));
};

const getAlbumById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  albumsModel
    .getAlbumById(id)
    .then(([album]) => res.status(200).send(album[0]))
    .catch((err) => console.error(err));
};

const postAlbum = (req, res) => {
  const { title, genre, picture, fkIdArtist } = req.body;

  albumsModel
    .postAlbum(title, genre, picture, fkIdArtist)
    .then(([result]) => {
      return res
        .location(`/albums/${result.insertId}`)
        .status(201)
        .send({ message: "album added" });
    })
    .catch((err) => console.warn(err));
};

const patchAlbumById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  const { body } = req;

  const reqBodyKeysArr = Object.keys(req.body);

  albumsModel
    .patchAlbumById(id, reqBodyKeysArr, body)
    .then(([result]) => {
      return result.affectedRows === 0
        ? res.status(404).send("album Not Found")
        : res.sendStatus(204);
    })

    .catch((err) => {
      console.warn(err);
      return res.status(500).send("Error editing an album");
    });
};

const deleteAlbumById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  albumsModel
    .deleteAlbum(id)
    .then(([album]) => {
      return album.affectedRows === 0
        ? res.status(404).send("album Not Found")
        : res.sendStatus(204);
    })

    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting an album");
    });
};

module.exports = {
  getAlbums,
  getAlbumById,
  postAlbum,
  patchAlbumById,
  deleteAlbumById,
};
