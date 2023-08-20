import React from "react";
import { useTranslation } from "react-i18next";
import "./Partnerships.css";

const Partnerships = () => {
  const { t } = useTranslation();
  return (
    <section className="partnerships">
      <img
        alt="partner"
        src={
          "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/galeria%2F101DD%20%20(5).jpg?alt=media&token=0d328d4e-2f4c-492b-9722-2386e9f8c117"
        }
        className="partnership-image"
      ></img>
      <div className="partnership-description">
        <p className="partnership-title">{t("partnership-title")}</p>
        <p>
          {t("partnership-description-1")}
          <br></br> {t("partnership-description-2")}
          <br></br>
          {t("partnership-description-3")}
        </p>
      </div>
    </section>
  );
};

export default Partnerships;
