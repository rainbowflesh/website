import { Dropdown } from "react-daisyui";
import { useTranslation } from "react-i18next";

export const I18nMenu = () => {
  const { i18n } = useTranslation();
  return (
    <Dropdown className="flex items-center gap-4">
      <Dropdown.Toggle button={false}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
          />
        </svg>
      </Dropdown.Toggle>
      <Dropdown.Menu className="mt-48 relative -ml-24">
        <Dropdown.Item
          onClick={() => {
            i18n.changeLanguage("en_US");
          }}
        >
          English
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            i18n.changeLanguage("zh_cn");
          }}
        >
          中文 WIP
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            i18n.changeLanguage("ru_RU");
          }}
        >
          Русский
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            i18n.changeLanguage("ja_JP");
          }}
        >
          日本語
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
