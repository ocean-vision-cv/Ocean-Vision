import "./GalleryPreviewer.css";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const IMAGENS = [
  "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/galeria%2F100FO2%20(1).jpg?alt=media&token=3cb1b309-2354-416b-a854-a0d17723f8d2",
  "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/galeria%2F101DD%20%20(4).jpg?alt=media&token=fb5079f5-06f2-4f86-8283-36521772a85b",
  "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/galeria%2F102DOL%20(4).jpg?alt=media&token=f8b6aa0d-c9ed-41a4-9242-ce1f6b2f73a8",
  "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/galeria%2F108TOCM%20(20).jpg?alt=media&token=6a3cb06f-c28a-43d4-8c07-7b9e3bcc494b",
  "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/galeria%2F105OYS%20(4).jpg?alt=media&token=0b116f57-9bfb-4b9c-b3df-37f19bc1990c",
  "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/galeria%2F110OWH%20(1).jpg?alt=media&token=5260339a-7203-4ef7-9ac0-e8018898d7b4",
  "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/galeria%2F107FAPN%20(10).jpg?alt=media&token=f2d43333-0c52-4649-a4f6-3e44e602a640",
  "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/galeria%2F108TOCM%20(5).jpg?alt=media&token=3ee9a51f-a04a-4f7c-a1f2-3bfcf16244b2",
  "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/galeria%2F102DOL%20(1).jpg?alt=media&token=0622e6e7-ae03-4314-a1c5-a560ac7b43ca",
  "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/galeria%2F109FO1%20(7).jpg?alt=media&token=d0d14264-fd70-4c0c-9546-44b0127609ce",
  "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/galeria%2F106VPR%20(1).jpg?alt=media&token=541d1046-66a1-4671-8c82-9e76245146b0",
  "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/galeria%2F107FAPN%20(1).jpg?alt=media&token=7a722401-b7e7-4a73-8859-33e92ba05595",
  "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/galeria%2F108TOCM%20(24).jpg?alt=media&token=e2b46d48-2913-4be7-9652-53ba3f38a951",
  "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/galeria%2F108TOCM%20(8).jpg?alt=media&token=b7ccf45a-58e8-4760-885e-d63d6b064538"
]
const GalleryPreviewer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  function redirectToGallery() {
    document.getElementById("landing")?.scrollIntoView({ behavior: "smooth" });
    navigate("/galeria");
  }

  return (
    <section className="gallery-page">
      <div className="gallery-box">
        <ul className="photo-marquee-down">
          <li className="marquee-item">
            <img src={IMAGENS[0]} alt="slide" className="marquee-image" />
          </li>
          <li className="marquee-item">
            <img src={IMAGENS[1]} alt="slide" className="marquee-image" />
          </li>
          <li className="marquee-item">
            <img src={IMAGENS[2]} alt="slide" className="marquee-image" />
          </li>
          <li className="marquee-item">
            <img src={IMAGENS[3]} alt="slide" className="marquee-image" />
          </li>
          <li className="marquee-item">
            <img src={IMAGENS[0]} alt="slide" className="marquee-image" />
          </li>
          <li className="marquee-item">
            <img src={IMAGENS[1]} alt="slide" className="marquee-image" />
          </li>
          <li className="marquee-item">
            <img src={IMAGENS[2]} alt="slide" className="marquee-image" />
          </li>
        </ul>

        <ul className="photo-marquee-up">
          <li className="marquee-item">
            <img src={IMAGENS[4]} alt="slide" className="marquee-image" />
          </li>
          <li className="marquee-item">
            <img src={IMAGENS[5]} alt="slide" className="marquee-image" />
          </li>
          <li className="marquee-item">
            <img src={IMAGENS[6]} alt="slide" className="marquee-image" />
          </li>
          <li className="marquee-item">
            <img src={IMAGENS[7]} alt="slide" className="marquee-image" />
          </li>
          <li className="marquee-item">
            <img src={IMAGENS[4]} alt="slide" className="marquee-image" />
          </li>
          <li className="marquee-item">
            <img src={IMAGENS[5]} alt="slide" className="marquee-image" />
          </li>
          <li className="marquee-item">
            <img src={IMAGENS[6]} alt="slide" className="marquee-image" />
          </li>
        </ul>

        <ul className="photo-marquee-down">
          <li className="marquee-item">
            <img src={IMAGENS[8]} alt="slide" className="marquee-image" />
          </li>
          <li className="marquee-item">
            <img src={IMAGENS[9]} alt="slide" className="marquee-image" />
          </li>
          <li className="marquee-item">
            <img src={IMAGENS[10]} alt="slide" className="marquee-image" />
          </li>
          <li className="marquee-item">
            <img src={IMAGENS[11]} alt="slide" className="marquee-image" />
          </li>
          <li className="marquee-item">
            <img src={IMAGENS[8]} alt="slide" className="marquee-image" />
          </li>
          <li className="marquee-item">
            <img src={IMAGENS[9]} alt="slide" className="marquee-image" />
          </li>
          <li className="marquee-item">
            <img src={IMAGENS[10]} alt="slide" className="marquee-image" />
          </li>
        </ul>
      </div>
      <button className="button-redirect-gallery" onClick={redirectToGallery}>
        Ver Galeria
      </button>
    </section>
  );
};
export default GalleryPreviewer;
// <section className='gallery-page'>
//     <h2 className='events-title'>{t("events-title")}</h2>
//     <PhotoSlider/>
// </section>
