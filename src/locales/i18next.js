import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import tr from './tr.json';
import {getData} from '../utils/AsyncStorage.js';

export const languageResources = {
  en: {
    translation: en,
  },
  tr: {
    translation: tr,
  },
};
/*
const initializeLanguage = async () => {
  const selectedLanguage = await getData('appLanguage');
  i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: selectedLanguage,
    fallbackLng: 'tr',
    resources: languageResources,
    interpolation: {
      escapeValue: false,
    },
  });
};

initializeLanguage();
*/

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'tr',
  fallbackLng: 'tr',
  resources: languageResources,
});

export default i18next;
