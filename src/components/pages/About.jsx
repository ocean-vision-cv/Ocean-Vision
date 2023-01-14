import React from 'react'
import { useTranslation } from "react-i18next";

import './About.css'
const About = () => {
  const {t} = useTranslation()
  return (
    <section className='about'>
        <h2 className='about-title'>{t("about-title")}</h2>
        <div className="about-description">
            <p>
              {t("about-description-1")}
              <span className='text-highlight'>{t("about-highlight-1")}</span> 
              {t("about-description-2")}
              <span className='text-highlight'>{t("about-highlight-2")}</span>
              {t("about-description-3")}
            </p>
        </div>
        <p className='final-quote text-highlight'>{t("about-quote")}</p>
    </section>
  )
}

export default About;