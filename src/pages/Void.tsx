import { Button, Hero } from "react-daisyui";
import { useTranslation } from "react-i18next";

export const Void = () => {
  const { t } = useTranslation();
  return (
    <Hero className="dot-background dark:dot-background-dark">
      <Hero.Content className="text-center bg-base-200 h-screen w-screen">
        <div className="max-w-md">
          <p className="text font-bold">{t("text.404")}</p>
          <h1 className="text-7xl font-bold">404</h1>
          <Button className="mt-4" color="neutral">
            <a href="/">{t("text.return")}</a>
          </Button>
        </div>
      </Hero.Content>
    </Hero>
  );
};
