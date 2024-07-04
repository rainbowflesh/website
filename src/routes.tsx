import { Routes, Route } from "react-router-dom";
// pages
import { About } from "@pages/About";
import { AIModuleApel2K } from "@pages/products/ai_module/apel2k";
import { AIModuleLokon1 } from "@pages/products/ai_module/lokon1";
import { Contact } from "@pages/Contact";
import { Fpv10Inch, Fpv7Inch } from "@pages/products/fpv/index";
import { Home } from "@pages/Home";
import { Index, FPVIndex, AIModuleIndex } from "@pages/Product";
import { LearnMore } from "@pages/LearnMore";
import { Support } from "@pages/Support";
import { TermOfService } from "@pages/ToS";
import { Void } from "@pages/Void";

export const urls = {
  about: "/about",
  ai_module_lokon1: "/product/ai_module/lokon1",
  ai_module_apel2k: "/product/ai_module/apel2k",
  contact: "/contact",
  fpv_10inch: "/product/uav/10inch",
  fpv_7inch: "/product/uav/7inch",
  home: "/",
  learnmore: "/learnmore",
  product_ai_module: "/product/ai_module",
  product_cuas: "/product/cuas",
  product_uav: "/product/uav",
  product: "/product",
  support: "/support",
  tos: "/tos",
};

export const routes = [
  { path: "*", element: <Void /> },
  { path: urls.about, element: <About /> },
  { path: urls.ai_module_lokon1, element: <AIModuleLokon1 /> },
  { path: urls.ai_module_apel2k, element: <AIModuleApel2K /> },
  { path: urls.contact, element: <Contact /> },
  { path: urls.fpv_10inch, element: <Fpv10Inch /> },
  { path: urls.fpv_7inch, element: <Fpv7Inch /> },
  { path: urls.home, element: <Home /> },
  { path: urls.learnmore, element: <LearnMore /> },
  { path: urls.product_ai_module, element: <AIModuleIndex /> },
  { path: urls.product_uav, element: <FPVIndex /> },
  { path: urls.product, element: <Index /> },
  { path: urls.support, element: <Support /> },
  { path: urls.tos, element: <TermOfService /> },
];

export const PageRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
