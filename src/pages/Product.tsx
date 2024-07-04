import { Card, Stack } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { urls } from "../routes";
import React from "react";

interface ProductProps {
  img1: string;
  img2: string;
  url: string;
  name: string;
  description: string;
  tKey: string;
}

const ProductCard: React.FC<ProductProps> = ({ img1, img2, url, description, tKey }) => {
  const { t } = useTranslation();
  return (
    <Card className="px-4 m-auto">
      <Link className="group m-auto mt-4" to={url}>
        <h1 className="text-lg m-auto text-center p-1">{t(description)}</h1>
        <Stack>
          <img
            src={img1}
            alt="Image 1"
            className="rounded transition-all duration-400 ease-in-out hover:-translate-y-1 delay-200 bg-premium-color"
          />
          <img
            src={img2}
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

const FPVIndex: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="dot-background dark:dot-background-dark p-8 flex-1 rounded-box">
      <h1 className="text-5xl font-bold m-auto text-center mb-4">{t("string.uav")}</h1>
      <div className="bg-gray-200 dark:bg-black p-8 mx-auto max-w-2xl lg:max-w-none mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        <ProductCard
          img1="/images/fpv/10inch/digital_preview.png"
          img2="/images/fpv/10inch/analog_preview.png"
          url={urls.fpv_10inch}
          name="product.fpv.10inch.name"
          description="string.smart_fpv"
          tKey="product.fpv.10inch.name"
        />
        <ProductCard
          img1="/images/fpv/7inch/analog_preview.png"
          img2="/images/fpv/7inch/digital_preview.png"
          url={urls.fpv_7inch}
          name="product.fpv.7inch.name"
          description="string.smart_fpv"
          tKey="product.fpv.7inch.name"
        />
      </div>
    </div>
  );
};

const AIModuleIndex = () => {
  const { t } = useTranslation();
  return (
    <div className="dot-background dark:dot-background-dark p-8 flex-1 rounded-box">
      <h1 className="text-5xl font-bold m-auto text-center mb-4">{t("string.ai_module")}</h1>
      <div style={{ height: "50lvh" }}>
        <div className="bg-gray-100 dark:bg-black p-8 mx-auto max-w-md lg:max-w-none mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <ProductCard
            img1="/images/ai_module/lokon1/smart_cam_sys.png"
            img2="/images/ai_module/lokon1/cover.jpg"
            url={urls.ai_module_lokon1}
            name="product.ai_module.lokon1.name"
            description="string.terminal_guidance"
            tKey="product.ai_module.lokon1.name"
          />
          <ProductCard
            img1="/images/ai_module/apel2k/cover.png"
            img2="/images/ai_module/apel2k/cover.png"
            url={urls.ai_module_apel2k}
            name="product.ai_module.apel2k.name"
            description="string.navigation_pod"
            tKey="product.ai_module.apel2k.name"
          />
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="col-span-1">
      <AIModuleIndex />
      <FPVIndex />
    </div>
  );
};

export { Index, AIModuleIndex, FPVIndex };
