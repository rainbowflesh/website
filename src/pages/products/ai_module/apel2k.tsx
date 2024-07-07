import { useTranslation } from "react-i18next";

export const AIModuleApel2K = () => {
  const { t } = useTranslation();
  const features: Array<any> = t("product.ai_module.apel2k.features", {
    returnObjects: true,
  });

  const specs = [
    { name: t("string.operating_altitude"), description: t("product.ai_module.apel2k.operating_altitude_specs") },
    { name: t("string.positioning_accuracy"), description: t("product.ai_module.apel2k.positioning_accuracy_specs") },
    {
      name: t("string.positioning_frequency"),
      description: t("product.ai_module.apel2k.positioning_frequency_specs"),
    },
    { name: t("string.laser_ranging"), description: t("product.ai_module.apel2k.laser_ranging_specs") },
    { name: t("string.io_interfaces"), description: t("product.ai_module.apel2k.io_interfaces_specs") },
    { name: t("string.installation_size"), description: t("product.ai_module.apel2k.installation_size_specs") },
    { name: t("string.installation_weight"), description: t("product.ai_module.apel2k.installation_weight_specs") },
    { name: t("string.tdp"), description: t("product.ai_module.apel2k.tdp_specs") },
    { name: t("string.operating_temperature"), description: t("product.ai_module.apel2k.operating_temperature_specs") },
  ];
  return (
    <div className="dot-background dark:dot-background-dark">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="-mt-5 bg-white dark:bg-base-100 rounded-box">
          <div className="textbox mt-4 mr-4 mb-4 ml-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
              {t("string.tech_specs")}
            </h2>
            <p className="pt-4 pb-4 text-lg text-gray-500 dark:text-gray-400 ">{t("product.ai_module.apel2k.name")}</p>
            <p>{t("product.ai_module.apel2k.introduce")}</p>
            <br />
            <p>{t("product.ai_module.apel2k.application_scenario")}</p>
            <div className="border-t border-gray-200 pt-2 mt-8">
              <dt className="font-medium text-gray-900 dark:text-gray-50">{t("string.features")}</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {typeof features === "string" ? (
                  <p>{features}</p>
                ) : (
                  <ul className="list-disc px-4">
                    {features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}
              </dd>
            </div>
            <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {specs.map((feature) => (
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
            src="/images/ai_module/apel2k/cover.png"
            className="product-detail-img-p1 rounded-lg bg-gray-100 dark:bg-base-200"
          />
          {/* <img
            src="/images/ai_module/apel2k/apel2k.gif"
            className="product-detail-img-p1 bg-gray-100 dark:bg-base-200 rounded-lg shadow-lg m-auto"
          /> */}
        </div>
      </div>
    </div>
  );
};
