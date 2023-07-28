import './GalleryPreviewer.css';

import { useTranslation } from "react-i18next";
import IMAGENS from '../../layout/Images';
import { useNavigate } from 'react-router-dom';

const GalleryPreviewer = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  
  function redirectToGallery(){
      navigate("/galeria")
  }

  return (
    <section className='gallery-page'>
      <div className="gallery-box">
        <ul className="photo-marquee-down">
          <li className='marquee-item'>
            <img src={IMAGENS[0]} alt="slide" className='marquee-image' />
          </li>
          <li className='marquee-item'>
            <img src={IMAGENS[1]} alt="slide" className='marquee-image' />
          </li>
          <li className='marquee-item'>
            <img src={IMAGENS[2]} alt="slide" className='marquee-image' />
          </li>
          <li className='marquee-item'>
            <img src={IMAGENS[3]} alt="slide" className='marquee-image' />
          </li>
          <li className='marquee-item'>
            <img src={IMAGENS[0]} alt="slide" className='marquee-image' />
          </li>
          <li className='marquee-item'>
            <img src={IMAGENS[1]} alt="slide" className='marquee-image' />
          </li>
          <li className='marquee-item'>
            <img src={IMAGENS[2]} alt="slide" className='marquee-image' />
          </li>
        </ul>

        <ul className="photo-marquee-up">
          <li className='marquee-item'>
            <img src={IMAGENS[4]} alt="slide" className='marquee-image' />
          </li>
          <li className='marquee-item'>
            <img src={IMAGENS[5]} alt="slide" className='marquee-image' />
          </li>
          <li className='marquee-item'>
            <img src={IMAGENS[6]} alt="slide" className='marquee-image' />
          </li>
          <li className='marquee-item'>
            <img src={IMAGENS[7]} alt="slide" className='marquee-image' />
          </li>
          <li className='marquee-item'>
            <img src={IMAGENS[4]} alt="slide" className='marquee-image' />
          </li>
          <li className='marquee-item'>
            <img src={IMAGENS[5]} alt="slide" className='marquee-image' />
          </li>
          <li className='marquee-item'>
            <img src={IMAGENS[6]} alt="slide" className='marquee-image' />
          </li>
        </ul>

        <ul className="photo-marquee-down">
          <li className='marquee-item'>
            <img src={IMAGENS[8]} alt="slide" className='marquee-image' />
          </li>
          <li className='marquee-item'>
            <img src={IMAGENS[9]} alt="slide" className='marquee-image' />
          </li>
          <li className='marquee-item'>
            <img src={IMAGENS[10]} alt="slide" className='marquee-image' />
          </li>
          <li className='marquee-item'>
            <img src={IMAGENS[11]} alt="slide" className='marquee-image' />
          </li>
          <li className='marquee-item'>
            <img src={IMAGENS[8]} alt="slide" className='marquee-image' />
          </li>
          <li className='marquee-item'>
            <img src={IMAGENS[9]} alt="slide" className='marquee-image' />
          </li>
          <li className='marquee-item'>
            <img src={IMAGENS[10]} alt="slide" className='marquee-image' />
          </li>
        </ul>
      </div>
      <button className='button-redirect-gallery'  onClick={redirectToGallery}>Ver Galeria</button>
    </section>
  )
}
export default GalleryPreviewer;
    // <section className='gallery-page'>
    //     <h2 className='events-title'>{t("events-title")}</h2>
    //     <PhotoSlider/>
    // </section>