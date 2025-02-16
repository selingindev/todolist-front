/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light: {
          background: '#F5F5F5',
          card: '#1E1E1E',
          textPrimary: '#212121',
          textSecondary: '#757575',
          accent: '#007AFF',
        },
        dark: {
          background: '#121212',
          card: '#FFFFFF',
          textPrimary: '#E0E0E0',
          textSecondary: '#B0B0B0',
          accent: '#4A90E2',
        },
      },
    },
  },
  plugins: [],
};
