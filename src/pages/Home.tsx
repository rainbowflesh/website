import { Button, Hero } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Analytics } from "@vercel/analytics/react";
import { Link } from "react-router-dom";
import { Pages, ProductPages } from "../routes";

import Carousel from "nuka-carousel";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Hero className="dot-background dark:dot-background-dark flex-1">
      <Analytics />
      <Hero.Content className="text-center flex flex-col sm:flex-row">
        <div className="rounded-box m-auto w-full sm:w-2/3 max-w-10/12">
          <Carousel
            autoplay
            autoplayInterval={5000}
            wrapAround
            cellAlign={"center"}
            defaultControlsConfig={{
              nextButtonClassName: "btn btn-circle mr-4 backdrop-blur-lg",
              nextButtonText: "❯",
              prevButtonClassName: "btn btn-circle ml-4 backdrop-blur-lg",
              prevButtonText: "❮",
              pagingDotsClassName: "mr-1 ml-1 backdrop-blur-lg",
            }}
            className="rounded-box h-128 overflow-hidden"
          >
            <img className="bg-cover" src="/images/ai_module/lokon1/cover.jpg" />
            <img className="bg-cover bg-gray-100 dark:bg-base-200" src="/images/ai_module/lokon1/smart_cam_sys.png" />
            <img
              className="bg-center bg-cover bg-premium-color dark:bg-premium-color"
              src="/images/ai_module/apel2k/cover.png"
            />
            <img
              className="bg-center bg-cover bg-gray-100 dark:bg-base-200"
              src="/images/ai_module/irca170/cover.png"
            />
          </Carousel>
        </div>
        <div className="w-full sm:w-1/3 max-w-4/5 md:w-1/2 lg:max-w-2/5">
          <article className="text-wrap">
            <h1 className="text-5xl font-bold">{t("text.greeting")}</h1>
            <p
              id="company-introduce"
              className="company-introduce py-6 bg-slate-50 dark:bg-base-200 rounded-box mt-2 mb-2 text-balance"
            >
              {t("text.company_introduce")}
            </p>
          </article>
          <div className="grid grid-flow-col auto-cols-auto">
            <div className="size-1"></div>
            <Button className="">
              <Link to={ProductPages.ai_module_lokon1.route}>{t("string.learn_more")}</Link>
            </Button>
            <div className="size-1"></div>
            <Button color="neutral">
              <Link to={Pages.contact}>{t("string.buy_now")}</Link>
            </Button>
            <div className="size-1"></div>
          </div>
        </div>
      </Hero.Content>
    </Hero>
  );
};
