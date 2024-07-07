import { Card, Stack } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ProductPages } from "../routes";
import React from "react";

interface ProductProps {
  img1: string;
  img2: string | undefined;
  url: string;
  name: string;
  description: string;
}
const ProductCard: React.FC<ProductProps> = ({ img1, img2, url, description, name }) => {
  const { t } = useTranslation();
  const translatedDescription = t(description);
  const translatedName = t(name);
  return (
    <Card className="px-4 m-auto">
      <Link className="group m-auto mt-4" to={url}>
        <h1 className="text-lg m-auto text-center p-1">{translatedDescription}</h1>
        <Stack>
          <img
            src={img1}
            alt="Image 1"
            className="rounded transition-all duration-400 ease-in-out hover:-translate-y-1 delay-200 bg-premium-color"
          />
          {img2 && (
            <img
              src={img2}
              alt="Image 2"
              className="rounded transition-all ease-in group-hover:!z-10 group-hover:opacity-100 duration-200 bg-gray-100 dark:bg-gray-950"
            />
          )}
        </Stack>
      </Link>
      <Card.Title tag="h2" className="m-auto mt-4 mb-4 items-center text-center">
        {translatedName}
      </Card.Title>
    </Card>
  );
};

const FPVIndex: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="dot-background dark:dot-background-dark p-8 flex-1 rounded-box">
      <h1 className="text-5xl font-bold m-auto text-center mb-4">{t("string.uav")}</h1>
      <div className="bg-gray-100 dark:bg-black p-8 mx-auto max-w-2xl lg:max-w-none mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
        <ProductCard
          img1="/images/fpv/10inch/digital_preview.png"
          img2="/images/fpv/10inch/analog_preview.png"
          url={ProductPages.fpv_10inch.route}
          name="product.fpv.10inch.name"
          description="string.smart_fpv"
        />
        <ProductCard
          img1="/images/fpv/7inch/analog_preview.png"
          img2="/images/fpv/7inch/digital_preview.png"
          url={ProductPages.fpv_7inch.route}
          name="product.fpv.7inch.name"
          description="string.smart_fpv"
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
      <div className="bg-gray-100 dark:bg-black p-8 mx-auto max-w-md lg:max-w-none mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
        <ProductCard
          img1="/images/ai_module/lokon1/smart_cam_sys.png"
          img2="/images/ai_module/lokon1/cover.jpg"
          url={ProductPages.ai_module_lokon1.route}
          name="product.ai_module.lokon1.name"
          description="string.terminal_guidance"
        />
        <ProductCard
          img1="/images/ai_module/apel2k/cover.png"
          img2={undefined}
          url={ProductPages.ai_module_apel2k.route}
          name="product.ai_module.apel2k.name"
          description="string.navigation_pod"
        />
        {/* <ProductCard
          img1="/images/ai_module/aim100/cover.png"
          img2={undefined}
          url={ProductPages.ai_module_aim100.route}
          name="product.ai_module.aim100.name"
          description="string.navigation_pod"
        /> */}
        <ProductCard
          img1="/images/ai_module/irca170/cover.png"
          img2={undefined}
          url={ProductPages.ai_module_irca170.route}
          name="product.ai_module.irca170.name"
          description="string.tracking_pod"
        />
        {/* <ProductCard
          img1="/images/ai_module/irca58/cover.png"
          img2={undefined}
          url={ProductPages.ai_module_irca58.route}
          name="product.ai_module.irca58.name"
          description="string.tracking_pod"
        /> */}
        {/* <ProductCard
          img1="/images/ai_module/lidara1/cover.png"
          img2={undefined}
          url={ProductPages.ai_module_lidara1.route}
          name="product.ai_module.lidara1.name"
          description="string.lidar"
        /> */}
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="col-span-1 grid dot-background dark:dot-background-dark  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 sm:gap-48 md:gap-0 lg:gap-0 flex-1">
      <div className="overflow-auto">
        <AIModuleIndex />
      </div>
    </div>
  );
};

export { Index, AIModuleIndex };
