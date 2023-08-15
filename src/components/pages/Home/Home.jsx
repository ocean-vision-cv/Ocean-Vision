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
            <p>
              A Ocean Vision é uma startup que proporciona uma experiencia de
              viagem subaquática virtual.
            </p>
          </div>
          <div className="why-description">
            <h2 className="sub-title">{t("why-title")}</h2>
            <p>
              Explorar variedades de vida marinha promovendo a conscientização e
              contribuindo para preservação e engajamento de entusiastas do
              oceano.
            </p>
          </div>
          <div className="how-description">
            <h2 className="sub-title">{t("how-title")}</h2>
            <p>
              A essência desta experiencia imersiva reside na utilização de
              óculos de realidade virtual para visualizar imagens e videos em
              360 graus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
