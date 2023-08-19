import React from "react";
import DivingGoggles from "../../components/pages/DivingGoggles/DivingGoggles";
import Footer from "../../components/pages/Footer/Footer";
import GalleryPreviewer from "../../components/pages/GalleryPreviewer/GalleryPreviewer";
import Home from "../../components/pages/Home/Home";
import Previewer360 from "../../components/pages/Previewer360/Previewer360";
import Team from "../../components/pages/Team/Team";
import Partnerships from "../../components/pages/Partnerships/Partnerships";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-page" id="landing">
      <DivingGoggles />
      <Home />
      <Previewer360 />
      <Team />
      <GalleryPreviewer />
      <Partnerships/>
      <Footer />
    </div>
  );
};

export default Landing;
