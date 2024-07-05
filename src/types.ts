interface ProductDataType {
  name: string;
  category: string;
  route: string;
  download_type: string;
  download_url: {
    [key: string]: string;
  };
}

interface ProductIndexType {
  [key: string]: ProductDataType;
}

interface DownloadDataType extends ProductDataType {
  id: string;
}

interface DownloadIndexType {
  [key: string]: string;
}
