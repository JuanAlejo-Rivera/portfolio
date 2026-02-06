/*
I want to add a language switcher (Spanish / English) to my portfolio built with React, TypeScript, and Tailwind CSS.

IMPORTANT CONSTRAINTS:
- Do NOT modify or break any existing functionality
- Only add internationalization (i18n) support
- The current layout and styles must remain intact
- The solution must be scalable and production-ready

FEATURE REQUIREMENTS:
1. Add a visible language toggle button in the navbar (EN / ES)
2. When the language changes, ALL textual content across the app must update dynamically
3. The selected language should persist while navigating through the site
4. Use a standard React i18n solution (recommended: react-i18next)
5. Code must be clean, modular, and fully typed with TypeScript
6. Make it easy to add more languages in the future

TECHNICAL TASKS TO IMPLEMENT:
1. Install and configure i18next + react-i18next
2. Add language detection and persistence in localStorage
3. Create a proper i18n configuration file
4. Create translation files:
   - /locales/en.json
   - /locales/es.json
5. Build a LanguageToggle component styled with Tailwind
6. Show examples of how to replace hardcoded text using the `useTranslation` hook

UI REQUIREMENTS FOR THE BUTTON:
- Small, modern toggle
- Positioned on the right side of the navbar
- Styled using Tailwind
- Clearly indicates current language

EXAMPLE USAGE IN COMPONENTS:
Replace hardcoded text like:
<h1>About Me</h1>

With translation usage like:
const { t } = useTranslation();
<h1>{t("nav.about")}</h1>

Do not remove existing components — only refactor text content to use translations.
*/
