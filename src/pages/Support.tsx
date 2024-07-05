import React, { useState } from "react";
import { Card, Divider, Dropdown, Hero, Link, Menu, Table, Tooltip } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { GetLanguageName } from "@utils/utils";
import ProductIndex from "../index.json";

const DownloadMenu = (rowData: any) => {
  if (rowData.data) {
    let downloadData: DownloadDataType = rowData.data;
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle className="z-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </Dropdown.Toggle>
          <Dropdown.Menu className="z-50">
            <Menu>
              {Object.entries(downloadData).map(([countryCode, downloadUrl]) => (
                <Menu.Item key={countryCode}>
                  <Link href={downloadUrl} target="_blank" className="max-h-min">
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
                    <span className="text-nowrap">{GetLanguageName(countryCode)}</span>
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
};

export const Support: React.FC = () => {
  const { t } = useTranslation();
  const Data: any = ProductIndex;
  const product: any[] = Object.keys(ProductIndex[0]).map((key: any, index) => {
    const product = Data[0][key];
    return {
      ...product,
      id: index + 1,
    };
  });

  const [filteredData, setFilteredData] = useState<DownloadDataType[]>(Object.values(product));
  const [sortConfig, setSortConfig] = useState<{ key: keyof DownloadDataType; direction: "asc" | "desc" | null }>({
    key: "name",
    direction: null,
  });

  const handleSort = (key: keyof DownloadDataType) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    const sortedData = [...filteredData].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setFilteredData(sortedData);
  };

  return (
    <Hero className="dot-background dark:dot-background-dark flex-1">
      <Hero.Content className="text-center">
        <div className="bg-slate-50 dark:bg-base-200 rounded-box p-4 min-w-max overflow-auto">
          <h1 className="text-5xl font-bold">{t("string.support_center")}</h1>
          <p className="py-6">{t("text.support_center")}</p>
          <Card side="lg" className="bg-slate-100 dark:bg-base-300 rounded-box">
            <Card.Body>
              <Table className="min-w-128 max-h-min overflow-auto">
                <Table.Head className="table-pin-cols">
                  <Tooltip message={"click to sort"}>
                    <span onClick={() => handleSort("id")}>#</span>
                  </Tooltip>
                  <span onClick={() => handleSort("category")}>{t("string.category")}</span>
                  <span onClick={() => handleSort("name")}>{t("string.product_name")}</span>
                  <span onClick={() => handleSort("download_type")}>{t("string.type")}</span>
                  <span>{t("string.download")}</span>
                </Table.Head>
                <Table.Body>
                  {filteredData.map((row) => (
                    <Table.Row key={row.id} hover={true}>
                      <span>{row.id}</span>
                      <span>{t(row.category)}</span>
                      <span>{t(row.name)}</span>
                      <span>{t(row.download_type)}</span>
                      <DownloadMenu data={row.download_url} />
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
