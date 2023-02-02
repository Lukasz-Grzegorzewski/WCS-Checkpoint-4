import ButtonGoBack from "@components/buttonGoBack/ButtonGoBack";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Albums() {
  const [albums, setAlbums] = useState([]);

  function getAlbums() {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/albums/`)
      .then((res) => {
        setAlbums(res.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <div className="albums">
      <ButtonGoBack />
      <h1 className="header-title albums-title">ALL ALBUMS</h1>
      <div className="albums-cards">
        {albums.length > 0 &&
          albums.map((album) => (
            <NavLink
              key={album.id_album}
              className="card albums-cards-card"
              to={`/artists/${album.id_artist}/albums/${album.id_album}`}
            >
              <img
                className="albums-cards-card-img img-card"
                src={album.picture}
                alt="logo of an album"
              />
              <div className="card-desc albums-cards-card-desc">
                <h2 className="card-album albums-cards-card-desc-title-album">
                  {album.title_album}
                </h2>
                <h2 className="card-artist albums-cards-card-desc-title-artist">
                  {album.name}
                </h2>
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  );
}

export default Albums;
