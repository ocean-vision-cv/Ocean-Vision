import React from "react";
import vrBack from "../../../assets/images/vrBack.png";
import vrFont from "../../../assets/images/vrFront.png";
import "./Previewer360.css";
import { useNavigate } from "react-router-dom";

const Previewer360 = () => {
    const navigate =useNavigate()
 
    function redirectView360(){
        navigate("/360")
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
          Lorem ipsum dolor, sit aet consectetur adipisicing elit. Minus at
          dolor tempora eaque excepturi molestiae temporibus sed aperiam Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Illum rem alias
          nulla laudantium ullam, autem amet. Molestiae minima ea, libero quam
          deserunt consequatur, placeat porro reprehenderit est voluptatum ab!
          Quos!{" "}
        </p>
        <button onClick={redirectView360}  className="previewer-button-redirect">Experimentar Agora</button>
      </div>
    </section>
  );
}

export default Previewer360;
