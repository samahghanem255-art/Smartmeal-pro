const translations = {
  en: {
    title: "Smart Meal",
    subtitle: "Healthy meals for your day",
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner"
  },
  fr: {
    title: "Repas Intelligent",
    subtitle: "Repas sains pour votre journée",
    breakfast: "Petit-déjeuner",
    lunch: "Déjeuner",
    dinner: "Dîner"
  },
  ar: {
    title: "الوجبة الذكية",
    subtitle: "وجبات صحية ليومك",
    breakfast: "الفطور",
    lunch: "الغداء",
    dinner: "العشاء"
  }
};

function setLang(lang) {
  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("mainTitle").innerText = translations[lang].title;
  document.getElementById("subtitle").innerText = translations[lang].subtitle;
  document.getElementById("breakfast").innerText = translations[lang].breakfast;
  document.getElementById("lunch").innerText = translations[lang].lunch;
  document.getElementById("dinner").innerText = translations[lang].dinner;

  // اتجاه اللغة العربية
  document.body.dir = (lang === "ar") ? "rtl" : "ltr";
}
