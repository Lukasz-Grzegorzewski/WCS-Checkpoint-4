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
      <div className="albums-title">ALL ALBUMS</div>
      <div className="albums-cards">
        {albums.length > 0 &&
          albums.map((album) => (
            <NavLink
              className="albums-cards-card"
              to={`/artists/${album.id_artist}/albums/${album.id_album}`}
            >
              <img
                className="albums-cards-card-img"
                src={album.picture}
                alt="logo of an album"
              />
              <div className="albums-cards-card-desc">
                <h2 className="albums-cards-card-desc-title-album">
                  {album.title_album}
                </h2>
                <h2 className="albums-cards-card-desc-title-artist">
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
