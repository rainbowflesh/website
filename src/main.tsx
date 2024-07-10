import "./tailwind.css";
import "./index.css";
// deps
import { BrowserRouter } from "react-router-dom";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// components
import { NavigationBar } from "./components/NavigationBar";
import { FooterBar } from "./components/Footer";
import { PageRoutes } from "./routes";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en_US",
    supportedLngs: ["en_US", "zh-Hans", "ru_RU", "ja_JP"],
    debug: true,
    load: "all",
    interpolation: {
      escapeValue: false,
    },
  });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <NavigationBar />
        <PageRoutes />
      </div>
      <FooterBar />
    </BrowserRouter>
  </React.StrictMode>
);
