import { Button } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { urls } from "../routes";

export const Logo = () => {
  const { t } = useTranslation();
  return (
    <Link to={urls.home}>
      <Button className="text-xl text-left normal-case md:flex md:items-center" color="ghost">
        {/* <img src="/favicon.svg" className="size-12 left-1 mr-auto text-left " /> */}
        <div className="flex flex-col -mt-1.5">
          <span className={"self-start font-logo text-4xl"}>{t("string.company_name_short")}</span>
          <span className="text-sm font-light block -mt-2">{t("string.company_slogan")}</span>
        </div>
      </Button>
    </Link>
  );
};
