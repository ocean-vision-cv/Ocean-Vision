import { useTranslation } from "react-i18next";
import HomeImage from "../../../assets/images/homePage.png";
import "./Home.css";

const Home = () => {
  const { t } = useTranslation();
  return (
    <section className="home" id="home">
      <div className="left-description">
        <img className="home-image" src={HomeImage} alt="homeImage" />
      </div>
      <div className="right-description">
        <div className="container-description">
          <div className="what-description">
            <h2 className="sub-title">{t("what-title")}</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              iusto impedit, provident facilis necessitatibus animi error
              deleniti labori
            </p>
          </div>
          <div className="why-description">
            <h2 className="sub-title">{t("why-title")}</h2>
            <p>
              {t("why-description-1")}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              sit. Quod minus explicabo blanditiis inventore nihil, ipsa
            </p>
          </div>
          <div className="how-description">
            <h2 className="sub-title">{t("how-title")}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit vel recusandae voluptate hic a esse
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
