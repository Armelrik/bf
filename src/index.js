import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";
import { BrowserRouter } from 'react-router-dom';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      },
      fr: {
        translation: {
          "Welcome to React": "Vous etes la Bienvenue a React et a react-i18next!"
        }
      },
      
    },
    lng: document.querySelector('html').lang, // if you're using a language detector, do not define the lng option
   //lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
  });

  // function App() {
  //   const { t } = useTranslation();
  
  //   return <h2>{t('Welcome to React')}</h2>;
  // }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

