import { useState } from "react";
import { Dropdown, Menu, Navbar } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { I18nMenu } from "./I18nMenu";
import { Logo } from "./Logos";
import { Pages, ProductPages } from "../routes";

export const NavigationBar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isProductMenuOpen, setOpenProductMenu] = useState(false);
  let productMenuTimer: number = 0;
  const handleProductMenuMouseEnter = () => {
    clearTimeout(productMenuTimer);
    setOpenProductMenu(true);
  };
  const handleProductMenuMouseLeave = () => {
    productMenuTimer = window.setTimeout(() => {
      setOpenProductMenu(false);
    }, 600);
  };

  return (
    <Navbar className="line-background font-sans bg-base-300 rounded-box border-2 mx-auto max-w-screen-xl h-4">
      <Navbar.Start className="flex flex-wrap md:flex-wrap-reverse truncate">
        <Logo />
      </Navbar.Start>
      <Navbar.Center className="flex flex-wrap md:flex-wrap-reverse h-16 items-center justify-between z-50">
        <div className="hidden md:block" aria-label="Global">
          <Menu horizontal={true} className="">
            <Menu.Item
              className="flex items-center text-sm bg-slate-50relative"
              onMouseEnter={handleProductMenuMouseEnter}
              onMouseLeave={handleProductMenuMouseLeave}
            >
              <details open={isProductMenuOpen}>
                <summary>{t("string.product")}</summary>
                <ul id="navbar-dropdown1" className="bg-slate-50 dark:bg-base-300 items-start min-w-max">
                  {/* <li>
                    <Link className="text-stone-500 dark:text-stone-400" to={Pages.product_uav}>
                      {t("string.smart_uav")}
                    </Link>
                    <ul>
                      <li>
                        <Link className="text-lg" to={ProductPages.fpv_10inch.route}>
                          {t("product.fpv.10inch.name")}
                        </Link>
                      </li>
                      <li>
                        <Link className="text-lg" to={ProductPages.fpv_7inch.route}>
                          {t("product.fpv.7inch.name")}
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  <li className="items-start">
                    <Link className="text-stone-500 dark:text-stone-400" to={Pages.product_ai_module}>
                      {t("string.ai_module")}
                    </Link>
                    <ul>
                      <p className="text-xs mt-2"> {t("string.terminal_guidance")}</p>
                      <li>
                        <Link className="text-lg" to={ProductPages.ai_module_lokon1.route}>
                          {t("product.ai_module.lokon1.name")}
                        </Link>
                      </li>
                      <p className="text-xs mt-4"> {t("string.navigation_pod")}</p>
                      <li>
                        <Link className="text-lg" to={ProductPages.ai_module_apel2k.route}>
                          {t("product.ai_module.apel2k.name")}
                        </Link>
                      </li>
                      {/* <li>
                        <Link className="text-lg" to={ProductPages.ai_module_aim100.route}>
                          {t("product.ai_module.aim100.name")}
                        </Link>
                      </li> */}
                      <p className="text-xs mt-4"> {t("string.tracking_pod")}</p>
                      <li>
                        <Link className="text-lg" to={ProductPages.ai_module_irca170.route}>
                          {t("product.ai_module.irca170.name")}
                        </Link>
                      </li>
                      {/* <li>
                        <Link className="text-lg" to={ProductPages.ai_module_irca58.route}>
                          {t("product.ai_module.irca58.name")}
                        </Link>
                      </li> */}
                      {/* <p className="text-xs mt-4"> {t("string.lidar")}</p>
                      <li>
                        <Link className="text-lg" to={ProductPages.ai_module_lidara1.route}>
                          {t("product.ai_module.lidara1.name")}
                        </Link>
                      </li> */}
                    </ul>
                  </li>
                </ul>
              </details>
            </Menu.Item>
            <Menu.Item className="relative">
              <Link to={Pages.contact} className="ghost rounded">
                {t("string.contact")}
              </Link>
            </Menu.Item>
            <Menu.Item className="relative">
              <Link to={Pages.about} className="ghost rounded">
                {t("string.about")}
              </Link>
            </Menu.Item>
            <Menu.Item className="relative">
              <Link to={Pages.support} className="ghost rounded">
                {t("string.support")}
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      </Navbar.Center>
      <Navbar.End className="z-50">
        <div className="mr-4">
          <I18nMenu />
        </div>
        <Dropdown className="flex items-center gap-4">
          <div className="block md:hidden">
            <Dropdown.Toggle className="btn btn-ghost rounded-btn" button={false}>
              <button className="rounded bg-gray-100 dark:bg-base-200 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-52 mt-2 -ml-32 dark:bg-gray-950">
              <Dropdown.Item
                onClick={() => {
                  navigate("product");
                }}
              >
                {t("string.product")}
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  navigate("contact");
                }}
              >
                {t("string.contact")}
              </Dropdown.Item>
            </Dropdown.Menu>
          </div>
        </Dropdown>
      </Navbar.End>
    </Navbar>
  );
};
