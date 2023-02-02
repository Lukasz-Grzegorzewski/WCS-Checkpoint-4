import AdminArtists from "@components/admin/artist/AdminArtists";
import AdminAlbums from "@components/admin/album/AdminAlbums";
import AdminTracks from "@components/admin/track/AdminTracks";
import { useState } from "react";

function Admin() {
  const [toggleArtists, setToggleArtists] = useState(false);
  const [toggleAlbums, setToggleAlbums] = useState(false);
  const [toggleTracks, setToggleTracks] = useState(false);

  function handleClickArtists() {
    setToggleArtists(!toggleArtists);
    setToggleAlbums(false);
    setToggleTracks(false);
  }
  function handleClickAlbums() {
    setToggleArtists(false);
    setToggleAlbums(!toggleAlbums);
    setToggleTracks(false);
  }
  function handleClickTracks() {
    setToggleArtists(false);
    setToggleAlbums(false);
    setToggleTracks(!toggleTracks);
  }

  return (
    <div className="admin">
      <div className="tabs-container">
        <button
          className={
            toggleArtists
              ? "header-title admin-tab-artists active"
              : "header-title admin-tab-artists"
          }
          onClick={() => handleClickArtists()}
          type="button"
        >
          <p>
            UPDATE <br />
            ARTISTS
          </p>
        </button>
        <button
          className={
            toggleAlbums
              ? "header-title admin-tab-albums active"
              : "header-title admin-tab-albums"
          }
          onClick={() => handleClickAlbums()}
          type="button"
        >
          <p>
            UPDATE <br />
            ALBUMS
          </p>
        </button>
        <button
          className={
            toggleTracks
              ? "header-title admin-tab-tracks active"
              : "header-title admin-tab-tracks"
          }
          onClick={() => handleClickTracks()}
          type="button"
        >
          <p>
            UPDATE <br />
            TRACKS
          </p>
        </button>
      </div>
      {(toggleArtists || toggleAlbums || toggleTracks) && (
        <div className="update-container">
          {toggleArtists && <AdminArtists />}
          {toggleAlbums && <AdminAlbums />}
          {toggleTracks && <AdminTracks />}
        </div>
      )}
    </div>
  );
}

export default Admin;
