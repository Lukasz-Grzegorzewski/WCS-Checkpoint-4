import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Artists() {
  const [artists, setArtists] = useState([]);

  function getAllArtists() {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/artists`)
      .then((res) => {
        setArtists(res.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getAllArtists();
  }, []);

  return (
    <div className="artists">
      <div className="title-artists-container">
        <h1 className="title-artists">ALL ARTISTS</h1>
      </div>
      <div className="cards">
        {artists.length > 0 &&
          artists.map((artist) => (
            <NavLink
              key={artist.id_artist}
              className="card-artist"
              to={`/artists/${artist.id_artist}`}
            >
              <img
                className="img-artist"
                src={artist.image_url}
                alt="logo of an artist"
              />
              <h2 className="title-artist">{artist.name}</h2>
            </NavLink>
          ))}
      </div>
    </div>
  );
}

export default Artists;
