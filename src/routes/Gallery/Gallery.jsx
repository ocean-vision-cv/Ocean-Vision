import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import storage from "../../firebase/FirebaseConfig";
import Footer from "../../components/pages/Footer/Footer";
import "./Gallery.css";

const eventList = {
  "100FO2":["Feira Oportunidades 2", "Mindelo 2023"],
  "101DD":["Demo day BCVD#4", "Praia 2023"],
  "102DOL":["Dia Oceano", "Mindelo, Laginha 2023"],
  "103DORP":["Dia Oceano", "Ribeira das Patas 2023"],
  "104DORTB":["Dia Oceano", "Replica Torre de Belem 2023"],
  "105OYS":["Ocean Youth Summit", "Dinamarca, Aarhus 2023"],
  "106VPR":["Visita PR São Tomé e Príncipe", "ISECMAR 2023"],
  "107FAPN":["Feira Azul", "Porto Novo 2023"],
  "108TOCM":["The Ocean Race", "Mindelo StopOver 2023"],
  "109FO1":["Feira Oportunidades 1", "Mindelo 2022"],
  "110OWH":["Ocean Week Hackathon", "Mindelo 2022"],
}

const Gallery = () => {
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
      <h2 className="gallery-title">Galeria</h2>
      <p className="gallery-description">
        As Fotos descrevem a nossa historia<br></br>"Roubando os sorrisos que o
        oceano precisa"
      </p>
      <div className="gallery-container">
        {imagesUrls.map((link) => {
          // var photoDescription = eventList[GetFileNameByURL(link)]
          var fileName = GetFileNameByURL(link)
          var photoDescription = eventList[fileName]
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
