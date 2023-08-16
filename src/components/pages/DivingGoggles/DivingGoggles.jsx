import React, { useRef, useState } from "react";
import backgroundOceanVision from "../../../assets/images/backgroundOceanVision.png";
import Pause from "../../../assets/icons/Pause";
import Start from "../../../assets/icons/Start";
import "./DivingGoggles.css";
import NavBar from "../../NavBar/NavBar";

const DivingGoggles = () => {
  const video = useRef(null);
  const videos = [
    "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/video-in-goggles-laginha2.mp4?alt=media&token=5c8c50a1-3262-49de-b3c6-b07d7977b73f",
    "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/video-in-goggles-baia2.mp4?alt=media&token=e8eb6148-eb2d-4556-98e2-c8f84a0e977d",
    "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/video-in-goggles-sao-pedro2.mp4?alt=media&token=e240e5e6-82dd-4575-8845-12a09c00d416",
  ];
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [videoIndex, setVideoIndex] = useState(0);

  function togglePlayVideo() {
    if (isVideoPlaying) {
      video.current.pause();
      setIsVideoPlaying(false);
      return;
    }
    video.current.play();
    setIsVideoPlaying(true);
  }
  function changeVideo(videoIndex) {
    setVideoIndex(videoIndex);
    video.current.src = videos[videoIndex];
    togglePlayVideo();
  }

  return (
    <div className="diving-goggles-container">
      <NavBar/>
      <img
        src={backgroundOceanVision}
        alt="background"
        className="background-ocean-vision"
      />
      <video
        ref={video}
        className="video-in-goggles"
        autoPlay
        muted
        onEnded={togglePlayVideo}
      >
        <source src={videos[videoIndex]}></source>
      </video>
      <p className="punch-line">Conetando voce ao oceano...</p>
      <div className="control-list">
        <button className="video-control" onClick={togglePlayVideo}>
          {isVideoPlaying ? <Pause /> : <Start />}
        </button>
        <div
          className={isVideoPlaying ? "location-list-hidden" : "location-list"}
        >
          <button
            id="button-first"
            className={
              videoIndex === 0 ? "location-button-active" : "location-button"
            }
            onClick={() => changeVideo(0)}
          >
            Laginha
          </button>
          <button
            className={
              videoIndex === 1 ? "location-button-active" : "location-button"
            }
            onClick={() => changeVideo(1)}
          >
            Baia das Gatas
          </button>
          <button
            id="button-last"
            className={
              videoIndex === 2 ? "location-button-active" : "location-button"
            }
            onClick={() => changeVideo(2)}
          >
            São Pedro
          </button>
        </div>
      </div>
    </div>
  );
};

export default DivingGoggles;
