import axios from "axios";
import React, { useEffect, useState } from "react";

function AddAlbum() {
  const [artists, setArtists] = useState([]);
  const [newAlbum, setNewAlbum] = useState({
    titleAlbum: "",
    genre: "",
    picture: "",
    fkIdArtist: null,
  });

  function handleChange(field, value) {
    if (value) setNewAlbum({ ...newAlbum, [field]: value });
  }
  //   function handlefkIdArtistChange(field, value) {
  //     setNewAlbum({ ...newAlbum, [field]: value });
  //   }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post(`${import.meta.env.VITE_PORT_BACKEND}/albums`, newAlbum)
      .then(() => {
        console.warn("album added");
        setNewAlbum({
          titleAlbum: "",
          genre: "",
          picture: "",
          fkIdArtist: null,
        });
        const arr = Array.from(document.querySelectorAll("input"));

        for (let i = 0; i < arr.length; i += 1) {
          arr[i].value = "";
        }
      })
      .catch((err) => console.error(err));
  }

  function getArtists() {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/artists`)
      .then((res) => {
        setArtists(res.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getArtists();
  }, []);

  return (
    <div className="add-album">
      <form
        className="form-add-album"
        onSubmit={(event) => handleSubmit(event)}
      >
        <input
          className="inp input-add-titleAlbum-album"
          value={newAlbum.titleAlbum}
          type="text"
          placeholder="name of a new album"
          onChange={(event) => handleChange("titleAlbum", event.target.value)}
        />
        <input
          className="inp input-add-genre-album"
          value={newAlbum.genre}
          type="text"
          placeholder="genre of a new album"
          onChange={(event) => handleChange("genre", event.target.value)}
        />
        <input
          className="inp input-add-picture-url-album"
          value={newAlbum.picture}
          type="text"
          placeholder="image url of a new album"
          onChange={(event) => handleChange("picture", event.target.value)}
        />
        {artists.length > 0 && (
          <select
            className="admin-select-album"
            onChange={(e) => handleChange("fkIdArtist", e.target.value)}
          >
            <option value="">...</option>
            {artists.map((artist) => (
              <option value={artist.id_artist}>{artist.name}</option>
            ))}
          </select>
        )}
        <button className="btn-submit btn-navbar" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddAlbum;
