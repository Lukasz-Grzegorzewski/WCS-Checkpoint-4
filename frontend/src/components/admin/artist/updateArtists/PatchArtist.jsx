import axios from "axios";
import { useEffect, useState } from "react";

function PatchArtist() {
  const [artists, setArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState({
    id: null,
    name: "",
    imageUrl: "",
  });

  const [newArtist, setNewArtist] = useState({
    name: "",
    imageUrl: "",
  });

  function getArtists() {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/artists`)
      .then((res) => setArtists(res.data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getArtists();
  }, []);

  function handleChange(field, value) {
    setNewArtist({ ...newArtist, [field]: value });
  }

  function handleSubmit(event, id) {
    event.preventDefault();
    axios
      .patch(`${import.meta.env.VITE_PORT_BACKEND}/artists/${id}`, newArtist)
      .then(() => {
        console.warn("artist updated");
        setNewArtist({
          id: null,
          name: "",
          imageUrl: "",
        });
        setSelectedArtist({
          id: null,
          name: "",
          imageUrl: "",
        });
        getArtists();
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="patch-artist">
      {artists.length > 0 && (
        <select
          className="admin-select-artists"
          onChange={(e) => {
            setSelectedArtist(JSON.parse(e.target.value));
          }}
        >
          <option
            value={JSON.stringify({
              id: null,
              name: "",
              imageUrl: "",
            })}
          >
            choose artist
          </option>
          {artists.map((artist) => (
            <option
              key={artist.id_artist}
              value={JSON.stringify({
                id: artist.id_artist,
                name: artist.name,
                imageUrl: artist.image_url,
              })}
            >
              {artist.name}
            </option>
          ))}
        </select>
      )}
      {selectedArtist.id && (
        <form
          className="form-patch-artist"
          onSubmit={(event) => handleSubmit(event, selectedArtist.id)}
        >
          <input
            className="inp input-patch-name-artist"
            value={newArtist.name}
            type="text"
            placeholder={selectedArtist.name}
            onChange={(event) => handleChange("name", event.target.value)}
          />
          <input
            className="inp input-patch-url-artist"
            value={newArtist.imageUrl}
            type="text"
            placeholder={selectedArtist.imageUrl}
            onChange={(event) => handleChange("imageUrl", event.target.value)}
          />
          <button className="btn-submit btn-navbar" type="button">
            Update
          </button>
        </form>
      )}
    </div>
  );
}

export default PatchArtist;
