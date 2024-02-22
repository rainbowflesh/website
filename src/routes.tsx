import { Routes, Route } from "react-router-dom";
// pages
import { About } from "./pages/About";
import { Consult } from "./pages/Consult";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { LearnMore } from "./pages/LearnMore";
import { CuasIndex, UavIndex } from "./pages/Product";
import { RCE1U } from "./pages/products/rce1u";
import { Services } from "./pages/Service";
import { Void } from "./pages/Void";
import { Fpv7Inch } from "./pages/products/fpv7inch";
import { Fpv10Inch } from "./pages/products/fpv10inch";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/consult" element={<Consult />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/learnmore" element={<LearnMore />}></Route>
      <Route path="/product/cuas" element={<CuasIndex />}></Route>
      <Route path="/product/uav" element={<UavIndex />}></Route>
      <Route path="/services" element={<Services />}></Route>
      {/* products */}
      <Route path="/product/cuas/rce1u" element={<RCE1U />}></Route>
      <Route path="/product/uav/fpv/7inch" element={<Fpv7Inch />}></Route>
      <Route path="/product/uav/fpv/10inch" element={<Fpv10Inch />}></Route>
      {/* 404 */}
      <Route path="*" element={<Void />}></Route>
    </Routes>
  );
};
