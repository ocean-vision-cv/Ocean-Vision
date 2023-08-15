import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import DivingGoggles from "../../components/pages/DivingGoggles/DivingGoggles";
import Footer from "../../components/pages/Footer/Footer";
import GalleryPreviewer from "../../components/pages/GalleryPreviewer/GalleryPreviewer";
import Home from "../../components/pages/Home/Home";
import Powers from "../../components/pages/Powers/Powers";
import Previewer360 from "../../components/pages/Previewer360/Previewer360";
import Team from "../../components/pages/Team/Team";
import "./Landing.css";
const Landing = () => {
  return (
    <div className="landing-page">
      <NavBar />
      <DivingGoggles />
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
