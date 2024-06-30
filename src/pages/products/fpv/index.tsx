import React from "react";
import FPVPageLayout from "./layout";

const Fpv10Inch: React.FC = () => {
  return <FPVPageLayout imagePath="/images/fpv/10inch/showcase.jpg" />;
};

const Fpv7Inch: React.FC = () => {
  return <FPVPageLayout imagePath="/images/fpv/7inch/showcase.jpg" />;
};

export { Fpv10Inch, Fpv7Inch };
