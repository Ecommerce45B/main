import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const [smallScreen, setSmallScreen] = useState(false);
  const [start, setStart] = useState(true);

  if (window.screen.availWidth <= 590 && smallScreen !== true && start === true) {
    setSmallScreen(true);
    setStart(false);
  }

  return (
    <React.Fragment>
      {smallScreen ? (
        <div className={style.footerSmall}>
          <div>
            <h5 className={style.text}>Página creada por Grupo Ecommerce 45b</h5>
            <Link to="/about">About</Link>
            <Link to="/home">Regresar</Link>
          </div>
        </div>
      ) : (
<div className={style.footer}>
  <div>
    <h5 className={style.text}>Página creada por Grupo Ecommerce 45b</h5>
    <Link to="/about" className={`${style.textBold} ${style.links}`}>About</Link>
    <Link to="/contact" className={`${style.textBold} ${style.links}`}>Contact</Link>
  </div>
  <div className="textIcon">
    <FaInstagram />
    <FaTwitter />
    <FaYoutube />
  </div>
</div>
      )}
      </React.Fragment>
  );
}
