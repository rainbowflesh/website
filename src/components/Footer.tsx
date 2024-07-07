import { Footer } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Pages } from "../routes";

export const FooterBar = () => {
  const { t } = useTranslation();
  return (
    <Footer className="p-10 bg-neutral text-neutral-content">
      <div>
        <Footer.Title>{t("string.product")}</Footer.Title>
        {/* <Link to={Pages.product_uav} className="link link-hover">
          {t("string.smart_fpv")}
        </Link> */}
        <Link to={Pages.product_ai_module} className="link link-hover">
          {t("string.ai_module")}
        </Link>
      </div>
      <div>
        <Footer.Title>{t("string.company")}</Footer.Title>
        <Link to={Pages.about} className="link link-hover">
          {t("string.about")}
        </Link>
        <Link to={Pages.contact} className="link link-hover">
          {t("string.contact")}
        </Link>
      </div>
      <div>
        <Footer.Title>{t("string.legal")}</Footer.Title>
        <Link to={"/tos"} className="link link-hover">
          {t("text.tos")}
        </Link>
      </div>
      <div className="items-end px-8 ">
        <p className="text-xs max-w-128">{t("text.copyright")}</p>
      </div>
    </Footer>
  );
};
