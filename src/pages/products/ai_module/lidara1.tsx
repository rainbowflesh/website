import { useTranslation } from "react-i18next";

export const AIModuleLidara1 = () => {
  const { t } = useTranslation();
  const features = [
    { name: t("string.ai_cam"), description: t("product.ai_module.lidara1.ai_cam_specs") },
    { name: t("string.work_method"), description: t("product.ai_module.lidara1.ai_cam_description") },
    { name: t("string.wa_cam"), description: t("product.ai_module.lidara1.wa_cam_specs") },
    { name: t("string.work_method"), description: t("product.ai_module.lidara1.wa_cam_description") },
    { name: t("string.ir_cam"), description: t("product.ai_module.lidara1.ir_cam_specs") },
    { name: t("string.work_method"), description: t("product.ai_module.lidara1.ir_cam_description") },
    { name: t("string.accuracy"), description: t("product.ai_module.lidara1.ai_accuracy") },
    { name: t("string.tdp"), description: t("product.ai_module.lidara1.ai_tdp") },
    { name: t("string.size"), description: t("product.ai_module.lidara1.ai_size") },
    { name: t("string.weight"), description: t("product.ai_module.lidara1.ai_weight") },
    { name: t("string.power_source"), description: t("product.ai_module.lidara1.ai_power_source") },
  ];
  return (
    <div className="dot-background dark:dot-background-dark">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="-mt-5 bg-white dark:bg-base-100 rounded-box">
          <div className="textbox mt-4 mr-4 mb-4 ml-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
              {t("string.tech_specs")}
            </h2>
            <p className="pt-4 pb-4 text-lg text-gray-500 dark:text-gray-400 ">{t("product.ai_module.lidara1.name")}</p>
            <p>{t("product.ai_module.lidara1.introduce")}</p>
            <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-2">
                  <dt className="font-medium text-gray-900 dark:text-gray-50">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500 dark:text-gray-400">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 relative overflow-hidden">
          <img
            src="/images/ai_module/lidara1/cover.jpg"
            className="product-detail-img-p1 rounded-lg bg-gray-100 dark:bg-base-200"
          />
        </div>
      </div>
    </div>
  );
};
