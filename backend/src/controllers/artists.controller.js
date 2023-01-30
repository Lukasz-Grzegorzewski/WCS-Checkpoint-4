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

const postArtist = (req, res) => {
  const { name } = req.body;

  artistsModel
    .postArtist(name)
    .then(([result]) => {
      return res
        .location(`/artists/${result.insertId}`)
        .status(201)
        .send({ message: "artist added" });
    })
    .catch((err) => console.warn(err));
};

const patchArtistById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { name } = req.body;

  artistsModel
    .patchArtistById(id, name)
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
  postArtist,
  patchArtistById,
  deleteArtistById,
};
