import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Previewer360.css";

const Previewer360 = () => {
  const { t } = useTranslation();
  const videoLink =
    "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/video360.mp4?alt=media&token=353c85b4-ccaa-4ed5-b0ac-63c0c4fdbeed";
  const navigate = useNavigate();

  const video = useRef(null);

  function PlayVideo() {
    video.current.play();
  }

  function redirectView360() {
    navigate("/360");
  }

  return (
    <section className="previewer">
      <div className="overly-color">
        <p className="previewer-punch-line">{t("previewer360-punch-line")}</p>
        <button className="previewer-button" onClick={redirectView360}>
          {t("previewer360-button")}
        </button>
      </div>

      <div className="custom-shape-divider-top-1692195853">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          ></path>
        </svg>
      </div>
      <video
        ref={video}
        className="video-360"
        autoPlay
        muted
        onEnded={PlayVideo}
      >
        <source src={videoLink}></source>
      </video>
      <div className="custom-shape-divider-bottom-1692196263">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Previewer360;
