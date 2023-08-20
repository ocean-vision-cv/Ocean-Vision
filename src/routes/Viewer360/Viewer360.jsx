import './Viewer360.css';
import { useTranslation } from "react-i18next";
const Viewer360 = () =>{
    const { t } = useTranslation();
    return(
        <section className="viewer">
            <p className='viewer-warning'>{t("viewer-warning")}</p>
            <iframe className='frame' frameborder="0" title='360image' src='https://momento360.com/e/u/549c51676a5b4e1a9d09741c05f740ae?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true'/>
        </section>
    )
};

export default Viewer360;