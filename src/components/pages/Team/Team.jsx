import React from "react";
import { useTranslation } from "react-i18next";
import Elida from "../../../assets/images/ElidaPio.jpg";
import Nuno from "../../../assets/images/NunoLima.jpg";
import ProfilePosition from "../../../assets/images/ProfilePosition.png";
import Vitoria from "../../../assets/images/VitoriaAnthony.jpg";
import "./Team.css";

const Team = () => {
  const { t } = useTranslation();
  return (
    <section className="team-page">
      <p className="team-page-title">{t("team-title")}</p>
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
              Co-founder/CEO
            </p>
            <p className="profile-name">Vitória Anthony</p>
            <p className="profile-education">{t("engineering")}</p>
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
              Co-founder/CTO
            </p>
            <p className="profile-name">Nuno Lima</p>
            <p className="profile-education">{t("engineering")}</p>
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
            <p className="profile-education">{t("biological")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
