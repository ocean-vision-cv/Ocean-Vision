import './Home.css'
import image from '../../assets/images/image.jpg'
import LanguagesSelector from '../layout/LanguagesSelector';
import { useTranslation } from "react-i18next";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    const {t} = useTranslation()
    return (
        <section className="home" id="home">
            <div className="left-description">
            <LanguagesSelector/>
            <h1 className='description-title' id='home-title'>Ocean Vision</h1>
                <div className="container-description">
                    <div className="what-description">
                        <h2 className='sub-title'>{t("what-title")}</h2>
                        <p>
                            {t("what-description-1")}
                            <span className='text-highlight'>{t("what-highlight-1")}</span>
                            {t("what-description-2")}
                            <span className='text-highlight'>{t("what-highlight-2")}</span>.
                        </p>
                    </div>
                    <div className="why-description">
                        <h2 className='sub-title'>{t("why-title")}</h2>
                        <p>{t("why-description-1")}
                        <span className='text-highlight'>{t("why-highlight-1")}</span> 
                        {t("why-description-2")}
                        <span className='text-highlight'>{t("why-highlight-2")}</span> 
                        {t("why-description-3")}
                        <span className='text-highlight'>{t("why-highlight-3")}</span> 
                        {t("why-description-4")}
                        <span className='text-highlight'>{t("why-highlight-4")}</span> 
                        {t("why-description-5")}
                        </p>
                    </div>
                    <div className="how-description">
                        <h2 className='sub-title'>{t("how-title")}</h2>
                        <p>
                            {t("how-description-1")}
                            <span className='text-highlight'>{t("how-highlight-1")}</span>
                            {t("how-description-2")}
                        </p>
                    </div>
                </div>
            </div>
            <div className="right-description">
                <div className="image-container">
                    <img src={image} alt="description" />
                    <p className='image-location'>Baía das Gatas, São Vicente, Cabo Verde</p>
                </div>
            </div>
        </section>
    )
};

export default Home;


