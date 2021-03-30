import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translations: {
                    "home": "Home",
                    "about-me": "About Me",
                    "apartments": "Apartments",
                    "name": `Samantha Azoulay`,
                    "real-estate": 'Real Estate',
                    "first-line-hero-section": "Are you looking for an apartment in Israel?",
                    "second-line-hero-section": "Do you need help finding a buyer or a seller?",
                    "about-title": "Meet Samantha",
                    "about-content":
                        `Since entering the real estate industry about a decade ago, Samantha has built an unparalleled
                        reputation for providing her clients with impeccable five-star service and exceptional results with
                        selling, renting, buying, and even renovating properties.
                        Samantha is easily reachable and speaks 3 languages (Hebrew, English, and French)
                        Samantha's success is based on hard work, her extensive market knowledge,
                        and not to mention her deep connections.
                        Over the years, she became a well-regarded realtor and an industry innovator.
                        Everything from purchasing and selling your home, to a leaky faucet, to a complete demo & renovation…
                        From real-estate lawyers, the appraiser, and the mortgage advisor.`,
                    "reliability": "Reliability",
                    "reliability-text": "You can count on me for whatever you need!",
                    "for-any-purpose": "For Any Purpose",
                    "for-any-purpose-text": "For good investments and living!",
                    "multi-language-support": "Multi Language Support",
                    "multi-language-support-text": "Hebrew, English and French",
                    "under-maintenance": 'Website is Under Maintenace',
                    "number-of-rooms": "Number of rooms",
                    "number-of-bedrooms": "Number of bedrooms",
                    "number-of-bathrooms": "Number of bathrooms",
                    "square-feet": "Total square feet",
                    "copyright": `Copyright © Developed by Noam Azoulay.`
                }
            },
            he: {
                translations: {
                    "home": "דף הבית",
                    "about-me": "אודותיי",
                    "apartments": "דירות",
                    "name": `סמנטה אזולאי`,
                    "real-estate": 'נדל"ן',
                    "first-line-hero-section": "מחפשים לקנות או להשכיר דירה?",
                    "second-line-hero-section": "מעוניינים לבחון נכס לצורך מכירה או השכרה?",
                    "about-title": "הכירו את סמנטה",
                    "about-content":
                        `מאז כניסתה אל תחום עסקי הנדל"ן לפני עשור, סמנטה בנתה את תדמיתה ע"י נתנית שירות מעולה ללקוחותיה,
                        עם תוצאות יוצאות דופן, במכירה, השכרה, קנייה ואף חידוש דירות לשם העלאת ערכם.
                        סמנטה דוברת כ3 שפות (עברית, אנגלית וצרפתית) ובכן זמינה לקהל רחב יותר של לקוחות.
                        הצלחתה בנויה על עבודה קשה והידע הרחב שלה בשוק הנדל"ן יחד עם קשרייה המרובים.
                        דואגת ועוזרת לכל מה שמסביב, כולל עורכי דין, יועצי משכנתאות ושמאים.`,
                    "reliability": "בהתחייבות",
                    "reliability-text": "תוכלו לסמוך עליי בכל דבר ועניין בעסקה!",
                    "for-any-purpose": "לכל מטרה",
                    "for-any-purpose-text": "לחיפוש דירה, מכירות, השכרות ואפילו השקעות",
                    "multi-language-support": "דוברת שפות",
                    "multi-language-support-text": "עברית, אנגלית וצרפתית.",
                    "under-maintenance": 'האתר תחת עבודות תחזוקה.',
                    "number-of-rooms": "חדרים",
                    "number-of-bedrooms": "חדרי שינה",
                    "number-of-bathrooms": "מקלחות / שירותים",
                    "square-feet": "מטר רבוע",
                    "copyright": `.פותח ע"י נועם אזולאי © כל הזכויות שמורות`
                }
            }
        },
        fallbackLng: "en",
        debug: true,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
    })

export default i18n