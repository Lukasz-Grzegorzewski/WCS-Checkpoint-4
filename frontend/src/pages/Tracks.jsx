import ButtonGoBack from "@components/buttonGoBack/ButtonGoBack";
import TrackCard from "@components/Track/TrackCard";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Tracks() {
  const [tracks, setTracks] = useState([]);
  const [toggleCard, setToggleCard] = useState(false);
  const [track, setTrack] = useState(null);

  function handleTrackClick(trk) {
    setToggleCard(true);
    setTrack(trk);
  }

  function getTracks() {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/tracks`)
      .then((res) => {
        setTracks(res.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getTracks();
  }, []);

  return (
    <div className={toggleCard ? "tracks faded" : "tracks"}>
      {track && toggleCard && (
        <TrackCard
          track={track}
          setToggleCard={() => setToggleCard()}
          url={track.youtube_url.split("v=")[1]}
        />
      )}
      <div className="tracks-all">
        <ButtonGoBack />
        <h1 className="header-title tracks-title">ALL TRACKS</h1>
        <div className="tracks-cards">
          {tracks.length > 0 &&
            tracks.map((trk) => (
              <button
                key={trk.id_track}
                className="card tracks-cards-card"
                onClick={() => handleTrackClick(trk)}
                type="button"
              >
                <p className="title-track tracks-cards-card-desc-title-track">
                  {trk.title_track}
                </p>
                <div className="desc tracks-cards-card-desc">
                  <p className="desc-album tracks-cards-card-desc-title-album">
                    Album : {trk.title_album}
                  </p>
                  <p className="desc-artist tracks-cards-card-desc-title-artist">
                    Artist : {trk.name}
                  </p>
                </div>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Tracks;
