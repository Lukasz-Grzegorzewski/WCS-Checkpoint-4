import ButtonGoBack from "@components/buttonGoBack/ButtonGoBack";
import TrackCard from "@components/Track/TrackCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ArtistAlbumTracks() {
  const [tracks, setTracks] = useState([]);
  const [toggleCard, setToggleCard] = useState(false);
  const [track, setTrack] = useState(null);

  const { idArtist, idAlbums } = useParams();

  function handleTrackClick(trk) {
    setToggleCard(true);
    setTrack(trk);
  }

  function getTracks() {
    axios
      .get(
        `${
          import.meta.env.VITE_PORT_BACKEND
        }/artists/${idArtist}/albums/${idAlbums}`
      )
      .then((res) => {
        setTracks(res.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getTracks();
  }, []);

  return (
    <div
      className={
        toggleCard ? "artist-album-tracks faded" : "artist-album-tracks"
      }
    >
      {track && toggleCard && (
        <TrackCard
          track={track}
          url={track.youtube_url.split("v=")[1]}
          //   getTracks={() => getTracks()}
          setToggleCard={() => setToggleCard()}
        />
      )}
      <div className="artist-album-tracks-all">
        <div className="artist-album-tracks-all-button-go-back">
          <ButtonGoBack />
        </div>
        {tracks.length > 0 && (
          <div className="artist-album-tracks-title">
            {tracks[0].name} tracks
          </div>
        )}
        <div className="artist-album-tracks-cards">
          {tracks.length > 0 &&
            tracks.map((trk) => (
              <button
                key={trk.track}
                className="artist-album-tracks-cards-card"
                onClick={() => handleTrackClick(trk)}
                type="button"
              >
                <p className="artist-album-tracks-cards-card-desc-title-track">
                  {trk.title_track}
                </p>
                <div className="artist-album-tracks-cards-card-desc">
                  <p className="artist-album-tracks-cards-card-desc-title-album">
                    Album : {trk.title_album}
                  </p>
                  <p className="artist-album-tracks-cards-card-desc-title-artist">
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

export default ArtistAlbumTracks;
