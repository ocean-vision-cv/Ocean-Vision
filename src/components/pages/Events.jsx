import './Events.css'
import PhotoSlider from '../layout/PhotoSlider'

import { useTranslation } from "react-i18next";

const Events = () => {
  const {t} = useTranslation()
  return (
    <section className='events'>
        <h2 className='events-title'>{t("events-title")}</h2>
        <PhotoSlider/>
    </section>
  )
}
export default Events;