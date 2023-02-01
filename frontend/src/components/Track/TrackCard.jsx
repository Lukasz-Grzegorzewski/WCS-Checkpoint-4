import PropTypes from "prop-types";

function TrackCard({ track, setToggleCard, url }) {
  function handleCloseClick() {
    setToggleCard(false);
  }

  return (
    <div className="track-card">
      <button
        className="track-card-btn"
        onClick={() => handleCloseClick()}
        type="button"
      >
        <svg
          className="track-card-btn-svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3.2218"
            y="0.393372"
            width="26"
            height="4"
            transform="rotate(45 3.2218 0.393372)"
            fill="black"
          />
          <rect
            x="21.6066"
            y="3.2218"
            width="26"
            height="4"
            transform="rotate(135 21.6066 3.2218)"
            fill="black"
          />
        </svg>
      </button>
      {track && (
        <div className="tracks-card-box">
          <iframe
            className="tracks-card-box-iframe"
            width="80%"
            height="80%"
            src={`https://www.youtube.com/embed/${url}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <div className="tracks-card-box-desc">
            <h2 className="tracks-card-box-desc-title">{track.title_track}</h2>
            <div className="tracks-card-box-desc-description">
              <p className="tracks-card-card-desc-description-title-album">
                Album : {track.title_album}
              </p>
              <p className="tracks-card-card-desc-description-title-artist">
                Artist : {track.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TrackCard;

TrackCard.propTypes = {
  track: PropTypes.arrayOf(
    PropTypes.shape({
      fk_id_album: PropTypes.number.isRequired,
      fk_id_artist: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      id_album: PropTypes.number.isRequired,
      id_artist: PropTypes.number.isRequired,
      id_track: PropTypes.number.isRequired,
      image_url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      title_album: PropTypes.string.isRequired,
      title_track: PropTypes.string.isRequired,
      youtube_url: PropTypes.string.isRequired,
    })
  ).isRequired,
  url: PropTypes.string.isRequired,
  setToggleCard: PropTypes.func.isRequired,
};
