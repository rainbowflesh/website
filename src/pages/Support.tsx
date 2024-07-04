import React, { useState } from "react";
import { Button, Card, Divider, Hero, Link, Table, Tooltip } from "react-daisyui";
import { useTranslation } from "react-i18next";
import TableBody from "../../public/downloads/index.json";

interface TableRow {
  id: number;
  category: string;
  product_name: string;
  type: string;
  lang: string;
  url: string;
}

const TableAction = (link: string) => {
  return (
    <Link href={link} target="_blank">
      <Button variant="outline" color="primary" animation={true}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
          />
        </svg>
      </Button>
    </Link>
  );
};

export const Support: React.FC = () => {
  const { t } = useTranslation();
  const TableBodyWithIds: any = TableBody.map((item, index) => ({
    ...item,
    id: index + 1,
  }));
  const [data] = useState<TableRow[]>(TableBodyWithIds);
  const [filteredData, setFilteredData] = useState<TableRow[]>(data);
  const [sortConfig, setSortConfig] = useState<{ key: keyof TableRow; direction: "asc" | "desc" | null }>({
    key: "id",
    direction: null,
  });
  const handleSort = (key: keyof TableRow) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    const sortedData = [...filteredData].sort((a: any, b: any) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setFilteredData(sortedData);
  };
  function GetLanguageName(countryCode: string) {
    switch (countryCode) {
      case "en_US":
        return "English";
      case "zh_cn":
        return "中文";
      case "ru_RU":
        return "Русский";
      case "ja_JP":
        return "日本語";
      default:
        return countryCode;
    }
  }

  return (
    <Hero className="dot-background dark:dot-background-dark flex-1">
      <Hero.Content className="text-center">
        <div className="max-w-xl bg-slate-50 dark:bg-base-200 rounded-box p-4">
          <h1 className="text-5xl font-bold">{t("string.support_center")}</h1>
          <p className="py-6">{t("text.support_center")}</p>
          <Card side="lg" className="bg-slate-100 dark:bg-base-300 rounded-box ">
            <Card.Body>
              <Table className="min-w-128">
                <Table.Head>
                  <Tooltip message={"click to sort"}>
                    <span onClick={() => handleSort("id")}>#</span>
                  </Tooltip>
                  <span onClick={() => handleSort("category")}>{t("string.category")}</span>
                  <span onClick={() => handleSort("product_name")}>{t("string.product_name")}</span>
                  <span onClick={() => handleSort("lang")}>{t("string.language")}</span>
                  <span onClick={() => handleSort("type")}>{t("string.type")}</span>
                  <span>{t("string.download")}</span>
                </Table.Head>
                <Table.Body>
                  {filteredData.map((row) => (
                    <Table.Row key={row.id}>
                      <span>{row.id}</span>
                      <span>{t(row.category)}</span>
                      <span>{t(row.product_name)}</span>
                      <span>{GetLanguageName(row.lang)}</span>
                      <span>{t(row.type)}</span>
                      <span>{TableAction(row.url)}</span>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Card.Body>
          </Card>
          <div>
            <Divider className="dark:text-white ">{t("string.or")}</Divider>
            <h1 className="text-4xl font-bold mt-2 mb-2">{t("text.email_us")}</h1>
            <a className="text-gray-400 mb-2" href={"mailto:contact@zeewind-uav.com"}>
              <span className="text-black dark:text-white">{t("string.tech_support")}: </span>
              contact@zeewind-uav.com
            </a>
          </div>
        </div>
      </Hero.Content>
    </Hero>
  );
};
