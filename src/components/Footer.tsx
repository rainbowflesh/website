import { Footer } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { urls } from "../routes";

export const FooterBar = () => {
  const { t } = useTranslation();
  return (
    <Footer className="p-10 bg-neutral text-neutral-content">
      <div>
        <Footer.Title>{t("string.product")}</Footer.Title>
        <Link to={urls.product_fpv} className="link link-hover">
          {t("string.smart_fpv")}
        </Link>
        <Link to={urls.product_ai_module} className="link link-hover">
          {t("string.ai_module")}
        </Link>
      </div>
      <div>
        <Footer.Title>{t("string.company")}</Footer.Title>
        <Link to={urls.about} className="link link-hover">
          {t("string.about")}
        </Link>
        <Link to={urls.contact} className="link link-hover">
          {t("string.contact")}
        </Link>
      </div>
      <div>
        <Footer.Title>{t("string.legal")}</Footer.Title>
        <Link to={"/tos"} className="link link-hover">
          {t("string.tos")}
        </Link>
      </div>
      <div className="items-end px-8 ">
        <p className="text-xs max-w-128">{t("string.copyright")}</p>
      </div>
    </Footer>
  );
};
