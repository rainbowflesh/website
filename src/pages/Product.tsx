import { Card, Stack } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const CuasIndex = () => {
  const { t } = useTranslation();
  return (
    <main className="dot-background p-8 flex flex-col">
      <h1 className="text-5xl font-bold m-auto text-center mb-4">{t("string.cuas_device")}</h1>
      <div className="bg-gray-100 dark:bg-black p-8 mx-auto max-w-2xl lg:max-w-none mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        <Card className="px-4 m-auto">
          <Link className="group m-auto" to="/product/cuas/rce1u">
            <Stack>
              <img
                src="/images/cuas/rce1u/front2.jpg"
                alt="Image 1"
                className="rounded transition-all duration-400 ease-in-out hover:-translate-y-1 delay-200"
              />
              <img
                src="/images/cuas/rce1u/front1.jpg"
                alt="Image 2"
                className="rounded transition-all ease-in group-hover:!z-10 group-hover:opacity-100 duration-200"
              />
            </Stack>
          </Link>
          <Card.Title tag="h2" className="m-auto mt-4 mb-4 items-center text-center">
            {t("products.rce1u")}
          </Card.Title>
        </Card>
      </div>
    </main>
  );
};

export const UavIndex = () => {
  const { t } = useTranslation();
  return (
    <main className="dot-background p-8 flex flex-col">
      <h1 className="text-5xl font-bold m-auto text-center mb-4">{t("string.uav")}</h1>
      <div className="bg-gray-100 dark:bg-black p-8 mx-auto max-w-2xl lg:max-w-none mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        <Card className="px-4 m-auto">
          <Link className="group m-auto mt-4" to="/product/uav/fpv/7inch">
            <Stack>
              <img
                src="/images/uav/fpv/7inch/analog_preview.png"
                alt="Image 1"
                className="rounded transition-all duration-400 ease-in-out hover:-translate-y-1 delay-200 bg-premium-color"
              />
              <img
                src="/images/uav/fpv/7inch/digital_preview.png"
                alt="Image 2"
                className="rounded transition-all ease-in group-hover:!z-10 group-hover:opacity-100 duration-200 bg-gray-100 dark:bg-gray-950"
              />
            </Stack>
          </Link>
          <Card.Title tag="h2" className="m-auto mt-4 mb-4 items-center text-center">
            {t("product.fpv_7inch")}
          </Card.Title>
        </Card>
        <Card className="px-4 m-auto">
          <Link className="group m-auto mt-4" to="/product/uav/fpv/10inch">
            <Stack>
              <img
                src="/images/uav/fpv/10inch/analog_preview.png"
                alt="Image 1"
                className="rounded transition-all duration-400 ease-in-out hover:-translate-y-1 delay-200 bg-premium-color"
              />
              <img
                src="/images/uav/fpv/10inch/digital_preview.png"
                alt="Image 2"
                className="rounded transition-all ease-in group-hover:!z-10 group-hover:opacity-100 duration-200 bg-gray-100 dark:bg-gray-950"
              />
            </Stack>
          </Link>
          <Card.Title tag="h2" className="m-auto mt-4 mb-4 items-center text-center">
            {t("product.fpv_10inch")}
          </Card.Title>
        </Card>
      </div>
    </main>
  );
};

export const Index = () => {
  return (
    <>
      <UavIndex></UavIndex>
      <CuasIndex></CuasIndex>
    </>
  );
};
