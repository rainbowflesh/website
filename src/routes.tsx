import { Routes, Route } from "react-router-dom";
// pages
import { About } from "@pages/About";
import { Contact } from "@pages/Contact";
import { Home } from "@pages/Home";
import { Support } from "@pages/Support";
import { TermOfService } from "@pages/ToS";
import { Void } from "@pages/Void";
// products
import { AIModuleApel2K } from "@pages/products/ai_module/apel2k";
import { AIModuleIrca170 } from "@pages/products/ai_module/irca170";
import { AIModuleLokon1 } from "@pages/products/ai_module/lokon1";
import { Index, FPVIndex, AIModuleIndex } from "@pages/Product";
import ProductIndex from "./index.json";

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
  { path: "*", element: <Void /> },
  { path: Pages.about, element: <About /> },
  { path: Pages.contact, element: <Contact /> },
  { path: Pages.home, element: <Home /> },
  { path: Pages.product_ai_module, element: <AIModuleIndex /> },
  { path: Pages.product_uav, element: <FPVIndex /> },
  { path: Pages.product, element: <Index /> },
  { path: Pages.support, element: <Support /> },
  { path: Pages.tos, element: <TermOfService /> },
  { path: ProductPages.ai_module_apel2k.route, element: <AIModuleApel2K /> },
  { path: ProductPages.ai_module_irca170.route, element: <AIModuleIrca170 /> },
  { path: ProductPages.ai_module_lokon1.route, element: <AIModuleLokon1 /> },
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
