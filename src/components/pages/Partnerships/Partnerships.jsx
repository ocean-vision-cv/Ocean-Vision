import React from "react";
import "./Partnerships.css";

const Partnerships = () => {
  return (
    <section className="partnerships">
      <img
        src={
          "https://firebasestorage.googleapis.com/v0/b/ocean-vision.appspot.com/o/galeria%2F101DD%20%20(5).jpg?alt=media&token=0d328d4e-2f4c-492b-9722-2386e9f8c117"
        }
        className="partnership-image"
      ></img>
      <div className="partnership-description">
        <p className="partnership-title">Parceiros</p>
        <p>
          A Ocean Vision está aberta a oportunidades que compartilhem nosso
          compromisso com o uso sustentável dos recursos marinhos.<br></br> Se
          você está interessado em colaborar conosco ou nos convidar para
          eventos, entre em contato. <br></br>Esperamos construir conexões
          significativas e contribuir para a preservação dos oceanos juntos.
        </p>
      </div>
    </section>
  );
};

export default Partnerships;
