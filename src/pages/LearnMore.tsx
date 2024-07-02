import { Hero, Button } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { urls } from "../routes";

export const LearnMore = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Hero className="bg-base-200 min-h-[30rem]">
        <Hero.Content>
          <div>
            <h1 className="text-5xl font-bold">Learn more about AI module!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Button color="neutral">
              <Link to={urls.contact}>{t("string.buy_now")}</Link>
            </Button>
          </div>
        </Hero.Content>
      </Hero>
    </div>
  );
};
