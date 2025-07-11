import en from '@/translations/en.json';
import uk from '@/translations/uk.json';

const dictionaries = {
  en,
  uk,
};

export const getDictionary = (locale) => {
  return dictionaries[locale] || dictionaries.uk;
};
