import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#2B5A87',
        },
        secondary: {
          blue: '#4A8FDB',
        },
        accent: {
          blue: '#3D5E7C',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        neutral: {
          50: '#F5F8FA',
          100: '#E8EEF3',
          500: '#6B7280',
          900: '#1F2937',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'DEFAULT': '8px',
        'lg': '12px',
        'xl': '16px',
      },
    },
  },
  plugins: [],
};

export default config;
