import { Card, Stack } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { urls } from "../routes";
import React from "react";

interface ProductProps {
  imageUrl1: string;
  imageUrl2: string;
  productUrl: string;
  productName: string;
  tKey: string;
}

const ProductCard: React.FC<ProductProps> = ({ imageUrl1, imageUrl2, productUrl, productName, tKey }) => {
  const { t } = useTranslation();
  return (
    <Card className="px-4 m-auto">
      <Link className="group m-auto mt-4" to={productUrl}>
        <Stack>
          <img
            src={imageUrl1}
            alt="Image 1"
            className="rounded transition-all duration-400 ease-in-out hover:-translate-y-1 delay-200 bg-premium-color"
          />
          <img
            src={imageUrl2}
            alt="Image 2"
            className="rounded transition-all ease-in group-hover:!z-10 group-hover:opacity-100 duration-200 bg-gray-100 dark:bg-gray-950"
          />
        </Stack>
      </Link>
      <Card.Title tag="h2" className="m-auto mt-4 mb-4 items-center text-center">
        {t(tKey)}
      </Card.Title>
    </Card>
  );
};

const CuasIndex: React.FC = () => {
  const { t } = useTranslation();
  return (
    <main className="dot-background p-8 flex flex-col">
      <h1 className="text-5xl font-bold m-auto text-center mb-4">{t("string.cuas_device")}</h1>
      <div className="bg-gray-100 dark:bg-black p-8 mx-auto max-w-2xl lg:max-w-none mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        <ProductCard
          imageUrl1="/images/cuas/rce1u/front2.jpg"
          imageUrl2="/images/cuas/rce1u/front1.jpg"
          productUrl={urls.cuas_rce1u}
          productName="products.rce1u"
          tKey="products.rce1u"
        />
      </div>
    </main>
  );
};

const FPVIndex: React.FC = () => {
  const { t } = useTranslation();
  return (
    <main className="dot-background p-8 flex flex-col">
      <h1 className="text-5xl font-bold m-auto text-center mb-4">{t("string.uav")}</h1>
      <div className="bg-gray-100 dark:bg-black p-8 mx-auto max-w-2xl lg:max-w-none mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        <ProductCard
          imageUrl1="/images/fpv/7inch/analog_preview.png"
          imageUrl2="/images/fpv/7inch/digital_preview.png"
          productUrl={urls.fpv_7inch}
          productName="product.fpv_7inch"
          tKey="product.fpv_7inch"
        />
        <ProductCard
          imageUrl1="/images/fpv/10inch/analog_preview.png"
          imageUrl2="/images/fpv/10inch/digital_preview.png"
          productUrl={urls.fpv_10inch}
          productName="product.fpv_10inch"
          tKey="product.fpv_10inch"
        />
      </div>
    </main>
  );
};

const AIModuleIndex = () => {
  const { t } = useTranslation();
  return (
    <main className="dot-background p-8 flex flex-col">
      <h1 className="text-5xl font-bold m-auto text-center mb-4">{t("string.ai_module")}</h1>
      <div className="bg-gray-100 dark:bg-black p-8 mx-auto max-w-2xl lg:max-w-none mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        <ProductCard
          imageUrl1="/images/ai_module/lokon1/InfraCamera.png"
          imageUrl2="/images/ai_module/lokon1/InfraCamera.png"
          productUrl={urls.ai_module_lokon1}
          productName="product.ai_module_lokon1"
          tKey="product.ai_module_lokon1"
        />
      </div>
    </main>
  );
};

const Index = () => {
  return (
    <>
      <AIModuleIndex />
      <FPVIndex />
    </>
  );
};

export { Index, AIModuleIndex, CuasIndex, FPVIndex };
