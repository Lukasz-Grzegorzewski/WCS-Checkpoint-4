import axios from "axios";
import React, { useState } from "react";

function AddArtist() {
  const [newArtist, setNewArtistName] = useState({
    name: "",
    imageUrl: "",
  });

  function handleChange(field, value) {
    setNewArtistName({ ...newArtist, [field]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_PORT_BACKEND}/artists`, newArtist)
      .then(() => {
        console.warn("artist added");
        // Array.from(document.querySelectorAll("input")).forEach(
        //   (input.value = "")
        // );
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="add-artist">
      <form
        className="form-add-artist"
        onSubmit={(event) => handleSubmit(event)}
      >
        <input
          className="inp input-add-name-artist"
          value={newArtist.name}
          type="text"
          placeholder="name of a new artist"
          onChange={(event) => handleChange("name", event.target.value)}
        />
        <input
          className="inp input-add-url-artist"
          value={newArtist.image_url}
          type="text"
          placeholder="image url of a new artist"
          onChange={(event) => handleChange("imageUrl", event.target.value)}
        />
        <button className="btn-submit btn-navbar" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddArtist;
