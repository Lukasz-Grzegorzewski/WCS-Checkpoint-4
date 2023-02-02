import { useState } from "react";
import AddArtist from "./updateArtists/AddArtist";
import DeleteArtist from "./updateArtists/DeleteArtist";
import PatchArtist from "./updateArtists/PatchArtist";

function Artists() {
  const [toggleAddArtist, setToggleAddArtist] = useState(false);
  const [toggleUpdateArtist, setToggleUpdateArtist] = useState(false);
  const [toggleDeleteArtist, setToggleDeleteArtist] = useState(false);

  function handleClickAddArtist() {
    setToggleAddArtist(!toggleAddArtist);
    setToggleUpdateArtist(false);
    setToggleDeleteArtist(false);
  }
  function handleClickUpdateArtist() {
    setToggleAddArtist(false);
    setToggleUpdateArtist(!toggleUpdateArtist);
    setToggleDeleteArtist(false);
  }
  function handleClickDeleteArtist() {
    setToggleAddArtist(false);
    setToggleUpdateArtist(false);
    setToggleDeleteArtist(!toggleDeleteArtist);
  }

  return (
    <div className="admin-artists">
      <div className="update-tabs-artists-container">
        <button
          className={
            toggleAddArtist
              ? "header-title admin-update-tab-add-artists active"
              : "header-title admin-update-tab-artists"
          }
          onClick={() => handleClickAddArtist()}
          type="button"
        >
          <p>
            ADD <br />
            ARTIST
          </p>
        </button>
        <button
          className={
            toggleUpdateArtist
              ? "header-title admin-update-tab-update-artist active"
              : "header-title admin-update-tab-update-artist"
          }
          onClick={() => handleClickUpdateArtist()}
          type="button"
        >
          <p>
            UPDATE <br />
            ARTIST
          </p>
        </button>
        <button
          className={
            toggleDeleteArtist
              ? "header-title admin-update-tab-delete-artist active"
              : "header-title admin-update-tab-delete-artist"
          }
          onClick={() => handleClickDeleteArtist()}
          type="button"
        >
          <p>
            DELETE <br />
            ARTIST
          </p>
        </button>
      </div>
      <div className="admin-update-artists-container">
        {toggleAddArtist && <AddArtist />}
        {toggleUpdateArtist && <PatchArtist />}
        {toggleDeleteArtist && <DeleteArtist />}
      </div>
    </div>
  );
}

export default Artists;
