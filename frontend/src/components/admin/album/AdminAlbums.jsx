import { useState } from "react";
import AddAlbum from "./updateAlbums/AddAlbum";
import DeleteAlbum from "./updateAlbums/DeleteAlbum";
import PatchAlbum from "./updateAlbums/PatchAlbum";

function Albums() {
  const [toggleAddAlbum, setToggleAddAlbum] = useState(false);
  const [toggleUpdateAlbum, setToggleUpdateAlbum] = useState(false);
  const [toggleDeleteAlbum, setToggleDeleteAlbum] = useState(false);

  function handleClickAddAlbum() {
    setToggleAddAlbum(!toggleAddAlbum);
    setToggleUpdateAlbum(false);
    setToggleDeleteAlbum(false);
  }
  function handleClickUpdateAlbum() {
    setToggleAddAlbum(false);
    setToggleUpdateAlbum(!toggleUpdateAlbum);
    setToggleDeleteAlbum(false);
  }
  function handleClickDeleteAlbum() {
    setToggleAddAlbum(false);
    setToggleUpdateAlbum(false);
    setToggleDeleteAlbum(!toggleDeleteAlbum);
  }

  return (
    <div className="admin-albums">
      <div className="update-tabs-albums-container">
        <button
          className={
            toggleAddAlbum
              ? "header-title admin-update-tab-add-albums active"
              : "header-title admin-update-tab-add-albums"
          }
          onClick={() => handleClickAddAlbum()}
          type="button"
        >
          <p>
            ADD <br />
            ALBUM
          </p>
        </button>
        <button
          className={
            toggleUpdateAlbum
              ? "header-title admin-update-tab-update-albums active"
              : "header-title admin-update-tab-update-albums"
          }
          onClick={() => handleClickUpdateAlbum()}
          type="button"
        >
          <p>
            UPDATE <br />
            ALBUM
          </p>
        </button>
        <button
          className={
            toggleDeleteAlbum
              ? "header-title admin-update-tab-delete-albums active"
              : "header-title admin-update-tab-delete-albums"
          }
          onClick={() => handleClickDeleteAlbum()}
          type="button"
        >
          <p>
            DELETE <br />
            ALBUM
          </p>
        </button>
      </div>
      <div className="admin-update-albums-container">
        {toggleAddAlbum && <AddAlbum />}
        {toggleUpdateAlbum && <PatchAlbum />}
        {toggleDeleteAlbum && <DeleteAlbum />}
      </div>
    </div>
  );
}

export default Albums;
