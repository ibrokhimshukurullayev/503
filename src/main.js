const translations = {
  ru: {
    heading: "Сайт восстанавливается",
    sub: "Сайт на реконструкции",
    footer_h1: "Возьми Bazar с собой!",
    footer_h2: "Удобное приложение для быстрого доступа ко всем товарам",
    copyright: "© 2022—2024 SmartBazar.<br />Все права защищены.",
    short_number: "Короткий номер",
    head_office: "Головной офис",
    email_label: "Электронная почта",
  },
  uz: {
    heading: "Sayt qayta tiklanmoqda",
    sub: "Sayt rekonstruksiya qilinmoqda",
    footer_h1: "Bazar-ni o'zingiz bilan olib yuring!",
    footer_h2: "Barcha mahsulotlarga tez kirish uchun qulay ilova",
    copyright: "© 2022—2024 SmartBazar.<br />Barcha huquqlar himoyalangan.",
    short_number: "Qisqa raqam",
    head_office: "Bosh ofis",
    email_label: "Elektron pochta",
  },
  en: {
    heading: "Site is being restored",
    sub: "Site under reconstruction",
    footer_h1: "Take Bazar with you!",
    footer_h2: "A convenient app for quick access to all products",
    copyright: "© 2022—2024 SmartBazar.<br />All rights reserved.",
    short_number: "Short number",
    head_office: "Head office",
    email_label: "Email",
  },
};

const STORAGE_KEY = "503-lang";
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
