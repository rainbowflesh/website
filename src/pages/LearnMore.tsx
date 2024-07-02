import { Hero, Button } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { urls } from "../routes";

export const LearnMore = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Hero className="min-h-[30rem] w-4/5 m-auto  max-h-screen">
        <Hero.Content>
          <div>
            <h1 className="text-5xl font-bold m-auto text-center">Learn more about AI module!</h1>
            <p className="p-6 bg-base-200">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Button color="neutral" className="m-4 ">
              <Link to={urls.contact}>{t("string.buy_now")}</Link>
            </Button>
          </div>
        </Hero.Content>
      </Hero>
    </div>
  );
};
