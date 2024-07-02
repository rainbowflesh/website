import React, { useState } from "react";
import { Tabs } from "react-daisyui";
import { ContactInfo } from "@components/ContactInfo";
import { useTranslation } from "react-i18next";

interface FpvProps {
  imagePath: string;
}

const FPVPageLayout: React.FC<FpvProps> = ({ imagePath }) => {
  const [activeTab, setActiveTab] = useState<"showcase" | "specs" | "contact">("showcase");
  const { t } = useTranslation();

  const handleTabClick = (tab: "showcase" | "specs" | "contact") => {
    setActiveTab(tab);
  };

  return (
    <main className="p-4">
      <div className="flex flex-col items-start gap-6 left-0">
        <Tabs className="lg:tabs-md md:tabs-sm sm:tabs-xs" variant="lifted">
          <Tabs.Tab className="max-w-fit" active={activeTab === "showcase"} onClick={() => handleTabClick("showcase")}>
            {t("string.showcase")}
          </Tabs.Tab>
          <Tabs.Tab className="max-w-fit" active={activeTab === "specs"} onClick={() => handleTabClick("specs")}>
            {t("string.tech_specs")}
          </Tabs.Tab>
          <Tabs.Tab className="max-w-fit" active={activeTab === "contact"} onClick={() => handleTabClick("contact")}>
            {t("string.contact_sale")}
          </Tabs.Tab>
        </Tabs>
      </div>
      {activeTab === "showcase" && (
        <div className="w-full h-full bg-base-100 border-base-300 rounded-box">
          <img className="w-full h-full" src={imagePath} alt="Showcase" />
        </div>
      )}
      {activeTab === "contact" && (
        <div>
          <ContactInfo />
        </div>
      )}
    </main>
  );
};

export default FPVPageLayout;
