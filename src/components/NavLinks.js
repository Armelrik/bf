import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavLinksStyles.css";
import { useTranslation } from "react-i18next";

function NavLinks() {
  const { t } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
      // Fermer les dropdowns si on passe en desktop
      if (window.innerWidth > 900) setOpenDropdown(null);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDropdown = (idx) => {
    if (!isMobile) return;
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  return (
    <div>
      <div className="dropdown">
        <Link className="nav-links" to="/">
          <i className="fa-solid fa-house-user"></i>
          {t("navLink1")}
        </Link>
      </div>
      <div className="dropdown">
        <button className="dropbtn" onClick={() => handleDropdown(1)}>
          <i className="fa-solid fa-light fa-passport"></i>
          {t("navLink2")}
          {isMobile && (
            <i
              className={`fa-solid fa-chevron-${
                openDropdown === 1 ? "up" : "down"
              }`}
              style={{
                float: "right",
                marginLeft: 8,
                transition: "transform 0.2s",
                transform: openDropdown === 1 ? "rotate(180deg)" : "none",
              }}
            ></i>
          )}
        </button>
        <div
          className="dropdown-content"
          style={{
            display: isMobile
              ? openDropdown === 1
                ? "block"
                : "none"
              : undefined,
          }}
        >
          {/* <div>
            <Link to="/ambassador">{t("dropdown2_1")}</Link>
          </div> */}
          <div>
            <Link to="/historique">{t("dropdown2_2")}</Link>
          </div>
          <div>
            <Link to="/galery">{t("dropdown2")}</Link>
          </div>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn" onClick={() => handleDropdown(2)}>
          <i className="fa-solid fa-light fa-passport"></i>
          {t("navLink3")}
          {isMobile && (
            <i
              className={`fa-solid fa-chevron-${
                openDropdown === 2 ? "up" : "down"
              }`}
              style={{
                float: "right",
                marginLeft: 8,
                transition: "transform 0.2s",
                transform: openDropdown === 2 ? "rotate(180deg)" : "none",
              }}
            ></i>
          )}
        </button>
        <div
          className="dropdown-content"
          style={{
            display: isMobile
              ? openDropdown === 2
                ? "block"
                : "none"
              : undefined,
          }}
        >
          <div>
            <Link to="https://applicant.visaburkina.bf/#/">
              {t("dropdown3")}
            </Link>
          </div>
          <div>
            <Link to="/consulCard">{t("dropdown4")}</Link>
          </div>
          <div>
            <Link to="/passport">{t("dropdown5")}</Link>
          </div>
          <div>
            <Link to="/acts">{t("dropdown6")}</Link>
          </div>
          <div>
            <Link to="/letpass">{t("dropdown8")}</Link>
          </div>
          <div>
            <Link to="/capacity">{t("dropdown9")}</Link>
          </div>
          <div>
            <Link to="/otherDoc">{t("dropdown10")}</Link>
          </div>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn" onClick={() => handleDropdown(3)}>
          <i className="fa-solid fa-briefcase"></i>
          {t("navLink4")}
          {isMobile && (
            <i
              className={`fa-solid fa-chevron-${
                openDropdown === 3 ? "up" : "down"
              }`}
              style={{
                float: "right",
                marginLeft: 8,
                transition: "transform 0.2s",
                transform: openDropdown === 3 ? "rotate(180deg)" : "none",
              }}
            ></i>
          )}
        </button>
        <div
          className="dropdown-content"
          style={{
            display: isMobile
              ? openDropdown === 3
                ? "block"
                : "none"
              : undefined,
          }}
        >
          <div>
            <Link to="https://www.mae.gov.bf/accueil">{t("dropdown11")}</Link>
          </div>
          <div>
            <Link to="https://burkinatradeportal.bf/#">{t("dropdown12")}</Link>
          </div>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn" onClick={() => handleDropdown(4)}>
          <i className="fa-solid fa-people-group"></i>
          {t("navLink7")}
          {isMobile && (
            <i
              className={`fa-solid fa-chevron-${
                openDropdown === 4 ? "up" : "down"
              }`}
              style={{
                float: "right",
                marginLeft: 8,
                transition: "transform 0.2s",
                transform: openDropdown === 4 ? "rotate(180deg)" : "none",
              }}
            ></i>
          )}
        </button>
        <div
          className="dropdown-content"
          style={{
            display: isMobile
              ? openDropdown === 4
                ? "block"
                : "none"
              : undefined,
          }}
        >
          <div>
            <Link to="/associations">{t("dropdown16")}</Link>
          </div>
          <div>
            <Link to="/hcbe">{t("dropdown17")}</Link>
          </div>
          <div>
            <Link to="https://in3.856.mytemp.website/">{t("dropdown18")}</Link>
          </div>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn" onClick={() => handleDropdown(5)}>
          <i className="fa-solid fa-info"></i>
          {t("navLink5")}
          {isMobile && (
            <i
              className={`fa-solid fa-chevron-${
                openDropdown === 5 ? "up" : "down"
              }`}
              style={{
                float: "right",
                marginLeft: 8,
                transition: "transform 0.2s",
                transform: openDropdown === 5 ? "rotate(180deg)" : "none",
              }}
            ></i>
          )}
        </button>
        <div
          className="dropdown-content"
          style={{
            display: isMobile
              ? openDropdown === 5
                ? "block"
                : "none"
              : undefined,
          }}
        >
          <div>
            <Link to="/https://www.sig.gov.bf/accueil">{t("dropdown14")}</Link>
          </div>
          <div>
            <Link to="https://u.ae/en#/">{t("dropdown15")}</Link>
          </div>
          <div>
            <Link to="/conseils">{t("dropdown19")}</Link>
          </div>
        </div>
      </div>

      <div className="dropdown">
        <Link className="nav-links" to="/contact">
          <i className="fa-solid fa-address-book"></i>
          {t("navLink6")}
        </Link>
      </div>
    </div>
  );
}

export default NavLinks;
