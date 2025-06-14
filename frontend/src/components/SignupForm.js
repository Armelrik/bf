import React from "react";
import "./SignupFormStyles.css";
import { useTranslation } from "react-i18next";

const SignupForm = () => {
  const { t } = useTranslation();
  return (
    <div className="form-container">
      <h1>{t("signup_title")}</h1>
      <form>
        <input placeholder={t("signup_surname")} />
        <input placeholder={t("signup_name")} />
        <input placeholder={t("signup_mail")} />
        <input placeholder={t("signup_phone")} />
        <input placeholder={t("signup_town")} />
        {/* <input type="date" placeholder="Jour" /> */}
        {/* <input type="time" placeholder="Heure"></input> */}

        <div className="form-text">
          <label>{t("signup_form")}</label>
          <select>
            <option>{t("signup_drop1")}</option>
            <option>{t("signup_drop2")}</option>
            <option>{t("signup_drop3")}</option>
            <option>{t("signup_drop4")}</option>
            <option>{t("signup_drop5")}</option>
            <option>{t("signup_drop6")}</option>
            <option>{t("signup_drop7")}</option>
            <option>{t("signup_drop8")}</option>
            <option>{t("signup_drop9")}</option>
          </select>
          {/* <span>||||||</span> */}
          {/* <StripeContainer /> */}
          {/* <button> Payer</button> */}
        </div>
        <div>
          {/* <p>{t('signup_text')}</p> */}
          <br />
        </div>
        <button>{t("signup_button")}</button>
      </form>
    </div>
  );
};

export default SignupForm;
