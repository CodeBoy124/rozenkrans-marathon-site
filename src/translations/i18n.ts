import nl from "./nl.json";
import en from "./en.json";

export type LocaleKey_t = "nl" | "en";
export type ContentSet_t<T> = {
  nl: T;
  en: T;
};

const default_locale: LocaleKey_t = "nl";
let active_locale: LocaleKey_t = "nl";

export function setLocale(new_locale: LocaleKey_t) {
  active_locale = new_locale;
}

export function getLocale(): LocaleKey_t {
  return active_locale;
}

export function i18nUrl(target_url: string): string {
  if (active_locale == default_locale) {
    return target_url;
  } else {
    return "/" + active_locale + target_url;
  }
}

export function i18nContent<T>(arg: ContentSet_t<T>): T {
  return arg[active_locale];
}

export function i18n() {
  switch (active_locale) {
    case "nl":
      return nl;
    case "en":
      return en;
  }
}
