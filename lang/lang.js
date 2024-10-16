// Function to load language JSON files
async function loadLanguage(lang) {
    const response = await fetch(`lang/${lang}.json`);
    const translations = await response.json();
    return translations;
}

// Function to replace text content with translations
function applyTranslations(translations) {
    document.title = translations.title;
    document.documentElement.lang = translations.lang || 'en';

    document.getElementById('site-title').textContent = translations.title;
    document.getElementById('nav-home').textContent = translations.nav_home;
    document.getElementById('nav-discord').textContent = translations.nav_discord;
    document.getElementById('nav-spectrum').textContent = translations.nav_spectrum;
    document.getElementById('nav-join').textContent = translations.nav_join;

    document.getElementById('hero-title').textContent = translations.hero_title;
    document.getElementById('hero-subtitle').textContent = translations.hero_subtitle;
    document.getElementById('hero-button').textContent = translations.hero_button;

    document.getElementById('about-title').textContent = translations.about_title;
    document.getElementById('about-text').textContent = translations.about_text;
    document.getElementById('about-button').textContent = translations.about_button;

    document.getElementById('anthem-title').textContent = translations.anthem_title;
    document.getElementById('anthem-description').textContent = translations.anthem_description;

    document.getElementById('footer-text').innerHTML = translations.footer_text;
}

// Function to detect user's preferred language
function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.toLowerCase().startsWith('pt')) {
        return 'pt-br';
    } else {
        return 'en';
    }
}

// Function to set language
async function setLanguage(lang) {
    const translations = await loadLanguage(lang);
    applyTranslations(translations);
    // Save language preference in localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Event listeners for language buttons
document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-pt').addEventListener('click', () => setLanguage('pt-br'));

// Initialize language on page load
window.addEventListener('DOMContentLoaded', async () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    const lang = savedLang || detectLanguage();
    await setLanguage(lang);
});
