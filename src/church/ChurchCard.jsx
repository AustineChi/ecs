import React from "react";
import churchImg from "../images/church.jpeg";
import starImage from "../images/star.png";
import image1 from "../images/ico-deaf.svg";
import image2 from "../images/ico-accesible.svg";
import image3 from "../images/ico-parking.svg";
import image4 from "../images/ico-map-maker.svg";
import image5 from "../images/ico-hour.svg";
import image6 from "../images/ico-phone-number.svg";

import "./church.css";

function ChurchCard() {
  return (
    <div className="flex-container m-30">
      <div className="one pr">
        <span className="heart-box"></span>
        <img src={churchImg} alt="" className="church-image" />
      </div>
      <div className="one px-50">
        <p className="church-header-title ">Parròquia de l'Esperit Sant</p>
        <div>
          <img src={starImage} alt="" className="star-image" />
          <span className="text-color-red">4,5</span>
          <span> (22)</span>
        </div>
        <div>
          <ul>
            <li>Próxima misa: 20:00 hrs (Cast.)</li>
            <li>
              Confesiones (30 min antes de cada misa)
              <span class="redactor-invisible-space"></span>
            </li>
            <li>
              Actos de piedad: rosario, adoración al Santísimo,via crucis,
              Liturgia de las horas
            </li>
          </ul>
          <div>
            <img src={image1} alt="" className="church-icon-1" />
            <img src={image2} alt="" className="church-icon-1" />
            <img src={image3} alt="" className="church-icon-1" />
          </div>
        </div>
      </div>
      <div className="one  small-text">
        <div className="space-3"></div>
        <div className="add-border-left px-50">
          <div className="flex-container ">
            <img src={image4} alt="" className="church-icon-2" />
            <span className="one py-3">
              
              Travessera de Gràcia, 401 CP 08025 Barcelona, España
            </span>
          </div>
          <div className="flex-container">
            <img src={image5} alt="" className="church-icon-2" />
            <span className="one py-3">
              
              Apertura: 9:00-14:00 y 16:00-20:00
            </span>
          </div>
          <div>
            <img src={image6} alt="" className="church-icon-2" />
            <span className="one py-3">(+34) 934 357 370</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChurchCard;