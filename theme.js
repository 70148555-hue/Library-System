// 1. Ensure the path matches your filename exactly (themeconstants.js)
import { THEME_KEYS } from './constants/themeconstants.js';

// 2. Select the button and the root element
const themeBtn = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

/**
 * 3. Initial Theme Check
 * We run this immediately to prevent "flashing" (white screen before dark mode loads)
 */
const initTheme = () => {
    const savedTheme = localStorage.getItem(THEME_KEYS.STORAGE_KEY) || THEME_KEYS.LIGHT;
    
    if (savedTheme === THEME_KEYS.DARK) {
        htmlEl.classList.add('dark');
    } else {
        htmlEl.classList.remove('dark');
    }
};

// Execute initial check
initTheme();

/**
 * 4. Toggle Logic with Optional Chaining (?.)
 * The ?. ensures that if a page (like Sign In) doesn't have the 
 * toggle button, the script won't crash.
 */
themeBtn?.addEventListener('click', () => {
    // Toggle the 'dark' class on <html>
    htmlEl.classList.toggle('dark');
    
    // Check if dark mode is now active
    const isDarkNow = htmlEl.classList.contains('dark');
    
    // Determine the new theme string using ternary operator (ES6)
    const newTheme = isDarkNow ? THEME_KEYS.DARK : THEME_KEYS.LIGHT;
    
    // Save to LocalStorage for persistence (Task 4)
    localStorage.setItem(THEME_KEYS.STORAGE_KEY, newTheme);
});