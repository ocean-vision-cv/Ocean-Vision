import React, { useRef, useState } from "react";
import Pause from "../../assets/icons/Pause";
import Start from "../../assets/icons/Start";
import DivingGoggles from "../../assets/images/dive-glass.png";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/pages/Footer/Footer";
import GalleryPreviewer from "../../components/pages/GalleryPreviewer/GalleryPreviewer";
import Home from "../../components/pages/Home/Home";
import Powers from "../../components/pages/Powers/Powers";
import Previewer360 from "../../components/pages/Previewer360/Previewer360";
import Team from "../../components/pages/Team/Team";
import "./Landing.css";

const Landing = () => {
  const video = useRef(null);
  const videos = [
    "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/video-in-goggles-laginha.mp4?alt=media&token=4502d029-429f-4a72-be56-7661cf95e413",
    "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/video-in-goggles-baia.mp4?alt=media&token=4ce0b32d-0040-4adf-9fba-ae6fc86de4ea",
    "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/video-in-goggles-sao-pedro.mp4?alt=media&token=7cf3f765-1e43-4f63-9510-b6909c3c44d1",
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
    <div className="landing-page">
      <NavBar />
      <div className="landing-top">
        <div className="punch-line-container">
          <p className="punch-line">Conecta-se ao oceano com um clique</p>
        </div>
        <div className="diving-goggles-container">
          <div className="diving-goggles-box">
            <video
              ref={video}
              className="video-in-goggles"
              autoPlay
              muted
              onEnded={togglePlayVideo}
            >
              <source src="https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/video-in-goggles-laginha.mp4?alt=media&token=4502d029-429f-4a72-be56-7661cf95e413"></source>
            </video>

            <img
              src={DivingGoggles}
              alt="diving-goggles"
              className="diving-goggles"
            />
          </div>
          <div className="control-list">
            <button className="video-control" onClick={togglePlayVideo}>
              {isVideoPlaying ? <Pause /> : <Start />}
            </button>
            <div
              className={
                isVideoPlaying ? "location-list-hidden" : "location-list"
              }
            >
              <button
                className={
                  videoIndex === 0
                    ? "location-button-active"
                    : "location-button"
                }
                onClick={() => changeVideo(0)}
              >
                Laginha
              </button>
              <button
                className={
                  videoIndex === 1
                    ? "location-button-active"
                    : "location-button"
                }
                onClick={() => changeVideo(1)}
              >
                Baia das Gatas
              </button>
              <button
                className={
                  videoIndex === 2
                    ? "location-button-active"
                    : "location-button"
                }
                onClick={() => changeVideo(2)}
              >
                São Pedro
              </button>
            </div>
          </div>
        </div>
      </div>
      <Home />
      <Powers />
      <Previewer360 />
      <Team />
      <GalleryPreviewer />
      <Footer />
    </div>
  );
};

export default Landing;
