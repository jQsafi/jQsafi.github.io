/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        'page-light': '#D5C6FF',
        'card-light': '#fff',
        'text-dark-blue': '#26235C',
        'yellow-border': '#F7DF1E',
        'button-dark-blue': '#26235C',
        'button-dark-hover': '#3f3c80',
        'social-icon-hover-light': '#555',
        'card-dark': '#1a183d',
        'text-white-dark': '#FFFFFF',
        'text-light-grey-dark': '#E0E0E0',
        'text-grey-dark': '#CCCCCC',
        'button-yellow-dark': '#F7DF1E',
        'button-yellow-dark-text': '#1a183d',
        'button-yellow-dark-hover': '#e0c81b',
        // New colors for flyout menu
        'flyout-menu-bg-light': '#fff',
        'flyout-menu-text-light': '#333',
        'flyout-menu-hover-light': '#f3f4f6',
        'flyout-menu-button-bg-light': '#2563eb', // A shade of blue
        'flyout-menu-button-text-light': '#fff',

        'flyout-menu-bg-dark': '#2c2e4f', // Slightly lighter than card-dark
        'flyout-menu-text-dark': '#E0E0E0',
        'flyout-menu-hover-dark': '#3a3c5a',
        'flyout-menu-button-bg-dark': '#F7DF1E', // Yellow
        'flyout-menu-button-text-dark': '#1a183d', // Dark text
      },
      spacing: {
        '15px': '15px',
        '30px': '30px',
        '50px': '50px',
        '45px': '45px',
        '10px': '10px',
        '12px': '12px', /* Added for padding */
        '25px': '25px', /* Added for padding */
        '4rem': '4rem', /* For flyout positioning */
        '5rem': '5rem', /* For flyout positioning */
      },
      borderRadius: {
        '25px': '25px', /* Added for button-like corners */
        '50px': '50px',
        'lg': '0.5rem', // Default Tailwind rounded-lg
      },
      fontSize: {
        '1-8em': '1.8em',
        '1-1em': '1.1em',
        '0-95em': '0.95em',
        '1-2em': '1.2em',
        '1-5em': '1.5em',
        '2xl': '1.5rem', // Default Tailwind text-2xl
        'lg': '1.125rem', // Default Tailwind text-lg
      },
      boxShadow: {
        'card-light': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'card-dark': '0 10px 30px rgba(0, 0, 0, 0.2)',
        'button-custom': '0 2px 5px rgba(0,0,0,0.2)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', // Default Tailwind shadow-xl
      },
      transitionProperty: {
        'opacity': 'opacity',
      },
      transitionDuration: {
        '300': '300ms',
      },
    }
  }
}
