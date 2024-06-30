import { Button, Hero } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Analytics } from "@vercel/analytics/react";
import { Link } from "react-router-dom";
import { urls } from "../routes";

import Carousel from "nuka-carousel";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Hero className="dot-background dark:dot-background-dark h-dvh">
      <Analytics />
      <Hero.Content className="text-center flex flex-col sm:flex-row">
        <div className="rounded-box w-full sm:w-2/3 max-w-10/12 snap-center place-items-center">
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
            className="rounded-box  h-128"
          >
            <img className="bg-center bg-cover m-auto bg-premium-color" src="/images/fpv/10inch/cover.png" />
            <img className="bg-center bg-cover m-auto bg-premium-color" src="/images/fpv/7inch/cover.png" />
            <img className="bg-cover" src="/images/ai_module/lokon1/cover.jpg" />
          </Carousel>
        </div>
        <div className="w-full sm:w-1/3">
          <article className="text-wrap">
            <h1 className="text-5xl font-bold">{t("string.greeting")}</h1>
            <p
              id="company-introduce"
              className="company-introduce py-6 bg-slate-50 dark:bg-base-200 rounded-box mt-2 mb-2 text-balance"
            >
              {t("string.company_introduce")}
            </p>
          </article>
          <div className="grid grid-flow-col auto-cols-auto">
            <div className="size-1"></div>
            <Button className="">
              <Link to={urls.learnmore}>{t("string.learn_more")}</Link>
            </Button>
            <div className="size-1"></div>
            <Button color="neutral">
              <Link to={urls.contact}>{t("string.buy_now")}</Link>
            </Button>
            <div className="size-1"></div>
          </div>
        </div>
      </Hero.Content>
    </Hero>
  );
};
