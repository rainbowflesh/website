import { Button } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { urls } from "../routes";

export const Logo = () => {
  const { t } = useTranslation();
  return (
    <Link to={urls.home}>
      <Button className="text-xl text-left normal-case md:flex md:items-center" color="ghost">
        <div className="flex flex-col -mt-1.5">
          <span className={"self-start font-logo text-4xl"}>{t("text.company_name_short")}</span>
          <span className="text-sm font-light block -mt-2">{t("text.company_slogan")}</span>
        </div>
      </Button>
    </Link>
  );
};
