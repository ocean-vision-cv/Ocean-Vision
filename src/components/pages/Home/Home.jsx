import { useTranslation } from "react-i18next";
import HomeImage from "../../../assets/images/homePage.png";
import "./Home.css";

const Home = () => {
  const { t } = useTranslation();
  return (
    <section className="home">
      <div className="left-description">
        <img className="home-image" src={HomeImage} alt="homeImage" />
      </div>
      <div className="right-description">
        <div className="container-description">
          <div className="what-description">
            <h2 className="sub-title">{t("what-title")}</h2>
            <p>{t("what-description")}</p>
          </div>
          <div className="why-description">
            <h2 className="sub-title">{t("why-title")}</h2>
            <p>
              {t("why-description")}
              <br></br>
              <span className="why-quote">"{t("why-quote")}"</span>
            </p>
          </div>
          <div className="how-description">
            <h2 className="sub-title">{t("how-title")}</h2>
            <p>
              {t("how-description-1")}
              <br></br>
              {t("how-description-2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
