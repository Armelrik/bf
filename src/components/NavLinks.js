import React from "react";
import { Link } from "react-router-dom";
import "./NavLinksStyles.css";
import { useTranslation } from "react-i18next";

function NavLinks() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="dropdown">
        <Link className="nav-links" to="/">
          <i className="fa-solid fa-house-user"></i>
          {t("navLink1")}
        </Link>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          <i className="fa-solid fa-light fa-passport"></i>
          {t("navLink2")}
        </button>
        <div className="dropdown-content">
          {/* <div><Link to="/organigrame">{t('dropdown1')}</Link></div> */}
          <div>
            <Link to="/ambassador">{t("dropdown2_1")}</Link>
          </div>
          <div>
            <Link to="/galery">{t("dropdown2")}</Link>
          </div>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          {/* <Link className='nav-links' to="/consulat"> */}
          <i className="fa-solid fa-light fa-passport"></i>
          {t("navLink3")}
          {/* </Link> */}
        </button>
        <div className="dropdown-content">
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
          {/* <div><Link to="/certificate">{t('dropdown7')}</Link></div> */}
          <div>
            <Link to="/letpass">{t("dropdown8")}</Link>
          </div>
          <div>
            <Link to="/capacity">{t("dropdown9")}</Link>
          </div>
          <div>
            <Link to="/otherDoc">{t("dropdown10")}</Link>
          </div>
          <div>
            <Link to="/diaspora">{t("dropdown16")}</Link>
          </div>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <i className="fa-solid fa-briefcase"></i>
          {t("navLink4")}
        </button>
        <div className="dropdown-content">
          <div>
            <Link to="/https://www.mae.gov.bf/">{t("dropdown11")}</Link>
          </div>
          <div>
            <Link to="/https://www.investburkina.com/">{t("dropdown12")}</Link>
          </div>
          <div>
            <Link to="https://burkinatradeportal.bf/#">
              {t("dropdown12_1")}
            </Link>
          </div>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <i className="fa-solid fa-people-group"></i>
          {t("navLink7")}
        </button>
        <div className="dropdown-content">
          <div>
            <Link to="#">{t("dropdown16")}</Link>
          </div>
          <div>
            <Link to="#">{t("dropdown17")}</Link>
          </div>
          <div>
            <Link to="#">{t("dropdown18")}</Link>
          </div>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <i className="fa-solid fa-info"></i>
          {t("navLink5")}
        </button>
        <div className="dropdown-content">
          <div>
            <Link to="/ambassade">{t("dropdown13")}</Link>
          </div>
          <div>
            <Link to="/https://www.sig.gov.bf/accueil">{t("dropdown14")}</Link>
          </div>
          <div>
            <Link to="https://u.ae/en#/">{t("dropdown15")}</Link>
          </div>
          <div>
            <Link to="#">{t("dropdown19")}</Link>
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
