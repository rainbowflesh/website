import { Routes, Route } from "react-router-dom";
// pages
import { About } from "./pages/About";
import { Consult } from "./pages/Consult";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { LearnMore } from "./pages/LearnMore";
import { CuasIndex, Index, FPVIndex } from "./pages/Product";
import { RCE1U } from "./pages/products/cuas/rce1u";
import { Services } from "./pages/Service";
import { Void } from "./pages/Void";
import { Fpv10Inch, Fpv7Inch } from "@pages/products/fpv/index";

export const urls = {
  home: "/",
  about: "/about",
  consult: "/consult",
  contact: "/contact",
  learnmore: "/learnmore",
  product: "/product",
  product_cuas: "/product/cuas",
  product_fpv: "/product/fpv",
  product_ai_module: "/product/ai_module",
  services: "/services",
  cuas_rce1u: "/product/cuas/rce1u",
  fpv_10inch: "/product/fpv/10inch",
  fpv_7inch: "/product/fpv/7inch",
  ai_module_lokon1: "/product/ai_module/lokon1",
};

export const routes = [
  { path: urls.home, element: <Home /> },
  { path: urls.about, element: <About /> },
  { path: urls.consult, element: <Consult /> },
  { path: urls.contact, element: <Contact /> },
  { path: urls.learnmore, element: <LearnMore /> },
  { path: urls.product, element: <Index /> },
  { path: urls.product_cuas, element: <CuasIndex /> },
  { path: urls.product_fpv, element: <FPVIndex /> },
  { path: urls.services, element: <Services /> },
  // products
  { path: urls.cuas_rce1u, element: <RCE1U /> },
  { path: urls.fpv_7inch, element: <Fpv7Inch /> },
  { path: urls.fpv_10inch, element: <Fpv10Inch /> },
  // 404
  { path: "*", element: <Void /> },
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
