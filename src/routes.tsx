import ProductIndex from "./index.json";
import { Routes, Route } from "react-router-dom";
// pages
import { About } from "@pages/About";
import { Contact } from "@pages/Contact";
import { Home } from "@pages/Home";
import { Index, AIModuleIndex } from "@pages/Product";
import { Support } from "@pages/Support";
import { TermOfService } from "@pages/ToS";
import { Void } from "@pages/Void";
// products
import { AIModuleAim100 } from "@pages/products/ai_module/aim100";
import { AIModuleApel2K } from "@pages/products/ai_module/apel2k";
import { AIModuleIrca170 } from "@pages/products/ai_module/irca170";
import { AIModuleIrca58 } from "@pages/products/ai_module/irca58";
import { AIModuleLidara1 } from "@pages/products/ai_module/lidara1";
import { AIModuleLokon1 } from "@pages/products/ai_module/lokon1";
import { Fpv10Inch, Fpv7Inch } from "@pages/products/fpv";

const ProductPages: ProductIndexType = ProductIndex[0];

const Pages = {
  about: "/about",
  contact: "/contact",
  home: "/",
  learnmore: "/learnmore",
  product_ai_module: "/product/ai_module",
  product_cuas: "/product/cuas",
  product_uav: "/product/uav",
  product: "/product",
  support: "/support",
  tos: "/tos",
};

const routes = [
  // pages
  { path: "*", element: <Void /> },
  { path: Pages.about, element: <About /> },
  { path: Pages.contact, element: <Contact /> },
  { path: Pages.home, element: <Home /> },
  { path: Pages.product_ai_module, element: <AIModuleIndex /> },
  { path: Pages.product, element: <Index /> },
  { path: Pages.support, element: <Support /> },
  { path: Pages.tos, element: <TermOfService /> },
  // products
  { path: ProductPages.ai_module_aim100.route, element: <AIModuleAim100 /> },
  { path: ProductPages.ai_module_apel2k.route, element: <AIModuleApel2K /> },
  { path: ProductPages.ai_module_irca170.route, element: <AIModuleIrca170 /> },
  { path: ProductPages.ai_module_irca58.route, element: <AIModuleIrca58 /> },
  { path: ProductPages.ai_module_lidara1.route, element: <AIModuleLidara1 /> },
  { path: ProductPages.ai_module_lokon1.route, element: <AIModuleLokon1 /> },
  { path: ProductPages.fpv_10inch.route, element: <Fpv10Inch /> },
  { path: ProductPages.fpv_7inch.route, element: <Fpv7Inch /> },
];

const PageRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export { PageRoutes, routes, Pages, ProductPages };
