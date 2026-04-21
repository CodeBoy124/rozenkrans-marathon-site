import nl from "./nl.json";
import en from "./en.json";

export type LocaleKey_t = "nl" | "en";

let active_locale: LocaleKey_t = "nl";

export function setLocale(new_locale: LocaleKey_t) {
  active_locale = new_locale;
}

export function getLocale(): LocaleKey_t {
  return active_locale;
}

export function i18n() {
  switch (active_locale) {
    case "nl":
      return nl;
    case "en":
      return en;
  }
}
