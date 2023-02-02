import ButtonGoBack from "@components/buttonGoBack/ButtonGoBack";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

function ArtistAlbums() {
  const [albumsByArtist, setAlbumsByArtist] = useState([]);

  const { idArtist } = useParams();

  function getAlbumsByArtistId(id) {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/artists/${id}/albums`)
      .then((res) => {
        setAlbumsByArtist(res.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getAlbumsByArtistId(idArtist);
  }, []);

  return (
    <div className="artist-albums">
      <ButtonGoBack />
      {albumsByArtist.length > 0 && (
        <h1 className="header-title artist-albums-title">
          {albumsByArtist[0].name} <br /> albums
        </h1>
      )}
      <div className="artist-albums-cards">
        {albumsByArtist.length > 0 &&
          albumsByArtist.map((album) => (
            <NavLink
              key={album.id_album}
              className="card artist-albums-cards-card"
              to={`/artists/${album.id_artist}/albums/${album.id_album}`}
            >
              <img
                className="artist-albums-cards-card-img img-card"
                src={album.picture}
                alt="logo of an album"
              />
              <div className="card-desc artist-albums-cards-card-desc">
                <h2 className="card-album artist-albums-cards-card-title-album">
                  {album.title_album}
                </h2>
                <h2 className="card-artist artist-albums-cards-card-title-artist">
                  {album.name}
                </h2>
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  );
}

export default ArtistAlbums;
