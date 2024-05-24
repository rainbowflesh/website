import { Button, Hero } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Carousel from "nuka-carousel";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Hero className="dot-background dark:dot-background-dark h-dvh">
      <Hero.Content className="text-center flex flex-col sm:flex-row -mt-16">
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
            <img className="bg-center bg-cover m-auto" src="/images/uav/fpv/10inch/cover.png" />
            <img className="bg-center bg-cover m-auto" src="/images/uav/fpv/7inch/cover.png" />
            <img className="bg-center bg-cover m-auto" src="/images/uav/placeholder_KalebKendall.jpg" />
            <img className="bg-center bg-cover m-auto" src="/images/cuas/rce1u/cover.png" />
            <img className="bg-center bg-cover m-auto" src="/images/cuas/rce1u/back.jpg" />
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
          <div>
            <Button className="mr-8">
              <Link to="/product/cuas">{t("string.learn_more")}</Link>
            </Button>
            <Button color="neutral">
              <Link to="/contact">{t("string.buy_now")}</Link>
            </Button>
          </div>
        </div>
      </Hero.Content>
    </Hero>
  );
};
