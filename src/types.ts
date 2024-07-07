interface ProductDataType {
  name: string;
  category: string;
  route: string;
  downloads: {
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

interface NestedSpec {
  name: string;
  description: string | { [key: string]: string };
}
