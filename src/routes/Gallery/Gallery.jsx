import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../components/pages/Footer/Footer";
import storage from "../../firebase/FirebaseConfig";
import "./Gallery.css";

const Gallery = () => {
  const { t } = useTranslation();
  const eventList = {
    "099WS":[t("099WS-event"),t("099WS-info")],
    "100FO2": [t("100FO2-event"),t("100FO2-info")],
    "101DD": [t("101DD-event"),t("101DD-info")],
    "102DOL": [t("102DOL-event"),t("102DOL-info")],
    "103DORP": [t("103DORP-event"),t("103DORP-info")],
    "104DORTB": [t("104DORTB-event"),t("104DORTB-info")],
    "105OYS": [t("105OYS-event"),t("105OYS-info")],
    "106VPR": [t("106VPR-event"),t("106VPR-info")],
    "107FAPN": [t("107FAPN-event"),t("107FAPN-info")],
    "108TOCM": [t("108TOCM-event"),t("108TOCM-info")],
    "109FO1": [t("109FO1-event"),t("109FO1-info")],
    "110OWH": [t("110OWH-event"),t("110OWH-info")]
  };
  const [imagesUrls, setImagesUrls] = useState([]);
  const [selectImage, setSelectImage] = useState(null);
  const [selectImageDescription, setSelectImageDescription] = useState([]);

  function GetFileNameByURL(url) {
    var parts = url.split("/");
    return parts[parts.length - 1]
      .split("?")[0]
      .split("galeria%2F")[1]
      .split(".")[0]
      .split("%")[0];
  }

  useEffect(() => {
    async function getData() {
      const listRef = ref(storage, "/galeria");
      const result = await listAll(listRef);
      const urlPromises = result.items.map((imageRef) =>
        getDownloadURL(imageRef)
      );
      var urlList = await Promise.all(urlPromises);
      setImagesUrls(urlList);
    }
    getData();
  }, []);

  return (
    <section className="gallery">
      {selectImage && (
        <div className="select-image">
          <div className="photo-description-selected">
            <p>{selectImageDescription[0]}</p>
            <p>{selectImageDescription[1]}</p>
          </div>
          <img
            src={selectImage}
            alt="selected"
            className="selected-photo"
            onClick={() => setSelectImage(null)}
          />
        </div>
      )}
      <h2 className="gallery-title">{t("gallery-title")}</h2>
      <p className="gallery-description">
        {t("gallery-description-1")}
        <br></br>"{t("gallery-description-2")}"
      </p>
      <div className="gallery-container">
        {imagesUrls.map((link) => {
          var fileName = GetFileNameByURL(link);
          var photoDescription = eventList[fileName];
          return (
            <div className="gallery-photo-container" key={link}>
              {!selectImage && (
                <div className="photo-description">
                  <p>{photoDescription[0]}</p>
                  <p>{photoDescription[1]}</p>
                </div>
              )}
              <img
                key={link}
                src={link}
                alt="preview"
                className="photo"
                onClick={() => {
                  setSelectImage(link);
                  setSelectImageDescription(photoDescription);
                }}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
      <Footer />
    </section>
  );
};

export default Gallery;
