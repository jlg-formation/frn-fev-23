import {create} from 'zustand';
import {Locale} from '../interfaces/Locale';
import enJson from '../i18n/en.json';
import frJson from '../i18n/fr.json';

export interface I18nStore {
  t: any;
  locale: Locale;
  changeLocale(newLocale: Locale): void;
}

export const useI18nStore = create<I18nStore>(set => ({
  t: enJson,
  locale: 'en',
  changeLocale: newLocale => {
    const t = newLocale === 'fr' ? frJson : enJson;
    set({locale: newLocale, t: t});
  },
}));
