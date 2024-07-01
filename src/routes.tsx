import { Routes, Route } from "react-router-dom";
// pages
import { About } from "./pages/About";
import { AIModuleLokon1 } from "@pages/products/ai_module/lokon1";
import { Contact } from "./pages/Contact";
import { CuasIndex, Index, FPVIndex, AIModuleIndex } from "./pages/Product";
import { Fpv10Inch, Fpv7Inch } from "@pages/products/fpv/index";
import { Home } from "./pages/Home";
import { LearnMore } from "./pages/LearnMore";
import { RCE1U } from "./pages/products/cuas/rce1u";
import { Support } from "@pages/Support";
import { Void } from "./pages/Void";

export const urls = {
  about: "/about",
  ai_module_lokon1: "/product/ai_module/lokon1",
  contact: "/contact",
  cuas_rce1u: "/product/cuas/rce1u",
  fpv_10inch: "/product/fpv/10inch",
  fpv_7inch: "/product/fpv/7inch",
  home: "/",
  learnmore: "/learnmore",
  product_ai_module: "/product/ai_module",
  product_cuas: "/product/cuas",
  product_fpv: "/product/fpv",
  product: "/product",
  support: "/support",
};

export const routes = [
  { path: "*", element: <Void /> },
  { path: urls.about, element: <About /> },
  { path: urls.ai_module_lokon1, element: <AIModuleLokon1 /> },
  { path: urls.contact, element: <Contact /> },
  { path: urls.cuas_rce1u, element: <RCE1U /> },
  { path: urls.fpv_10inch, element: <Fpv10Inch /> },
  { path: urls.fpv_7inch, element: <Fpv7Inch /> },
  { path: urls.home, element: <Home /> },
  { path: urls.learnmore, element: <LearnMore /> },
  { path: urls.product_ai_module, element: <AIModuleIndex /> },
  { path: urls.product_cuas, element: <CuasIndex /> },
  { path: urls.product_fpv, element: <FPVIndex /> },
  { path: urls.product, element: <Index /> },
  { path: urls.support, element: <Support /> },
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
