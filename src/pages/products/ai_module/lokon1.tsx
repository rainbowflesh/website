import { useTranslation } from "react-i18next";

export const LOKON1 = () => {
  const { t } = useTranslation();
  const features = [
    { name: t("detail.work_method"), description: t("detail_value.work_method") },
    { name: t("detail.applicable_jamming"), description: t("detail_value.applicable_jamming") },
    { name: t("detail.jamming_freq"), description: t("detail_value.jamming_freq") },
    { name: t("detail.jamming_radius"), description: t("detail_value.jamming_radius") },
    { name: t("detail.battery_life"), description: t("detail_value.battery_life") },
    { name: t("detail.tdp"), description: t("detail_value.tdp") },
    { name: t("detail.power_source"), description: t("detail_value.power_source") },
    { name: t("detail.weight"), description: t("detail_value.weight") },
    { name: t("detail.dimensions"), description: t("detail_value.dimensions") },
    { name: t("detail.protect_level"), description: t("detail_value.protect_level") },
    { name: t("detail.working_temp"), description: t("detail_value.working_temp") },
    { name: t("detail.system_upgrade"), description: t("detail_value.system_upgrade") },
  ];
  return (
    <div className="dot-background">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="-mt-5 bg-white dark:bg-base-100 rounded-box">
          <div className="textbox mt-4 mr-4 mb-4 ml-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
              Technical Specifications
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 ">{t("products.rce1u_describe_short")}</p>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900 dark:text-gray-50">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500 dark:text-gray-400">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="/images/cuas/rce1u/front1.jpg"
            className="product-detail-img-p1 rounded-lg bg-gray-100 dark:bg-base-200"
          />
          <img
            src="/images/cuas/rce1u/back1.jpg"
            className="product-detail-img-p2 rounded-lg bg-gray-100 dark:bg-base-200 m-auto "
          />
          <img
            src="/images/cuas/rce1u/back.jpg"
            className="product-detail-img-p3 rounded-lg bg-gray-100 dark:bg-base-200 m-auto"
          />
          <img
            src="/images/cuas/rce1u/front2.jpg"
            className="product-detail-img-p4 rounded-lg bg-gray-100 dark:bg-base-200"
          />
        </div>
        <p className="text-xs text-balance bg-white dark:bg-black rounded-box">* {t("mention.rce1u")}</p>
      </div>
    </div>
  );
};
