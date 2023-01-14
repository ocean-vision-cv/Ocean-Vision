import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'flag-icons/css/flag-icons.min.css'
import './index.css';
import App from './App';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLangs:['en', 'pt'],
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    fallbackLng: "en",
    detection: {
        order: ['cookie','htmlTag', 'localStorage','path', 'subdomain'],
        caches:['cookie'],
    },
    backend:{
        loadPath: '/locales/{{lng}}/translation.json',
    },
    react:{useSuspense: false}
  });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

