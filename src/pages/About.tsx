import { Hero } from "react-daisyui";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  return (
    <Hero className="dot-background dark:dot-background-dark">
      <Hero.Content className="text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-logo">{t("string.company_profile")}</h1>
          <p className="py-6 text-left">
            {t("text.company_profile_1")} <br />
            <br />
            {t("text.company_profile_2")}
            <br />
            <br /> {t("text.company_profile_3")} <br />
            <br />
            {t("text.company_profile_4")} <br />
            <br />
            {t("text.company_profile_5")}
          </p>
          <p className="font-bold">{t("text.company_profile_6")}</p>
        </div>
      </Hero.Content>
    </Hero>
  );
};
