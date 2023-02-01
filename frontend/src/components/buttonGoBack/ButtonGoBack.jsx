import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonGoBack() {
  const navigate = useNavigate();

  function handleGoBackClick() {
    navigate(-1);
  }

  return (
    <div className="button-go-back">
      <button
        className="button-go-back-btn"
        onClick={() => handleGoBackClick()}
        type="button"
      >
        <svg
          className="button-go-back-btn-svg"
          width="79"
          height="29"
          viewBox="0 0 79 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="15" width="29" height="5" rx="2.5" fill="#555555" />
          <rect
            y="15.5"
            width="17.9985"
            height="5"
            rx="2.5"
            transform="rotate(-30 0 15.5)"
            fill="#555555"
          />
          <rect
            x="2.5"
            y="15"
            width="17.9985"
            height="5"
            rx="2.5"
            transform="rotate(30 2.5 15)"
            fill="#555555"
          />
          <path
            d="M25.58 8.73H23.648V7.61H26.7V11.46L25.244 13H21.576L20.12 11.46V4.04L21.576 2.5H25.244L26.7 4.04V5.804H25.58V4.614L24.698 3.704H22.136L21.408 4.446V11.054L22.122 11.796H24.684L25.58 10.886V8.73ZM30.2576 13L28.8016 11.46V4.04L30.2576 2.5H34.2056L35.6616 4.04V11.46L34.2056 13H30.2576ZM30.8036 11.796H33.6456L34.3736 11.054V4.446L33.6596 3.704H30.8176L30.0896 4.446V11.054L30.8036 11.796ZM42.8016 2.5H48.4016L49.8576 4.04V6.56L49.1016 7.358L50.1376 8.436V11.46L48.6816 13H42.8016V11.88H43.7816V3.62H42.8016V2.5ZM45.0696 8.016V11.796H48.1216L48.9336 10.97V8.926L48.0516 8.016H45.0696ZM45.0696 3.704V6.896H47.8416L48.6536 6.07V4.53L47.8556 3.704H45.0696ZM53.982 2.5H57.72V3.62H57.076L59.54 11.88H60.24V13H57.272V11.88H58.252L57.608 9.724H54.094L53.45 11.88H54.43V13H51.462V11.88H52.162L54.626 3.62H53.982V2.5ZM55.844 3.83L54.43 8.604H57.272L55.844 3.83ZM66.8931 9.696H68.0131V11.46L66.5571 13H63.0291L61.5731 11.46V4.04L63.0291 2.5H66.5571L68.0131 4.04V5.804H66.8931V4.614L66.0111 3.704H63.5891L62.8611 4.446V11.054L63.5751 11.796H65.9971L66.8931 10.886V9.696ZM77.9337 13H74.9657V11.88H75.7777L73.5097 8.31H72.2357V11.88H73.2157V13H69.9677V11.88H70.9477V3.62H69.9677V2.5H73.2157V3.62H72.2357V7.19H73.4117L75.6517 3.62H74.8257V2.5H77.7937V3.62H77.0937L74.5457 7.666L77.2197 11.88H77.9337V13Z"
            fill="#555555"
          />
        </svg>
      </button>
    </div>
  );
}

export default ButtonGoBack;
