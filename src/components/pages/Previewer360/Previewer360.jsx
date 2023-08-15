import React from "react";
import vrBack from "../../../assets/images/vrBack.png";
import vrFont from "../../../assets/images/vrFront.png";
import "./Previewer360.css";
import { useNavigate } from "react-router-dom";

const Previewer360 = () => {
  const navigate = useNavigate();

  function redirectView360() {
    navigate("/360");
  }

  return (
    <section className="previewer">
      <div className="previewer-box" onClick={redirectView360}>
        <img src={vrBack} className="vr-back-image" alt="back" />
        <img src={vrFont} className="vr-front-image" alt="font" />
      </div>
      <div className="previewer-description-container">
        <p className="previewer-title"> Visão 360°</p>
        <p className="previewer-description">
          Uma imagem em 360 graus é como uma fotografia que captura tudo ao seu
          redor, como se você estivesse no centro. Imagine tirar uma foto de
          tudo o que está à sua volta e, em seguida, unir essas imagens para
          formar uma única foto que você pode explorar olhando para cima, para
          baixo e para os lados, como se estivesse realmente lá. É como se você
          pudesse olhar em todas as direções a partir de um único ponto na
          imagem.
        </p>
        <button onClick={redirectView360} className="previewer-button-redirect">
          Experimentar Agora
        </button>
      </div>
    </section>
  );
};

export default Previewer360;
