import { useTranslation } from "react-i18next";

export const AIModuleIrca170 = () => {
  const { t } = useTranslation();
  const specs = [
    { name: t("string.ptz"), description: t("product.ai_module.irca170.ptz", { returnObjects: true }) },
    {
      name: t("string.visible_light_camera"),
      description: t("product.ai_module.irca170.vll", { returnObjects: true }),
    },
    { name: t("string.infrared_camera"), description: t("product.ai_module.irca170.irl", { returnObjects: true }) },
    { name: t("string.env_adapt"), description: t("product.ai_module.irca170.env_adapt", { returnObjects: true }) },
    { name: t("string.weight"), description: t("product.ai_module.irca170.weight") },
    { name: t("string.tdp"), description: t("product.ai_module.irca170.tdp") },
  ];
  const features: Array<any> = t("product.ai_module.irca170.features", { returnObjects: true });
  return (
    <div className="dot-background dark:dot-background-dark">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="-mt-5 bg-white dark:bg-base-100 rounded-box">
          <div className="textbox mt-4 mr-4 mb-4 ml-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
              {t("string.tech_specs")}
            </h2>
            <p className="pt-4 pb-4 text-lg text-gray-500 dark:text-gray-400 ">{t("product.ai_module.irca170.name")}</p>
            <p>{t("product.ai_module.irca170.introduce")}</p>
            <br />
            <p>{t("product.ai_module.irca170.application_scenario")}</p>
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
              <dt className="font-medium text-gray-900 dark:text-gray-50 mt-8">{t("string.system_components")}</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {t("product.ai_module.irca170.system_components")}
              </dd>
            </div>
            <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {specs.map((spec) => (
                <div key={spec.name} className="border-t border-gray-200 pt-2">
                  <dt className="font-medium text-gray-900 dark:text-gray-50">{spec.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {typeof spec.description === "string" ? (
                      <p>{spec.description}</p>
                    ) : (
                      <ul>
                        {Object.keys(spec.description).map((key) => (
                          <li key={key}>
                            <strong>{key}:</strong> {(spec.description as { [key: string]: string })[key]}
                          </li>
                        ))}
                      </ul>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 relative overflow-hidden">
          <img
            src="/images/ai_module/irca170/cover.png"
            className="product-detail-img-p1 rounded-lg bg-gray-100 dark:bg-base-200"
          />
          <img
            src="/images/ai_module/irca170/irca170.gif"
            className="product-detail-img-p1 bg-gray-100 dark:bg-base-200 rounded-lg shadow-lg m-auto"
          />
        </div>
      </div>
    </div>
  );
};
