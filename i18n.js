import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "Smart Meal",
        subtitle: "Healthy meals for your day",
        breakfast: "Breakfast",
        lunch: "Lunch",
        dinner: "Dinner"
      }
    },
    fr: {
      translation: {
        title: "Repas Intelligent",
        subtitle: "Repas sains pour votre journée",
        breakfast: "Petit-déjeuner",
        lunch: "Déjeuner",
        dinner: "Dîner"
      }
    },
    ar: {
      translation: {
        title: "الوجبة الذكية",
        subtitle: "وجبات صحية ليومك",
        breakfast: "الفطور",
        lunch: "الغداء",
        dinner: "العشاء"
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
