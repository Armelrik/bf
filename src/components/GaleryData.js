import React, { useEffect } from "react";
import "./GaleryDataStyles.css";
import Img1 from "../assets/activites/1.jpeg";
import Img2 from "../assets/activites/2.jpeg";
import Img3 from "../assets/activites/3.jpeg";
import Img4 from "../assets/activites/4.jpeg";
import Img5 from "../assets/activites/5.jpeg";
import Img6 from "../assets/activites/6.jpeg";
import Img7 from "../assets/activites/7.jpeg";
import Img8 from "../assets/activites/8.jpeg";
import Img9 from "../assets/activites/9.jpeg";
import Img10 from "../assets/activites/10.jpeg";

import Img11 from "../assets/activites/11.jpeg";
import Img12 from "../assets/activites/12.jpeg";
import Img13 from "../assets/activites/13.jpeg";
import Img14 from "../assets/activites/14.jpeg";
import Img15 from "../assets/activites/15.jpeg";
import Img16 from "../assets/activites/16.jpeg";
import Img17 from "../assets/activites/17.jpeg";
import Img18 from "../assets/activites/18.jpeg";
import Img19 from "../assets/activites/19.jpeg";
import Img20 from "../assets/activites/20.jpeg";

import gsap from "gsap";
import { useTranslation } from "react-i18next";

function GaleryData() {
  const { t } = useTranslation();

  useEffect(() => {
    // Fonction d'animation GSAP
    const initAnimations = (groupSelector) => {
      const items = document.querySelectorAll(`${groupSelector} .item`);

      const expand = (item, i) => {
        items.forEach((it, ind) => {
          if (i === ind) return;
          it.clicked = false;
        });

        gsap.to(items, {
          width: item.clicked ? "15vw" : "8vw",
          duration: 2,
          ease: "elastic(1, .6)",
        });

        item.clicked = !item.clicked;
        gsap.to(item, {
          width: item.clicked ? "42vw" : "15vw",
          duration: 2.5,
          ease: "elastic(1, .3)",
        });
      };

      items.forEach((item, i) => {
        item.clicked = false;
        item.addEventListener("click", () => expand(item, i));
      });

      // Nettoyage pour éviter les doublons quand le composant est démonté
      return () => {
        items.forEach((item, i) => {
          item.removeEventListener("click", () => expand(item, i));
        });
      };
    };

    // Appliquer GSAP aux deux groupes d'images
    const cleanup1 = initAnimations(".group1");
    const cleanup2 = initAnimations(".group2");

    return () => {
      cleanup1();
      cleanup2();
    };
  }, []);

  return (
    <div className="galerydata">
      <div className="galery">
        <h1>{t("galery_head")}</h1>
        <p>{t("galery_text")}</p>

        {/* Premier bloc d'images */}
        <div className="slide">
          <div className="group group1">
            <img className="item" src={Img1} alt="img1" />
            <img className="item" src={Img2} alt="img2" />
            <img className="item" src={Img3} alt="img3" />
            <img className="item" src={Img4} alt="img4" />
            <img className="item" src={Img5} alt="img5" />
          </div>
        </div>

        {/* Deuxième bloc d'images */}
        <div className="slide">
          <div className="group group1">
            <img className="item" src={Img6} alt="img6" />
            <img className="item" src={Img7} alt="img7" />
            <img className="item" src={Img8} alt="img8" />
            <img className="item" src={Img9} alt="img9" />
            <img className="item" src={Img10} alt="img10" />
          </div>
        </div>

        {/* Troisieme bloc d'images */}
        <div className="slide">
          <div className="group group2">
            <img className="item" src={Img11} alt="img5" />
            <img className="item" src={Img12} alt="img6" />
            <img className="item" src={Img13} alt="img7" />
            <img className="item" src={Img14} alt="img8" />
            <img className="item" src={Img15} alt="img8" />
          </div>
        </div>

        {/* Quatrieme bloc d'images */}
        <div className="slide">
          <div className="group group2">
            <img className="item" src={Img16} alt="img8" />
            <img className="item" src={Img17} alt="img8" />
            <img className="item" src={Img18} alt="img8" />
            <img className="item" src={Img19} alt="img8" />
            <img className="item" src={Img20} alt="img8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GaleryData;
