const express = require("express");

const router = express.Router();

const artistsController = require("./controllers/artists.controller");
const albumsController = require("./controllers/albums.controller");
const tracksController = require("./controllers/tracks.controller");

router.get("/artists", artistsController.getArtists);
router.get("/artists/:id", artistsController.getArtistById);
router.get("/artists/:id/albums", artistsController.getAlbumsByIdArtist);
router.get(
  "/artists/:idArtist/albums/:idAlbum",
  artistsController.getTracksOfAlbumsByIdArtist
);
router.post("/artists", artistsController.postArtist);
router.patch("/artists/:id", artistsController.patchArtistById);
router.delete("/artists/:id", artistsController.deleteArtistById);

router.get("/albums", albumsController.getAlbums);
router.get("/albums/:id", albumsController.getAlbumById);
router.post("/albums", albumsController.postAlbum);
router.patch("/albums/:id", albumsController.patchAlbumById);
router.delete("/albums/:id", albumsController.deleteAlbumById);

router.get("/tracks", tracksController.getTracks);
router.get("/tracks/:id", tracksController.getTrackById);
router.post("/tracks", tracksController.postTrack);
router.patch("/tracks/:id", tracksController.patchTrackById);
router.delete("/tracks/:id", tracksController.deleteTrackById);

module.exports = router;
