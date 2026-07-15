import translations from "./i18n/translations.json";

const STORAGE_KEY = "smartbazar-lang";
const DEFAULT_LANG = "ru";

function applyLanguage(lang) {
  const dict = translations[lang] || translations[DEFAULT_LANG];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key]) el.innerHTML = dict[key];
  });

  document.documentElement.lang = lang;
}

function initLanguageSwitcher() {
  const select = document.getElementById("lang-select");
  if (!select) return;

  const savedLang = localStorage.getItem(STORAGE_KEY);
  const initialLang = translations[savedLang] ? savedLang : DEFAULT_LANG;

  select.value = initialLang;
  applyLanguage(initialLang);

  select.addEventListener("change", (event) => {
    const lang = event.target.value;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLanguage(lang);
  });
}

initLanguageSwitcher();
