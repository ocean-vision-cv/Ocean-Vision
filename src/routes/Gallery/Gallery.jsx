import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import storage from "../../firebase/FirebaseConfig";
import Footer from "../../components/pages/Footer/Footer";
import "./Gallery.css";

const Gallery = () => {
  const [imagesUrls, setImagesUrls] = useState([]);
  const [selectImage, setSelectImage] = useState(null);
  const [selectImageDescription, setSelectImageDescription] = useState([]);

  useEffect(() => {
    async function getData() {
      const listRef = ref(storage, "/galeria");
      const result = await listAll(listRef);
      const urlPromises = result.items.map((imageRef) =>
        getDownloadURL(imageRef)
      );
      setImagesUrls(await Promise.all(urlPromises));
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
          var parts = link.split("/");
          var file_name = parts[parts.length - 1]
            .split("?")[0]
            .split("galeria%2F")[1]
            .split(".")[0];
          var photoDescription = file_name.split("-");

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
