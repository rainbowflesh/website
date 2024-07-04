import { useState } from "react";
import { Dropdown, Menu, Navbar } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { I18nMenu } from "./I18nMenu";
import { Logo } from "./Logos";
import { urls } from "../routes";

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
    <Navbar className="line-background px-2 font-sans bg-base-300 rounded-box border-2 mx-auto max-w-screen-xl sm:px-6 lg:px-8 h-4">
      <Navbar.Start className="flex flex-wrap md:flex-wrap-reverse truncate -ml-4">
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
                  <li>
                    <Link className="text-stone-500 dark:text-stone-400" to={urls.product_uav}>
                      {t("string.smart_uav")}
                    </Link>
                    <ul>
                      <li>
                        <Link className="text-lg" to={urls.fpv_10inch}>
                          {t("product.fpv.10inch.name")}
                        </Link>
                      </li>
                      <li>
                        <Link className="text-lg" to={urls.fpv_7inch}>
                          {t("product.fpv.7inch.name")}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className=" items-start ">
                    <Link className="text-stone-500 dark:text-stone-400" to={urls.product_ai_module}>
                      {t("string.ai_module")}
                    </Link>
                    <ul>
                      <li>
                        <Link className="text-lg" to={urls.ai_module_lokon1}>
                          {t("product.ai_module.lokon1.name")}
                        </Link>
                      </li>
                      <li>
                        <Link className="text-lg" to={urls.ai_module_apel2k}>
                          {t("product.ai_module.apel2k.name")}
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </details>
            </Menu.Item>
            <Menu.Item className="relative">
              <Link to={urls.contact} className="ghost rounded">
                {t("string.contact")}
              </Link>
            </Menu.Item>
            <Menu.Item className="relative">
              <Link to={urls.about} className="ghost rounded">
                {t("string.about")}
              </Link>
            </Menu.Item>
            <Menu.Item className="relative">
              <Link to={urls.support} className="ghost rounded">
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
