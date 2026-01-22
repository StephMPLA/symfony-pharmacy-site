import './stimulus_bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');


function initThemeToggle() {
    const btnTheme = document.getElementById("theme");
    const icon = document.getElementById("themeIcon");
    const html = document.documentElement;

    if (!btnTheme || !icon) return;

    const sunIcon = `
      <svg width="18" height="18" viewBox="0 0 15 15" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 4.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill="currentColor"/>
        <path d="M7.5 1V2.5M7.5 12.5V14M1 7.5H2.5M12.5 7.5H14
                 M3.22 3.22L4.28 4.28M10.72 10.72L11.78 11.78
                 M3.22 11.78L4.28 10.72M10.72 4.28L11.78 3.22"
              stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
      </svg>
    `;

    const moonIcon = `
      <svg width="18" height="18" viewBox="0 0 15 15" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 1.5a6 6 0 0 0 6 6 5 5 0 1 1-6-6Z"
              fill="currentColor"/>
      </svg>
    `;

    // état initial
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";

    html.classList.toggle("dark", isDark);
    icon.innerHTML = isDark ? moonIcon : sunIcon;

    // éviter double binding
    btnTheme.onclick = () => {
        const newDark = html.classList.toggle("dark");
        localStorage.setItem("theme", newDark ? "dark" : "light");
        icon.innerHTML = newDark ? moonIcon : sunIcon;
    };
}

/* ✅ AVEC TURBO */
document.addEventListener("turbo:load", initThemeToggle);

/* ✅ AU PREMIER CHARGEMENT */
document.addEventListener("DOMContentLoaded", initThemeToggle);
