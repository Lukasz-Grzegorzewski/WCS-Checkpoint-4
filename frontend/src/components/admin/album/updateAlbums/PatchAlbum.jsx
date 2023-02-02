import axios from "axios";
import React, { useEffect, useState } from "react";

function PatchAlbum() {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState({
    id: null,
    titleAlbum: "",
    genre: "",
    picture: "",
    fkIdArtist: null,
  });

  const [newAlbum, setNewAlbum] = useState({
    titleAlbum: "",
    genre: "",
    picture: "",
    fkIdArtist: null,
  });

  function getAlbums() {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/albums`)
      .then((res) => {
        setAlbums(res.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getAlbums();
  }, []);

  function handleChange(field, value) {
    setNewAlbum({ ...newAlbum, [field]: value });
  }

  function handleSubmit(event, id) {
    event.preventDefault();
    axios
      .patch(`${import.meta.env.VITE_PORT_BACKEND}/albums/${id}`, newAlbum)
      .then(() => {
        console.warn("album updated");
        setNewAlbum({
          titleAlbum: "",
          genre: "",
          picture: "",
          fkIdArtist: null,
        });
        setSelectedAlbum({
          titleAlbum: "",
          genre: "",
          picture: "",
          fkIdArtist: null,
        });
        getAlbums();
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="patch-album">
      {albums.length > 0 && (
        <select
          className="admin-select-albums"
          onChange={(e) => {
            setSelectedAlbum(JSON.parse(e.target.value));
          }}
        >
          <option
            value={JSON.stringify({
              id: null,
              titleAlbum: "",
              genre: "",
              picture: "",
              fkIdArtist: null,
            })}
          >
            choose album
          </option>
          {albums.map((album) => (
            <option
              key={album.id_album}
              value={JSON.stringify({
                id: album.id_album,
                titleAlbum: album.title_album,
                genre: album.genre,
                picture: album.picture,
                fkIdArtist: album.fk_id_artist,
              })}
            >
              {album.title_album}
            </option>
          ))}
        </select>
      )}
      {selectedAlbum.id && (
        <form
          className="form-patch-album"
          onSubmit={(event) => handleSubmit(event, selectedAlbum.id)}
        >
          <input
            className="inp input-patch-titleAlbum-album"
            value={newAlbum.titleAlbum}
            type="text"
            placeholder={selectedAlbum.titleAlbum}
            onChange={(event) => handleChange("titleAlbum", event.target.value)}
          />
          <input
            className="inp input-patch-genre-album"
            value={newAlbum.genre}
            type="text"
            placeholder={selectedAlbum.genre}
            onChange={(event) => handleChange("genre", event.target.value)}
          />
          <input
            className="inp input-patch-picture-album"
            value={newAlbum.picture}
            type="text"
            placeholder={selectedAlbum.picture}
            onChange={(event) => handleChange("picture", event.target.value)}
          />
          <input
            className="inp input-patch-fkIdArtist-album"
            value={newAlbum.fkIdArtist}
            type="text"
            placeholder={selectedAlbum.fkIdArtist}
            onChange={(event) => handleChange("fkIdArtist", event.target.value)}
          />
          <button className="btn-submit btn-navbar" type="button">
            Update
          </button>
        </form>
      )}
    </div>
  );
}

export default PatchAlbum;
