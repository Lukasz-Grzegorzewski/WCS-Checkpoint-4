import axios from "axios";
import React, { useEffect, useState } from "react";

function DeleteArtist() {
  const [artists, setArtists] = useState([]);
  const [selectedArtistId, setSelectedArtistId] = useState();

  function getArtists() {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/artists`)
      .then((res) => setArtists(res.data))
      .catch((err) => console.error(err));
  }

  function handleDeleteClick(id) {
    axios
      .delete(`${import.meta.env.VITE_PORT_BACKEND}/artists/${id}`)
      .then(() => {
        console.warn("artist deleted");
        getArtists();
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getArtists();
  }, []);

  return (
    <div className="delete-artist">
      {artists.length > 0 && (
        <select
          className="admin-select-artists"
          onChange={(e) => {
            setSelectedArtistId(e.target.value);
          }}
        >
          <option value="">choose artist</option>
          {artists.map((artist) => (
            <option key={artist.id_artist} value={artist.id_artist}>
              {artist.name}
            </option>
          ))}
        </select>
      )}
      {selectedArtistId && (
        <button
          className="btn-submit btn-navbar"
          onClick={() => handleDeleteClick(selectedArtistId)}
          type="submit"
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default DeleteArtist;
