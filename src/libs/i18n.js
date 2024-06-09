import { bangla } from "@/locales/bd";
import { hindi } from "@/locales/in";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { english } from "../locales/en";
import { arabic } from "../locales/sa";

const resources = {
	en: {
		translation: english,
	},
	sa: {
		translation: arabic,
	},
	bd: {
		translation: bangla,
	},
	in: {
		translation: hindi,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "en",
	fallbackLng: "en",
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
