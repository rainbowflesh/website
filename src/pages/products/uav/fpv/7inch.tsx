import { useState } from "react";
import { Tabs } from "react-daisyui";
import { ContactInfo } from "../../../../components/ContactInfo";

export const UavFpv7Inch = () => {
  const [is1Checked, set1Checked] = useState(true);
  const [is2Checked, set2Checked] = useState(false);
  const [is3Checked, set3Checked] = useState(false);
  return (
    <main className="p-4">
      <div className="flex flex-col items-start gap-6 left-0">
        <Tabs className="lg:tabs-md md:tabs-sm sm:tabs-xs" variant="lifted">
          <Tabs.Tab
            className="max-w-fit"
            active={is1Checked}
            onClick={() => {
              set1Checked(true);
              set2Checked(false);
              set3Checked(false);
            }}
          >
            Showcase
          </Tabs.Tab>
          <Tabs.Tab
            className="max-w-fit"
            active={is2Checked}
            onClick={() => {
              set1Checked(false);
              set2Checked(true);
              set3Checked(false);
            }}
          >
            Specs
          </Tabs.Tab>
          <Tabs.Tab
            className="max-w-fit"
            active={is3Checked}
            onClick={() => {
              set3Checked(true);
              set2Checked(false);
              set1Checked(false);
            }}
          >
            Contact sales
          </Tabs.Tab>
        </Tabs>
      </div>
      {is1Checked && (
        <div className="w-full h-full bg-base-100 border-base-300 rounded-box">
          <img className="w-full h-full" src="/images/uav/fpv/7inch/showcase.jpg" />
        </div>
      )}
      {is3Checked && (
        <div>
          <ContactInfo />
        </div>
      )}
    </main>
  );
};
