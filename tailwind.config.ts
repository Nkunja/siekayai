import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-700': '#00B140', // or the specific green shade you're using
        'white': {
          300: '#ffffff',
          500: '#ffffff',
          600: '#ffffff',
          700: '#ffffff',
          900: '#ffffff',
        },
        'black': '#000000',
        'gray-200': '#e2e8f0',
      },
    },
  },
  plugins: [],
}

export default config
