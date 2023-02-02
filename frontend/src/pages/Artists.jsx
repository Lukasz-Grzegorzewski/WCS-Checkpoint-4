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
      <h1 className="header-title title-artists-container">ALL ARTISTS</h1>
      <div className="cards">
        {artists.length > 0 &&
          artists.map((artist) => (
            <NavLink
              key={artist.id_artist}
              className="card card-artist"
              to={`/artists/${artist.id_artist}`}
            >
              <img
                className="img-card img-artist"
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
