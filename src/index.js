import 'flag-icons/css/flag-icons.min.css';
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { initReactI18next } from "react-i18next";
import App from './App';
import Viewer360 from './routes/Viewer360/Viewer360';
import './index.css';
import Gallery from "./routes/Gallery/Gallery";
import Landing from "./routes/Landing/Landing";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLangs:['en', 'pt'],
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

const router = createBrowserRouter([
    {
        element: <App/>,
        children:[
            {
                path: "/",
                element:<Landing/>
            },
            {
                path: "/galeria",
                element:<Gallery/>
            },
            {
                path: "/360",
                element:<Viewer360/> 
            },
        ]
      }
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

