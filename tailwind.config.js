/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary-fixed-dim": "#bec6e0",
        "primary-fixed-dim": "#bcc2ff",
        "surface-container": "#eeeef0",
        "on-surface-variant": "#444655",
        "error-container": "#ffdad6",
        "surface-container-high": "#e8e8ea",
        "on-tertiary-fixed": "#341100",
        "surface-container-low": "#f3f3f6",
        "on-secondary-container": "#5c647b",
        "on-error": "#ffffff",
        "inverse-surface": "#2f3133",
        "tertiary-container": "#c05100",
        "secondary": "#565e75",
        "inverse-on-surface": "#f0f0f3",
        "surface-variant": "#e2e2e5",
        "error": "#ba1a1a",
        "surface-bright": "#f9f9fc",
        "primary": "#3045e3",
        "on-surface": "#1a1c1e",
        "surface": "#f9f9fc",
        "surface-container-lowest": "#ffffff",
        "on-background": "#1a1c1e",
        "on-error-container": "#93000a",
        "tertiary-fixed": "#ffdbcb",
        "on-primary-fixed": "#000b63",
        "outline-variant": "#c5c5d8",
        "tertiary-fixed-dim": "#ffb692",
        "on-primary": "#ffffff",
        "on-tertiary-fixed-variant": "#793000",
        "on-secondary-fixed-variant": "#3e465c",
        "surface-container-highest": "#e2e2e5",
        "on-tertiary-container": "#fff9f7",
        "on-secondary": "#ffffff",
        "primary-container": "#4d61fc",
        "outline": "#757687",
        "tertiary": "#993f00",
        "inverse-primary": "#bcc2ff",
        "background": "#f9f9fc",
        "secondary-fixed": "#dae2fd",
        "secondary-container": "#dae2fd",
        "surface-tint": "#3449e6",
        "on-tertiary": "#ffffff",
        "primary-fixed": "#dfe0ff",
        "on-primary-container": "#fcf9ff",
        "surface-dim": "#dadadc",
        "on-secondary-fixed": "#131b2f",
        "on-primary-fixed-variant": "#0e29cf"
      },
      fontFamily: {
        "headline": ["Plus Jakarta Sans", "Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
};
