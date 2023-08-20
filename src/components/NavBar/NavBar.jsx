import React from "react";
import OceanVisionLogo from "../../assets/icons/OceanVisionLogo";
import LanguageSelector from "../LanguagesSelector/LanguagesSelector";
import Instagram2 from "../../assets/icons/Instagram2";
import YouTube from "../../assets/icons/YouTube";
import Facebook2 from "../../assets/icons/Facebook2";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <OceanVisionLogo />
      <div className="social-mideia-links">
        <a href="https://www.facebook.com/profile.php?id=100088434805718" ><Facebook2/></a> 
        <a href="https://www.instagram.com/ocean_vision_cv" ><Instagram2/></a> 
        <a href="https://www.youtube.com/@HorizonteAzulCaboVerde" ><YouTube/></a> 
      </div>
      
      
      
      <LanguageSelector />
    </nav>
  );
};

export default NavBar;
