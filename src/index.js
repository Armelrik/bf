import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";
import { BrowserRouter } from 'react-router-dom';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en','fr','ar'],
    detection: {
      order: ['htmlTag','path', 'cookie', 'localStorage', 'subdomain'],
      caches: ['cookie'],

    },
    //lng: document.querySelector('html').lang, // if you're using a language detector, do not define the lng option
   //lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',

    },
    react: { useSuspense: false},
  });

  // function App() {
  //   const { t } = useTranslation();
  
  //   return <h2>{t("welcome_to_react")}</h2>;
  // }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

