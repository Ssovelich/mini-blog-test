import en from './translations/en.json';
import ua from './translations/uk.json';

export const dictionaries = {
  en,
  ua,
};

export function getDictionary(locale) {
  return dictionaries[locale] || dictionaries.en;
}