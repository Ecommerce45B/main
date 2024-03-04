import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

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
            <p className={style.text}>Página creada por Grupo Ecommerce 45b</p>
            <Link to="/about">About</Link>
            <Link to="/home">Regresar</Link>
          </div>
        </div>
      ) : (
        <div className={style.footer}>
          <div>
            <p className={style.text}>Página creada por Grupo Ecommerce 45b</p>
            <Link to="/about" className={`${style.textBold} ${style.links}`}>About</Link>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
