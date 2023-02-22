import {create} from 'zustand';
import {Locale} from '../interfaces/Locale';
import enJson from '../i18n/en.json';
import frJson from '../i18n/fr.json';

import {Platform, NativeModules} from 'react-native';

const deviceLanguage: string =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

console.log(deviceLanguage); //en_US

const defaultLocale = deviceLanguage.substring(0, 2) as Locale;

const getJson = (locale: Locale) => {
  return locale === 'fr' ? frJson : enJson;
};

export interface I18nStore {
  t: typeof enJson;
  locale: Locale;
  changeLocale(newLocale: Locale): void;
}

export const useI18nStore = create<I18nStore>(set => ({
  t: getJson(defaultLocale),
  locale: defaultLocale,
  changeLocale: newLocale => {
    const t = getJson(newLocale);
    set({locale: newLocale, t: t});
  },
}));
