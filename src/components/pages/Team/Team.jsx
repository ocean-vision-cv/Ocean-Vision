import React from "react";
import "./Team.css";
import Vitoria from "../../../assets/images/VitoriaAnthony.jpg";
import Nuno from "../../../assets/images/NunoLima.jpg";
import Elida from "../../../assets/images/ElidaPio.jpg";
import William from "../../../assets/images/WilliamBaleno.jpg";
import ProfilePosition from "../../../assets/images/ProfilePosition.png";
import ComputerEngineering from "../../../assets/images/ComputerEngineering.png";
import Biology from "../../../assets/images/Biology.png";

const Team = () => {
  return (
    <section className="team-page">
      <p className="team-page-title">Equipa da Ocean Vision</p>
      <div className="team-container">
        <div className="profile">
          <div className="profile-image">
            <img src={Vitoria} alt="vitoria" />
          </div>
          <div className="profile-description">
            <p className="profile-position">
              <img
                className="profile-icon"
                src={ProfilePosition}
                alt="position"
              />
              CEO
            </p>
            <p className="profile-name">Vitória Anthony</p>
            <p className="profile-education">Engenharia Informática e Telecomunicações</p>
          </div>
        </div>
        <div className="profile">
          <div className="profile-image">
            <img src={Nuno} alt=">Nuno" />
          </div>
          <div className="profile-description">
            <p className="profile-position">
              <img
                className="profile-icon"
                src={ProfilePosition}
                alt="position"
              />
              CTO
            </p>
            <p className="profile-name">Nuno Lima</p>
            <p className="profile-education">Engenharia Informática e Telecomunicações</p>
          </div>
        </div>
      </div>
      <div className="team-container">
        <div className="profile">
          <div className="profile-image">
            <img src={Elida} alt="Elida" />
          </div>
          <div className="profile-description">
            <p className="profile-position">
              <img
                className="profile-icon"
                src={ProfilePosition}
                alt="position"
              />
              CMO
            </p>
            <p className="profile-name">Élida Pio</p>
            <p className="profile-education">Ciencias Biologicas</p>
          </div>
        </div>
        <div className="profile">
          <div className="profile-image">
            <img src={William} alt="William" />
          </div>
          <div className="profile-description">
            <p className="profile-position">
              <img
                className="profile-icon"
                src={ProfilePosition}
                alt="position"
              />
              Programador
            </p>
            <p className="profile-name">William Baleno</p>
            <p className="profile-education">Engenharia Informática e Telecomunicações</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
