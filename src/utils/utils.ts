export function GetLanguageName(countryCode: string) {
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
