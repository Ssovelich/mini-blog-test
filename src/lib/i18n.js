import en from "@/translations/en.json";
import uk from "@/translations/uk.json";

const dictionaries = {
  en,
  uk,
};

export function getDictionary(locale) {
  return dictionaries[locale] || dictionaries.en;
}